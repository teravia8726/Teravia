document.addEventListener('DOMContentLoaded', function () {
    // ==========================================
    // 1. LOGIKA DESKTOP DROPDOWN (Click to Toggle)
    // ==========================================
    const dropdowns = document.querySelectorAll('.desktop-navbar .nav-dropdown');

    dropdowns.forEach(dropdown => {
        const toggleBtn = dropdown.querySelector('.dropdown-toggle');

        if (toggleBtn) {
            toggleBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                
                // Cek apakah dropdown ini sedang terbuka
                const isOpen = dropdown.classList.contains('active');

                // Tutup semua dropdown lain terlebih dahulu
                dropdowns.forEach(d => d.classList.remove('active'));

                // Jika sebelumnya belum terbuka, buka sekarang.
                // Jika sebelumnya sudah terbuka, maka otomatis tertutup.
                if (!isOpen) {
                    dropdown.classList.add('active');
                }
            });
        }
    });

    // Tutup dropdown jika mengeklik area mana saja di luar navbar
    document.addEventListener('click', function () {
        dropdowns.forEach(d => d.classList.remove('active'));
    });


    // ==========================================
    // 2. LOGIKA MOBILE DRAWER LAYANAN
    // ==========================================
    const bottomNavLayanan = document.getElementById('bottomNavLayanan');
    const openMenuBtn = document.getElementById('openMenuBtn');
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const mobileDrawer = document.getElementById('mobileDrawer');

    function openDrawer() {
        if (mobileDrawer && drawerOverlay) {
            mobileDrawer.classList.add('active');
            drawerOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeDrawer() {
        if (mobileDrawer && drawerOverlay) {
            mobileDrawer.classList.remove('active');
            drawerOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (bottomNavLayanan) bottomNavLayanan.addEventListener('click', openDrawer);
    if (openMenuBtn) openMenuBtn.addEventListener('click', openDrawer);
    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);


    // ==========================================
    // 3. ANIMASI CLICK SCALE PADA PROPERTY CARD
    // ==========================================
    const propertyCards = document.querySelectorAll('.property-card');

    propertyCards.forEach(card => {
        card.addEventListener('click', function () {
            // Berikan efek membesar sejenak sebelum berpindah halaman
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
    });
});

