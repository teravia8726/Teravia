-- database.sql
-- Skema tabel yang dibutuhkan oleh kode PHP di project ini.
-- Jalankan di Supabase (SQL Editor) sebelum deploy, kalau tabel belum ada.

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    nama VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'agen',
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS properties (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    kategori VARCHAR(20) NOT NULL,        -- 'jual' | 'sewa'
    tipe_properti VARCHAR(50) NOT NULL,   -- 'Rumah' | 'Apartemen' | 'Ruko' | 'Tanah'
    judul_properti VARCHAR(200) NOT NULL,
    deskripsi TEXT,
    harga NUMERIC(15, 2) NOT NULL,
    lokasi VARCHAR(150) NOT NULL,
    kamar_tidur INTEGER DEFAULT 0,
    kamar_mandi INTEGER DEFAULT 0,
    luas_tanah INTEGER DEFAULT 0,
    luas_bangunan INTEGER DEFAULT 0,
    foto VARCHAR(255),                    -- nama file di /assets/upload/
    status VARCHAR(20) NOT NULL DEFAULT 'aktif',
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
