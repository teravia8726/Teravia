<?php
// views/login.php
session_start();

if (!empty($_SESSION['user_id'])) {
    header('Location: /views/home.php');
    exit;
}

$error = $_GET['error'] ?? '';
$success = $_GET['success'] ?? '';
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Masuk - Marketplace Properti AI & Ads</title>
    <link rel="stylesheet" href="/assets/css/style.css">
    <style>
        .auth-container { max-width: 420px; margin: 60px auto; padding: 0 15px; }
        .auth-card { background: white; border-radius: 12px; padding: 30px; box-shadow: 0 3px 10px rgba(0,0,0,0.05); }
        .auth-card h1 { font-size: 22px; margin-bottom: 20px; text-align: center; }
        .form-group { margin-bottom: 16px; }
        .form-group label { display: block; font-size: 13px; font-weight: bold; margin-bottom: 6px; }
        .form-group input { width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; }
        .btn-submit { background: #007bff; color: white; border: none; padding: 12px; border-radius: 6px; font-weight: bold; cursor: pointer; width: 100%; font-size: 15px; }
        .auth-footer { text-align: center; margin-top: 15px; font-size: 13px; }
        .alert-error { background: #f8d7da; color: #842029; padding: 10px 14px; border-radius: 8px; margin-bottom: 15px; font-size: 13px; }
        .alert-success { background: #e2f0d9; color: #385723; padding: 10px 14px; border-radius: 8px; margin-bottom: 15px; font-size: 13px; }
    </style>
</head>
<body>

    <?php include __DIR__ . '/../includes/navbar-desktop.php'; ?>

    <div class="auth-container">
        <div class="auth-card">
            <h1>Masuk ke Akun Anda</h1>

            <?php if ($error): ?><div class="alert-error"><?= htmlspecialchars($error) ?></div><?php endif; ?>
            <?php if ($success): ?><div class="alert-success"><?= htmlspecialchars($success) ?></div><?php endif; ?>

            <form method="POST" action="/controllers/auth-process.php">
                <input type="hidden" name="action" value="login">
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" name="email" required>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" name="password" required>
                </div>
                <button type="submit" class="btn-submit">Masuk</button>
            </form>

            <p class="auth-footer">Belum punya akun? <a href="/views/register.php">Daftar di sini</a></p>
        </div>
    </div>

    <?php include __DIR__ . '/../includes/footer.php'; ?>

</body>
</html>
