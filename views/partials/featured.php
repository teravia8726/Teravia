<section class="featured-properties">

    <div class="container">

        <div class="section-heading">

            <div>

                <span class="section-badge">
                    ⭐ Properti Unggulan
                </span>

                <h2>
                    Pilihan Properti Terbaik Hari Ini
                </h2>

                <p>

                    Temukan properti pilihan dengan lokasi strategis,
                    harga terbaik, dan kualitas yang telah dipilih
                    khusus untuk Anda.

                </p>

            </div>

            <a
                href="/views/search.php"
                class="view-all-link"
            >
                Lihat Semua →
            </a>

        </div>

        <div class="property-grid">

            <?php for ($i = 1; $i <= 6; $i++) : ?>

            <article class="property-card">

                <div class="property-image">

                    <span class="property-badge">
                        Featured
                    </span>

                    <img
                        src="/assets/branding/hero-bg.png"
                        alt="Properti TERAVIA"
                    >

                </div>

                <div class="property-body">

                    <div class="property-category">

                        Dijual

                    </div>

                    <h3>

                        Rumah Modern Minimalis

                    </h3>

                    <p class="property-location">

                        📍 Bogor, Jawa Barat

                    </p>

                    <div class="property-price">

                        Rp 1.250.000.000

                    </div>

                    <div class="property-spec">

                        <span>
                            🛏 3 KT
                        </span>

                        <span>
                            🚿 2 KM
                        </span>

                        <span>
                            📐 120 m²
                        </span>

                    </div>

                    <a
                        href="/views/detail.php"
                        class="btn-property"
                    >

                        Lihat Detail

                    </a>

                </div>

            </article>

            <?php endfor; ?>

        </div>

    </div>

</section>
