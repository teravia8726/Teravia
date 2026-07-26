<?php
// views/detail.php
// Halaman Detail Properti

session_start();
require_once __DIR__ . '/../config/database.php';

$id = $_GET['id'] ?? null;
$property = null;

if ($id !== null && ctype_digit((string) $id)) {
    try {
        $stmt = $conn->prepare(
            "SELECT p.*, u.nama as nama_agen
             FROM properties p
             JOIN users u ON p.user_id = u.id
             WHERE p.id = :id
             LIMIT 1"
        );
        $stmt->execute(['id' => $id]);
        $property = $stmt->fetch();
    } catch (PDOException $e) {
        $property = null;
    }
}

$isOwner = $property && !empty($_SESSION['user_id']) && (int) $_SESSION['user_id'] === (int) $property['user_id'];
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $property ? htmlspecialchars($property['judul_properti']) : 'Properti Tidak Ditemukan' ?> - Marketplace Properti AI & Ads</title>
    <link rel="stylesheet" href="/assets/css/style.css">
    <style>
        .detail-container {
            max-width: 900px;
            margin: 30px auto;
            padding: 0 15px;
        }
        .detail-photo {
            height: 360px;
            background: #e9ecef;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #6c757d;
            font-weight: bold;
            font-size: 18px;
            overflow: hidden;
            margin-bottom: 20px;
        }
        .detail-photo img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .detail-card {
            background: white;
            border-radius: 12px;
            padding: 25px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.05);
            margin-bottom: 20px;
        }
        .detail-badge {
            background: #e2f0d9;
            color: #385723;
            font-size: 12px;
            font-weight: bold;
            padding: 4px 10px;
            border-radius: 4px;
            display: inline-block;
            margin-bottom: 10px;
        }
        .detail-title { font-size: 24px; font-weight: bold; margin-bottom: 8px; }
        .detail-price { font-size: 26px; font-weight: bold; color: #007bff; margin-bottom: 15px; }
        .detail-meta { display: flex; gap: 20px; flex-wrap: wrap; margin: 15px 0; color: #555; font-size: 14px; }
        .detail-meta span { background: #f5f5f5; padding: 6px 12px; border-radius: 6px; }
        .detail-desc { line-height: 1.6; color: #444; white-space: pre-line; }
        .agent-box { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 15px; }
        .agent-name { font-weight: bold; font-size: 16px; }
        .btn-wa {
            background: #25D366; color: white; padding: 10px 20px; border-radius: 6px;
            text-decoration: none; font-weight: bold; display: inline-block;
        }
        .not-found { text-align: center; padding: 60px 20px; }
        .owner-actions { margin-top: 15px; }
        .owner-actions a { margin-right: 10px; font-size: 13px; color: #dc3545; text-decoration: none; }
    </style>
</head>
<body>

    <?php include __DIR__ . '/../includes/navbar-desktop.php'; ?>

    <div class="detail-container">

        <?php if (!$property): ?>

            <div class="not-found">
                <h2>Properti tidak ditemukan</h2>
                <p style="color:#777; margin-top:10px;">Properti mungkin sudah dihapus atau link tidak valid.</p>
                <br>
                <a href="/views/search.php" class="btn-primary">Cari Properti Lain</a>
            </div>

        <?php else: ?>

            <?php if (!empty($_GET['success'])): ?>
                <div style="background:#e2f0d9; color:#385723; padding:12px 16px; border-radius:8px; margin-bottom:15px;">
                    ✅ Properti berhasil dipasang!
                </div>
            <?php endif; ?>

            <div class="detail-photo">
                <?php if (!empty($property['foto']) && file_exists(__DIR__ . '/../assets/upload/' . $property['foto'])): ?>
                    <img src="/assets/upload/<?= htmlspecialchars($property['foto']) ?>" alt="<?= htmlspecialchars($property['judul_properti']) ?>">
                <?php else: ?>
                    🏠 Belum ada foto
                <?php endif; ?>
            </div>

            <div class="detail-card">
                <span class="detail-badge"><?= strtoupper(htmlspecialchars($property['kategori'])) ?> - <?= htmlspecialchars($property['tipe_properti']) ?></span>
                <div class="detail-title"><?= htmlspecialchars($property['judul_properti']) ?></div>
                <div class="detail-price">Rp <?= number_format((float) $property['harga'], 0, ',', '.') ?><?= $property['kategori'] === 'sewa' ? ' /tahun' : '' ?></div>
                <p style="color:#666;">📍 <?= htmlspecialchars($property['lokasi']) ?></p>

                <div class="detail-meta">
                    <span>🛏️ <?= (int) $property['kamar_tidur'] ?> Kamar Tidur</span>
                    <span>🛁 <?= (int) $property['kamar_mandi'] ?> Kamar Mandi</span>
                    <span>📐 Tanah <?= (int) $property['luas_tanah'] ?> m²</span>
                    <span>🏗️ Bangunan <?= (int) $property['luas_bangunan'] ?> m²</span>
                </div>

                <?php if (!empty($property['deskripsi'])): ?>
                    <hr style="margin:15px 0; border:none; border-top:1px solid #eee;">
                    <div class="detail-desc"><?= nl2br(htmlspecialchars($property['deskripsi'])) ?></div>
                <?php endif; ?>

                <?php if ($isOwner): ?>
                    <div class="owner-actions">
                        <form method="POST" action="/controllers/property-process.php" onsubmit="return confirm('Hapus properti ini?');" style="display:inline;">
                            <input type="hidden" name="action" value="delete">
                            <input type="hidden" name="id" value="<?= (int) $property['id'] ?>">
                            <button type="submit" style="background:none; border:none; color:#dc3545; cursor:pointer; font-size:13px;">🗑️ Hapus Iklan Ini</button>
                        </form>
                    </div>
                <?php endif; ?>
            </div>

            <div class="detail-card agent-box">
                <div>
                    <p style="font-size:12px; color:#999; margin-bottom:4px;">Dipasang oleh</p>
                    <div class="agent-name">👤 <?= htmlspecialchars($property['nama_agen']) ?></div>
                    <p style="font-size:12px; color:#999; margin-top:4px;">
                        Dipasang pada <?= date('d M Y', strtotime($property['created_at'])) ?>
                    </p>
                </div>
                <a href="/views/search.php" class="btn-outline" style="text-decoration:none; padding:10px 20px; border:1px solid #007bff; border-radius:6px; color:#007bff;">
                    Lihat Properti Lain
                </a>
            </div>

        <?php endif; ?>

    </div>

    <?php include __DIR__ . '/../includes/footer.php'; ?>

</body>
</html>
