<section class="latest-properties">

    <div class="container">

        <div class="section-heading">

            <div>

                <span class="section-badge">
                    🆕 Properti Terbaru
                </span>

                <h2>
                    Listing Terbaru dari Seluruh Indonesia
                </h2>

                <p>

                    Jelajahi properti yang baru dipublikasikan oleh
                    owner, agen, broker maupun developer.

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

            <?php for ($i = 1; $i <= 8; $i++) : ?>

            <article class="property-card">

                <div class="property-image">

                    <span class="property-badge new">
                        Baru
                    </span>

                    <img
                        src="/assets/branding/hero-bg.png"
                        alt="Properti TERAVIA"
                    >

                </div>

                <div class="property-body">

                    <div class="property-category">

                        Disewakan

                    </div>

                    <h3>

                        Apartemen Premium City View

                    </h3>

                    <p class="property-location">

                        📍 Jakarta Selatan

                    </p>

                    <div class="property-price">

                        Rp 8.500.000 / bulan

                    </div>

                    <div class="property-spec">

                        <span>
                            🛏 2 KT
                        </span>

                        <span>
                            🚿 1 KM
                        </span>

                        <span>
                            📐 72 m²
                        </span>

                    </div>

                    <div class="property-meta">

                        <span>
                            👤 TERAVIA Verified
                        </span>

                        <span>
                            ⏰ Hari ini
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
