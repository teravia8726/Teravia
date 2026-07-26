<?php
// controllers/auth-process.php
// Menangani proses register, login, dan logout.

session_start();
require_once __DIR__ . '/../config/database.php';

$action = $_POST['action'] ?? $_GET['action'] ?? '';

// --- LOGOUT ---
if ($action === 'logout') {
    $_SESSION = [];
    session_destroy();
    header('Location: /views/login.php');
    exit;
}

// --- REGISTER ---
if ($action === 'register') {
    $nama = trim($_POST['nama'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';

    if ($nama === '' || $email === '' || $password === '') {
        header('Location: /views/register.php?error=' . urlencode('Semua kolom wajib diisi.'));
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header('Location: /views/register.php?error=' . urlencode('Format email tidak valid.'));
        exit;
    }

    if (strlen($password) < 6) {
        header('Location: /views/register.php?error=' . urlencode('Password minimal 6 karakter.'));
        exit;
    }

    try {
        $check = $conn->prepare("SELECT id FROM users WHERE email = :email");
        $check->execute(['email' => $email]);

        if ($check->fetch()) {
            header('Location: /views/register.php?error=' . urlencode('Email sudah terdaftar.'));
            exit;
        }

        $hashed = password_hash($password, PASSWORD_DEFAULT);

        $stmt = $conn->prepare(
            "INSERT INTO users (nama, email, password) VALUES (:nama, :email, :password)"
        );
        $stmt->execute([
            'nama' => $nama,
            'email' => $email,
            'password' => $hashed,
        ]);

        header('Location: /views/login.php?success=' . urlencode('Registrasi berhasil, silakan masuk.'));
        exit;
    } catch (PDOException $e) {
        header('Location: /views/register.php?error=' . urlencode('Registrasi gagal: ' . $e->getMessage()));
        exit;
    }
}

// --- LOGIN ---
if ($action === 'login') {
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';

    if ($email === '' || $password === '') {
        header('Location: /views/login.php?error=' . urlencode('Email dan password wajib diisi.'));
        exit;
    }

    try {
        $stmt = $conn->prepare("SELECT * FROM users WHERE email = :email LIMIT 1");
        $stmt->execute(['email' => $email]);
        $user = $stmt->fetch();

        if (!$user || !password_verify($password, $user['password'])) {
            header('Location: /views/login.php?error=' . urlencode('Email atau password salah.'));
            exit;
        }

        $_SESSION['user_id'] = $user['id'];
        $_SESSION['user_nama'] = $user['nama'];
        $_SESSION['user_email'] = $user['email'];

        header('Location: /views/home.php');
        exit;
    } catch (PDOException $e) {
        header('Location: /views/login.php?error=' . urlencode('Login gagal: ' . $e->getMessage()));
        exit;
    }
}

// Jika diakses tanpa action yang valid
header('Location: /views/login.php');
exit;
