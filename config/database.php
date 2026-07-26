<?php
// config/database.php

$host = getenv('DB_HOST') ?: 'db.xxxxxx.supabase.co'; // Ganti host Supabase Anda
$port = getenv('DB_PORT') ?: '5432';
$db_name = getenv('DB_NAME') ?: 'postgres';
$username = getenv('DB_USER') ?: 'postgres';
$password = getenv('DB_PASSWORD') ?: 'PASSWORD_ANDA';

try {
    $dsn = "pgsql:host=$host;port=$port;dbname=$db_name";
    $conn = new PDO($dsn, $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
} catch (PDOException $e) {
    die("Koneksi database gagal: " . $e->getMessage());
}
?>
  
