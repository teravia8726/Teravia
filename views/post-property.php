<?php
// views/post-property.php
// Halaman Form Pasang Iklan Properti (butuh login)

session_start();
require_once __DIR__ . '/../config/database.php';

if (empty($_SESSION['user_id'])) {
    header('Location: /views/login.php?error=' . urlencode('Silakan masuk terlebih dahulu untuk pasang iklan.'));
    exit;
}

$errors = $_SESSION['post_property_errors'] ?? [];
$old = $_SESSION['post_property_old'] ?? [];
unset($_SESSION['post_property_errors'], $_SESSION['post_property_old']);
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pasang Iklan Properti - Marketplace Properti AI & Ads</title>
    <link rel="stylesheet" href="/assets/css/style.css">
    <style>
        .form-container { max-width: 700px; margin: 30px auto; padding: 0 15px; }
        .form-card { background: white; border-radius: 12px; padding: 30px; box-shadow: 0 3px 10px rgba(0,0,0,0.05); }
        .form-card h1 { font-size: 22px; margin-bottom: 5px; }
        .form-card p.subtitle { color: #777; font-size: 14px; margin-bottom: 25px; }
        .form-group { margin-bottom: 18px; }
        .form-group label { display: block; font-size: 13px; font-weight: bold; margin-bottom: 6px; color: #333; }
        .form-group input, .form-group select, .form-group textarea {
            width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px;
        }
        .form-row { display: flex; gap: 15px; }
        .form-row .form-group { flex: 1; }
        textarea { resize: vertical; min-height: 100px; }
        .btn-submit {
            background: #007bff; color: white; border: none; padding: 12px 24px;
            border-radius: 6px; font-weight: bold; cursor: pointer; width: 100%; font-size: 15px;
        }
        .alert-error {
            background: #f8d7da; color: #842029; padding: 12px 16px; border-radius: 8px; margin-bottom: 15px; font-size: 13px;
        }
        .alert-error ul { margin: 5px 0 0 18px; }
    </style>
</head>
<body>

    <?php include __DIR__ . '/../includes/navbar-desktop.php'; ?>

    <div class="form-container">
        <div class="form-card">
            <h1>📢 Pasang Iklan Properti</h1>
            <p class="subtitle">Isi detail properti Anda selengkap mungkin agar cepat dilirik calon pembeli/penyewa.</p>

            <?php if (!empty($errors)): ?>
                <div class="alert-error">
                    <strong>Ada kesalahan:</strong>
                    <ul>
                        <?php foreach ($errors as $err): ?>
                            <li><?= htmlspecialchars($err) ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            <?php endif; ?>

            <form method="POST" action="/controllers/property-process.php" enctype="multipart/form-data">
                <input type="hidden" name="action" value="create">

                <div class="form-row">
                    <div class="form-group">
                        <label>Kategori</label>
                        <select name="kategori" required>
                            <option value="jual" <?= ($old['kategori'] ?? '') === 'jual' ? 'selected' : '' ?>>Dijual</option>
                            <option value="sewa" <?= ($old['kategori'] ?? '') === 'sewa' ? 'selected' : '' ?>>Disewakan</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Tipe Properti</label>
                        <select name="tipe_properti" required>
                            <?php foreach (['Rumah', 'Apartemen', 'Ruko', 'Tanah'] as $t): ?>
                                <option value="<?= $t ?>" <?= ($old['tipe_properti'] ?? '') === $t ? 'selected' : '' ?>><?= $t ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label>Judul Iklan</label>
                    <input type="text" name="judul_properti" placeholder="Contoh: Rumah Minimalis 2 Lantai di Kemang" value="<?= htmlspecialchars($old['judul_properti'] ?? '') ?>" required>
                </div>

                <div class="form-group">
                    <label>Deskripsi</label>
                    <textarea name="deskripsi" placeholder="Ceritakan detail properti Anda..."><?= htmlspecialchars($old['deskripsi'] ?? '') ?></textarea>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>Harga (Rp)</label>
                        <input type="number" name="harga" min="0" placeholder="500000000" value="<?= htmlspecialchars($old['harga'] ?? '') ?>" required>
                    </div>
                    <div class="form-group">
                        <label>Lokasi</label>
                        <input type="text" name="lokasi" placeholder="Kota / Kecamatan" value="<?= htmlspecialchars($old['lokasi'] ?? '') ?>" required>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>Kamar Tidur</label>
                        <input type="number" name="kamar_tidur" min="0" value="<?= htmlspecialchars($old['kamar_tidur'] ?? '0') ?>">
                    </div>
                    <div class="form-group">
                        <label>Kamar Mandi</label>
                        <input type="number" name="kamar_mandi" min="0" value="<?= htmlspecialchars($old['kamar_mandi'] ?? '0') ?>">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>Luas Tanah (m²)</label>
                        <input type="number" name="luas_tanah" min="0" value="<?= htmlspecialchars($old['luas_tanah'] ?? '0') ?>">
                    </div>
                    <div class="form-group">
                        <label>Luas Bangunan (m²)</label>
                        <input type="number" name="luas_bangunan" min="0" value="<?= htmlspecialchars($old['luas_bangunan'] ?? '0') ?>">
                    </div>
                </div>

                <div class="form-group">
                    <label>Foto Properti (opsional, JPG/PNG/WEBP, maks 5MB)</label>
                    <input type="file" name="foto" accept="image/jpeg,image/png,image/webp">
                </div>

                <button type="submit" class="btn-submit">🚀 Pasang Iklan Sekarang</button>
            </form>
        </div>
    </div>

    <?php include __DIR__ . '/../includes/footer.php'; ?>

</body>
</html>
