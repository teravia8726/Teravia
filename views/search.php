<?php
// views/search.php
// Halaman Pencarian & Listing Properti dengan Filter

session_start();
require_once __DIR__ . '/../config/database.php';

$kategori = $_GET['kategori'] ?? '';
$tipe = $_GET['tipe'] ?? '';
$lokasi = trim($_GET['lokasi'] ?? '');

$where = [];
$params = [];

if (in_array($kategori, ['jual', 'sewa'], true)) {
    $where[] = 'p.kategori = :kategori';
    $params['kategori'] = $kategori;
}
if ($tipe !== '') {
    $where[] = 'p.tipe_properti = :tipe';
    $params['tipe'] = $tipe;
}
if ($lokasi !== '') {
    $where[] = 'p.lokasi ILIKE :lokasi';
    $params['lokasi'] = '%' . $lokasi . '%';
}

$sql = "SELECT p.*, u.nama as nama_agen FROM properties p JOIN users u ON p.user_id = u.id";
if (!empty($where)) {
    $sql .= ' WHERE ' . implode(' AND ', $where);
}
$sql .= ' ORDER BY p.created_at DESC';

try {
    $stmt = $conn->prepare($sql);
    $stmt->execute($params);
    $properties = $stmt->fetchAll();
} catch (PDOException $e) {
    $properties = [];
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cari Properti - Marketplace Properti AI & Ads</title>
    <link rel="stylesheet" href="/assets/css/style.css">
    <style>
        .search-header { background: #f1f5f9; padding: 25px 20px; }
        .filter-box {
            max-width: 1100px; margin: 0 auto; background: white; padding: 15px;
            border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            display: flex; gap: 10px; flex-wrap: wrap;
        }
        .filter-box input, .filter-box select {
            flex: 1; min-width: 140px; padding: 10px; border: 1px solid #ddd;
            border-radius: 6px; font-size: 14px;
        }
        .filter-box button {
            background: #007bff; color: white; border: none; padding: 10px 20px;
            border-radius: 6px; font-weight: bold; cursor: pointer;
        }
        .main-container { max-width: 1100px; margin: 30px auto; padding: 0 15px; }
        .result-count { color: #666; margin-bottom: 20px; font-size: 14px; }
        .property-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; }
        .property-card {
            background: white; border-radius: 10px; overflow: hidden;
            box-shadow: 0 3px 10px rgba(0,0,0,0.05); border: 1px solid #eee;
        }
        .property-img-placeholder {
            height: 180px; background: #e9ecef; display: flex; align-items: center;
            justify-content: center; color: #6c757d; font-weight: bold; overflow: hidden;
        }
        .property-img-placeholder img { width: 100%; height: 100%; object-fit: cover; }
        .property-body { padding: 15px; }
        .badge-kategori {
            background: #e2f0d9; color: #385723; font-size: 11px; font-weight: bold;
            padding: 4px 8px; border-radius: 4px; display: inline-block; margin-bottom: 8px;
        }
        .property-title { font-size: 16px; font-weight: bold; color: #222; margin-bottom: 6px; text-decoration: none; display: block; }
        .property-price { font-size: 18px; font-weight: bold; color: #007bff; margin-bottom: 10px; }
        .property-footer {
            display: flex; justify-content: space-between; font-size: 12px; color: #666;
            border-top: 1px solid #f1f1f1; padding-top: 10px; margin-top: 10px;
        }
        .empty-state { text-align: center; padding: 40px; background: white; border-radius: 10px; color: #777; }
    </style>
</head>
<body>

    <?php include __DIR__ . '/../includes/navbar-desktop.php'; ?>

    <div class="search-header">
        <form class="filter-box" action="/views/search.php" method="GET">
            <select name="kategori">
                <option value="">Semua Kategori</option>
                <option value="jual" <?= $kategori === 'jual' ? 'selected' : '' ?>>Dijual</option>
                <option value="sewa" <?= $kategori === 'sewa' ? 'selected' : '' ?>>Disewakan</option>
            </select>
            <select name="tipe">
                <option value="">Semua Tipe</option>
                <?php foreach (['Rumah', 'Apartemen', 'Ruko', 'Tanah'] as $t): ?>
                    <option value="<?= $t ?>" <?= $tipe === $t ? 'selected' : '' ?>><?= $t ?></option>
                <?php endforeach; ?>
            </select>
            <input type="text" name="lokasi" placeholder="Cari kota atau lokasi..." value="<?= htmlspecialchars($lokasi) ?>">
            <button type="submit">Cari</button>
        </form>
    </div>

    <div class="main-container">

        <p class="result-count"><?= count($properties) ?> properti ditemukan</p>

        <?php if (empty($properties)): ?>
            <div class="empty-state">
                <p>Tidak ada properti yang cocok dengan pencarian Anda.</p>
                <p style="font-size:13px; margin-top:5px;">Coba ubah filter atau kata kunci lokasi.</p>
            </div>
        <?php else: ?>
            <div class="property-grid">
                <?php foreach ($properties as $prop): ?>
                    <div class="property-card">
                        <div class="property-img-placeholder">
                            <?php if (!empty($prop['foto']) && file_exists(__DIR__ . '/../assets/upload/' . $prop['foto'])): ?>
                                <img src="/assets/upload/<?= htmlspecialchars($prop['foto']) ?>" alt="<?= htmlspecialchars($prop['judul_properti']) ?>">
                            <?php else: ?>
                                🏠 Foto Properti
                            <?php endif; ?>
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

    </div>

    <?php include __DIR__ . '/../includes/footer.php'; ?>

</body>
</html>
