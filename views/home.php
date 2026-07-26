<?php
// views/home.php
// Halaman Beranda Utama Marketplace Properti AI & Ads

session_start();
require_once __DIR__ . '/../config/database.php';

// Ambil data properti terbaru dari database Supabase
try {
    $stmt = $conn->query("SELECT p.*, u.nama as nama_agen FROM properties p JOIN users u ON p.user_id = u.id ORDER BY p.created_at DESC LIMIT 6");
    $properties = $stmt->fetchAll();
} catch (PDOException $e) {
    $properties = []; // Kosongkan jika belum ada data/tabel
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beranda - Marketplace Properti AI & Ads</title>
    <link rel="stylesheet" href="/assets/css/style.css">
    <style>
        /* CSS Khusus Halaman Beranda */
        .hero-section {
            background: linear-gradient(135deg, #007bff, #0056b3);
            color: white;
            padding: 50px 20px;
            text-align: center;
        }

        .hero-section h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }

        .hero-section p {
            font-size: 14px;
            opacity: 0.9;
            margin-bottom: 25px;
        }

        /* Quick Search Box */
        .search-box {
            background: white;
            padding: 15px;
            border-radius: 12px;
            max-width: 600px;
            margin: 0 auto;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .search-box input, .search-box select {
            flex: 1;
            min-width: 130px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 6px;
            font-size: 14px;
        }

        .search-box button {
            background: #28a745;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 6px;
            font-weight: bold;
            cursor: pointer;
        }

        /* Container Utama */
        .main-container {
            max-width: 1100px;
            margin: 30px auto;
            padding: 0 15px;
        }

        .section-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .section-title h2 {
            font-size: 20px;
            color: #333;
        }

        .section-title a {
            color: #007bff;
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
        }

        /* Grid Listing Properti */
        .property-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 20px;
        }

        .property-card {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 3px 10px rgba(0,0,0,0.05);
            transition: transform 0.2s;
            border: 1px solid #eee;
        }

        .property-card:hover {
            transform: translateY(-4px);
        }

        .property-img-placeholder {
            height: 180px;
            background: #e9ecef;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #6c757d;
            font-weight: bold;
        }

        .property-body {
            padding: 15px;
        }

        .badge-kategori {
            background: #e2f0d9;
            color: #385723;
            font-size: 11px;
            font-weight: bold;
            padding: 4px 8px;
            border-radius: 4px;
            display: inline-block;
            margin-bottom: 8px;
        }

        .property-title {
            font-size: 16px;
            font-weight: bold;
            color: #222;
            margin-bottom: 6px;
            text-decoration: none;
            display: block;
        }

        .property-price {
            font-size: 18px;
            font-weight: bold;
            color: #007bff;
            margin-bottom: 10px;
        }

        .property-footer {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: #666;
            border-top: 1px solid #f1f1f1;
            padding-top: 10px;
            margin-top: 10px;
        }

        /* Banner Promosi Agen */
        .agent-banner {
            background: #fff3cd;
            border: 1px solid #ffeeba;
            padding: 25px;
            border-radius: 12px;
            text-align: center;
            margin: 40px 0;
        }

        .agent-banner h3 {
            color: #856404;
            margin-bottom: 8px;
        }

        .agent-banner p {
            font-size: 14px;
            color: #666;
            margin-bottom: 15px;
        }

        .btn-join {
            background: #856404;
            color: white;
            padding: 10px 20px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: bold;
            display: inline-block;
        }

        /* Responsive Mobile adjustment */
        @media (max-width: 768px) {
            .hero-section {
                padding: 30px 15px;
            }
            .hero-section h1 {
                font-size: 22px;
            }
            .search-box {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>

    <!-- Memuat Navbar Desktop -->
    <?php include __DIR__ . '/../includes/navbar-desktop.php'; ?>

    <!-- Hero Section & Pencarian Cepat -->
    <section class="hero-section">
        <h1>Temukan Properti Impian Anda dengan AI</h1>
        <p>Platform marketplace properti mandiri dengan fitur generator iklan & promosi otomatis.</p>
        
        <form class="search-box" action="/views/search.php" method="GET">
            <select name="kategori">
                <option value="jual">Dijual</option>
                <option value="sewa">Disewakan</option>
            </select>
            <select name="tipe">
                <option value="">Semua Tipe</option>
                <option value="Rumah">Rumah</option>
                <option value="Apartemen">Apartemen</option>
                <option value="Ruko">Ruko</option>
                <option value="Tanah">Tanah</option>
            </select>
            <input type="text" name="lokasi" placeholder="Cari kota atau lokasi...">
            <button type="submit">Cari</button>
        </form>
    </section>

    <!-- Konten Utama Beranda -->
    <div class="main-container">
        
        <!-- Bagian Listing Terbaru -->
        <div class="section-title">
            <h2>🔥 Listing Properti Terbaru</h2>
            <a href="/views/search.php">Lihat Semua &raquo;</a>
        </div>

        <?php if (empty($properties)): ?>
            <!-- Jika belum ada properti di database -->
            <div style="text-align: center; padding: 40px; background: white; border-radius: 10px; color: #777;">
                <p>Belum ada properti yang ditayangkan saat ini.</p>
                <p style="font-size: 13px; margin-top: 5px;">Jadilah agen pertama yang memasang iklan properti!</p>
                <br>
                <a href="/views/post-property.php" class="btn-primary">Pasang Iklan Sekarang</a>
            </div>
        <?php else: ?>
            <div class="property-grid">
                <?php foreach ($properties as $prop): ?>
                    <div class="property-card">
                        <div class="property-img-placeholder">
                            🏠 Foto Properti
                        </div>
                        <div class="property-body">
                            <span class="badge-kategori"><?= strtoupper($prop['kategori']) ?> - <?= htmlspecialchars($prop['tipe_properti']) ?></span>
                            <a href="/views/detail.php?id=<?= $prop['id'] ?>" class="property-title"><?= htmlspecialchars($prop['judul_properti']) ?></a>
                            <div class="property-price">Rp <?= number_format($prop['harga'], 0, ',', '.') ?></div>
                            <p style="font-size: 13px; color: #666; margin-bottom: 5px;">📍 <?= htmlspecialchars($prop['lokasi']) ?></p>
                            <div class="property-footer">
                                <span>Agen: <strong><?= htmlspecialchars($prop['nama_agen']) ?></strong></span>
                                <span><?= date('d M Y', strtotime($prop['created_at'])) ?></span>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>

        <!-- Banner Ajakan untuk Agen (Inbound Model) -->
        <div class="agent-banner">
            <h3>Punya Properti untuk Dijual atau Disewakan?</h3>
            <p>Gabung bersama kami, nikmati kemudahan pasang iklan dibantu AI Copywriter, dan jangkau calon pembeli lebih cepat.</p>
            <a href="/views/membership.php" class="btn-join">Mulai Berlangganan Agen</a>
        </div>

    </div>

    <!-- Memuat Footer & Bottom-Nav Mobile -->
    <?php include __DIR__ . '/../includes/footer.php'; ?>

</body>
</html>

