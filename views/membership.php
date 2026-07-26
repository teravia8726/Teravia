<?php
// views/membership.php
// Halaman Paket Membership untuk Agen

session_start();

$adminWhatsApp = '6281234567890'; // TODO: ganti dengan nomor WhatsApp admin/CS sebenarnya

$paket = [
    [
        'nama' => 'Starter',
        'harga' => 'Gratis',
        'fitur' => ['3 slot iklan aktif', 'Tampil di listing pencarian', 'Dukungan email'],
        'highlight' => false,
    ],
    [
        'nama' => 'Pro Agent',
        'harga' => 'Rp 149.000/bulan',
        'fitur' => ['15 slot iklan aktif', 'Badge "Agen Terverifikasi"', 'AI Copywriter untuk deskripsi iklan', 'Prioritas tampil di beranda'],
        'highlight' => true,
    ],
    [
        'nama' => 'Agency',
        'harga' => 'Rp 399.000/bulan',
        'fitur' => ['Iklan tanpa batas', 'Semua fitur Pro Agent', 'Laporan performa iklan', 'Dukungan prioritas 24/7'],
        'highlight' => false,
    ],
];
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paket Membership Agen - Marketplace Properti AI & Ads</title>
    <link rel="stylesheet" href="/assets/css/style.css">
    <style>
        .membership-hero { background: linear-gradient(135deg, #007bff, #0056b3); color: white; padding: 45px 20px; text-align: center; }
        .membership-hero h1 { font-size: 26px; margin-bottom: 10px; }
        .membership-hero p { opacity: 0.9; font-size: 14px; }
        .pricing-container { max-width: 1000px; margin: 35px auto; padding: 0 15px; }
        .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
        .pricing-card {
            background: white; border-radius: 14px; padding: 28px 24px; text-align: center;
            box-shadow: 0 3px 12px rgba(0,0,0,0.06); border: 1px solid #eee; position: relative;
        }
        .pricing-card.highlight { border: 2px solid #007bff; transform: scale(1.03); }
        .pricing-card .tag {
            position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
            background: #007bff; color: white; font-size: 11px; font-weight: bold;
            padding: 4px 12px; border-radius: 20px;
        }
        .pricing-card h3 { font-size: 18px; margin-bottom: 8px; }
        .pricing-card .price { font-size: 22px; font-weight: bold; color: #007bff; margin-bottom: 18px; }
        .pricing-card ul { list-style: none; text-align: left; margin-bottom: 24px; }
        .pricing-card ul li { font-size: 13px; color: #555; padding: 6px 0; border-bottom: 1px dashed #eee; }
        .pricing-card ul li:before { content: "✔ "; color: #28a745; font-weight: bold; }
        .btn-choose {
            display: inline-block; width: 100%; padding: 10px; border-radius: 6px; font-weight: bold;
            text-decoration: none; background: #007bff; color: white;
        }
        .pricing-card:not(.highlight) .btn-choose { background: #f1f5f9; color: #007bff; }
        .faq-note { text-align: center; margin-top: 30px; color: #777; font-size: 13px; }
    </style>
</head>
<body>

    <?php include __DIR__ . '/../includes/navbar-desktop.php'; ?>

    <section class="membership-hero">
        <h1>⭐ Paket Membership Agen</h1>
        <p>Pilih paket yang sesuai untuk mempercepat penjualan/penyewaan properti Anda.</p>
    </section>

    <div class="pricing-container">
        <div class="pricing-grid">
            <?php foreach ($paket as $p): ?>
                <div class="pricing-card <?= $p['highlight'] ? 'highlight' : '' ?>">
                    <?php if ($p['highlight']): ?><span class="tag">Paling Populer</span><?php endif; ?>
                    <h3><?= htmlspecialchars($p['nama']) ?></h3>
                    <div class="price"><?= htmlspecialchars($p['harga']) ?></div>
                    <ul>
                        <?php foreach ($p['fitur'] as $f): ?>
                            <li><?= htmlspecialchars($f) ?></li>
                        <?php endforeach; ?>
                    </ul>
                    <a href="https://wa.me/<?= $adminWhatsApp ?>?text=<?= urlencode('Halo, saya tertarik dengan paket ' . $p['nama']) ?>" class="btn-choose" target="_blank" rel="noopener">
                        Hubungi Kami
                    </a>
                </div>
            <?php endforeach; ?>
        </div>

        <p class="faq-note">Pembayaran & aktivasi paket saat ini masih diproses manual via WhatsApp Admin. Sistem pembayaran otomatis akan segera hadir.</p>
    </div>

    <?php include __DIR__ . '/../includes/footer.php'; ?>

</body>
</html>
