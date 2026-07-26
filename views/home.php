<?php
$pageTitle = "TERAVIA - Jual Beli & Sewa Properti Seluruh Indonesia";
?>

<!DOCTYPE html>
<html lang="id">

<head>

<meta charset="UTF-8">

<meta name="viewport"
      content="width=device-width, initial-scale=1.0">

<title><?= $pageTitle ?></title>

<meta name="description"
      content="Marketplace Properti Indonesia">

<link rel="stylesheet" href="/assets/css/style.css">
<link rel="stylesheet" href="/assets/css/desktop.css">
<link rel="stylesheet" href="/assets/css/mobile.css">
<link rel="stylesheet" href="/assets/css/bottom-nav.css">

</head>

<body>

<?php require __DIR__.'/partials/header.php'; ?>

<?php require __DIR__.'/partials/hero.php'; ?>

<?php require __DIR__.'/partials/search-box.php'; ?>

<?php require __DIR__.'/partials/categories.php'; ?>

<?php require __DIR__.'/partials/featured.php'; ?>

<?php require __DIR__.'/partials/latest.php'; ?>

<?php require __DIR__.'/partials/ai-section.php'; ?>

<?php require __DIR__.'/partials/membership.php'; ?>

<?php require __DIR__.'/partials/cta.php'; ?>

<?php require __DIR__.'/partials/footer.php'; ?>

<script src="/assets/js/modal.js"></script>

</body>
</html>
