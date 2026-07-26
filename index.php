<?php 
declare(strict_types=1);

$page = $_GET['page'] ?? 'home';

$allowedPages = [
    'home',
    'search',
    'detail',
    'login',
    'register',
    'membership',
    'post-property'
];

if (!in_array($page, $allowedPages, true)) {
    http_response_code(404);
    exit('404 - Halaman tidak ditemukan');
}

// require_once __DIR__ . '/config/database.php';

$view = __DIR__ . '/views/' . $page . '.php';

if (!file_exists($view)) {
    http_response_code(404);
    exit('View tidak ditemukan');
}

require_once $view;
