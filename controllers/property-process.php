<?php
// controllers/property-process.php
// Menangani proses simpan iklan properti baru (dan hapus milik sendiri).

session_start();
require_once __DIR__ . '/../config/database.php';

// Semua aksi di file ini butuh login
if (empty($_SESSION['user_id'])) {
    header('Location: /views/login.php?error=' . urlencode('Silakan masuk terlebih dahulu.'));
    exit;
}

$action = $_POST['action'] ?? $_GET['action'] ?? '';

// --- HAPUS PROPERTI (hanya milik sendiri) ---
if ($action === 'delete') {
    $id = $_POST['id'] ?? $_GET['id'] ?? null;

    if (!$id) {
        header('Location: /views/home.php');
        exit;
    }

    try {
        $stmt = $conn->prepare("DELETE FROM properties WHERE id = :id AND user_id = :user_id");
        $stmt->execute(['id' => $id, 'user_id' => $_SESSION['user_id']]);
    } catch (PDOException $e) {
        // Diamkan, kembalikan user ke beranda
    }

    header('Location: /views/home.php');
    exit;
}

// --- SIMPAN PROPERTI BARU ---
if ($action === 'create') {
    $kategori = $_POST['kategori'] ?? '';
    $tipe_properti = trim($_POST['tipe_properti'] ?? '');
    $judul_properti = trim($_POST['judul_properti'] ?? '');
    $deskripsi = trim($_POST['deskripsi'] ?? '');
    $harga = $_POST['harga'] ?? '';
    $lokasi = trim($_POST['lokasi'] ?? '');
    $kamar_tidur = (int) ($_POST['kamar_tidur'] ?? 0);
    $kamar_mandi = (int) ($_POST['kamar_mandi'] ?? 0);
    $luas_tanah = (int) ($_POST['luas_tanah'] ?? 0);
    $luas_bangunan = (int) ($_POST['luas_bangunan'] ?? 0);

    $errors = [];

    if (!in_array($kategori, ['jual', 'sewa'], true)) {
        $errors[] = 'Kategori tidak valid.';
    }
    if ($tipe_properti === '') {
        $errors[] = 'Tipe properti wajib diisi.';
    }
    if ($judul_properti === '') {
        $errors[] = 'Judul properti wajib diisi.';
    }
    if (!is_numeric($harga) || (float) $harga <= 0) {
        $errors[] = 'Harga tidak valid.';
    }
    if ($lokasi === '') {
        $errors[] = 'Lokasi wajib diisi.';
    }

    // --- Upload foto (opsional) ---
    $fotoNama = null;

    if (!empty($_FILES['foto']['name']) && $_FILES['foto']['error'] === UPLOAD_ERR_OK) {
        $allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
        $maxSize = 5 * 1024 * 1024; // 5MB

        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $_FILES['foto']['tmp_name']);
        finfo_close($finfo);

        if (!in_array($mimeType, $allowedTypes, true)) {
            $errors[] = 'Format foto harus JPG, PNG, atau WEBP.';
        } elseif ($_FILES['foto']['size'] > $maxSize) {
            $errors[] = 'Ukuran foto maksimal 5MB.';
        } else {
            $ext = pathinfo($_FILES['foto']['name'], PATHINFO_EXTENSION);
            $fotoNama = uniqid('prop_', true) . '.' . strtolower($ext);
            $uploadDir = __DIR__ . '/../assets/upload/';
            $uploadPath = $uploadDir . $fotoNama;

            if (!is_dir($uploadDir)) {
                mkdir($uploadDir, 0755, true);
            }

            if (!move_uploaded_file($_FILES['foto']['tmp_name'], $uploadPath)) {
                $errors[] = 'Gagal mengunggah foto, coba lagi.';
                $fotoNama = null;
            }
        }
    }

    if (!empty($errors)) {
        $_SESSION['post_property_errors'] = $errors;
        $_SESSION['post_property_old'] = $_POST;
        header('Location: /views/post-property.php');
        exit;
    }

    try {
        $stmt = $conn->prepare(
            "INSERT INTO properties
                (user_id, kategori, tipe_properti, judul_properti, deskripsi, harga, lokasi,
                 kamar_tidur, kamar_mandi, luas_tanah, luas_bangunan, foto)
             VALUES
                (:user_id, :kategori, :tipe_properti, :judul_properti, :deskripsi, :harga, :lokasi,
                 :kamar_tidur, :kamar_mandi, :luas_tanah, :luas_bangunan, :foto)"
        );

        $stmt->execute([
            'user_id' => $_SESSION['user_id'],
            'kategori' => $kategori,
            'tipe_properti' => $tipe_properti,
            'judul_properti' => $judul_properti,
            'deskripsi' => $deskripsi,
            'harga' => $harga,
            'lokasi' => $lokasi,
            'kamar_tidur' => $kamar_tidur,
            'kamar_mandi' => $kamar_mandi,
            'luas_tanah' => $luas_tanah,
            'luas_bangunan' => $luas_bangunan,
            'foto' => $fotoNama,
        ]);

        $newId = $conn->lastInsertId('properties_id_seq');

        header('Location: /views/detail.php?id=' . urlencode($newId) . '&success=1');
        exit;
    } catch (PDOException $e) {
        $_SESSION['post_property_errors'] = ['Gagal menyimpan properti: ' . $e->getMessage()];
        $_SESSION['post_property_old'] = $_POST;
        header('Location: /views/post-property.php');
        exit;
    }
}

header('Location: /views/post-property.php');
exit;
