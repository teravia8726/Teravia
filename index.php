<?php
// index.php - Gerbang Utama Aman via JavaScript Redirect
session_start();
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0;url=/views/home.php">
    <title>Memuat...</title>
</head>
<body>
    <script>
        window.location.href = "/views/home.php";
    </script>
</body>
</html>
