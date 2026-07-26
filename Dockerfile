FROM php:8.2-apache

# 1. Matikan event/worker MPM jika aktif, lalu pastikan mpm_prefork yang berjalan
#    Sekalian aktifkan mod_rewrite untuk .htaccess
RUN a2dismod mpm_event mpm_worker || true \
    && a2enmod mpm_prefork rewrite

# 2. Izinkan .htaccess override (default Apache image: AllowOverride None)
RUN sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf

# 3. Install ekstensi PostgreSQL yang dibutuhkan
RUN apt-get update && apt-get install -y \
    libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql pgsql \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# 4. Copy seluruh kode aplikasi
COPY . /var/www/html/

# 5. PENTING: Railway menentukan port secara DINAMIS lewat env var $PORT saat
#    container dijalankan (bukan saat build/docker build). Kalau Apache tetap
#    hardcode di 8080 sementara Railway mengecek port lain, healthcheck akan
#    gagal terus dan deployment ditandai crash/"Application failed to respond".
#    Solusi: set konfigurasi port saat container START, bukan saat build,
#    dengan membaca $PORT yang sebenarnya.
ENV PORT=8080
EXPOSE 8080

CMD sh -c "sed -i \"s/Listen [0-9]*/Listen ${PORT}/\" /etc/apache2/ports.conf && \
    sed -i \"s/:[0-9]*>/:${PORT}>/\" /etc/apache2/sites-available/000-default.conf && \
    apache2-foreground"
