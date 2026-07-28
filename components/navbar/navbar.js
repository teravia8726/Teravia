document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // 1. DESKTOP TOGGLE DROPDOWN (Click First to Open, Click Again to Close)
    // ==========================================
    const dropdownToggles = document.querySelectorAll('.desktop-navbar .dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const parentDropdown = this.closest('.nav-dropdown');
            const isActive = parentDropdown.classList.contains('active');

            // Tutup semua dropdown yang sedang terbuka
            document.querySelectorAll('.desktop-navbar .nav-dropdown').forEach(item => {
                item.classList.remove('active');
            });

            // Jika belum aktif, aktifkan (buka)
            if (!isActive) {
                parentDropdown.classList.add('active');
            }
        });
    });

    // Klik di mana saja di luar navbar untuk menutup dropdown desktop
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.desktop-navbar')) {
            document.querySelectorAll('.desktop-navbar .nav-dropdown').forEach(item => {
                item.classList.remove('active');
            });
        }
    });


    // ==========================================
    // 2. MOBILE DRAWER (MENU LAYANAN)
    // ==========================================
    const bottomNavLayanan = document.getElementById('bottomNavLayanan');
    const openMenuBtn = document.getElementById('openMenuBtn');
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const mobileDrawer = document.getElementById('mobileDrawer');

    function openMobileLayanan(e) {
        if (e) e.preventDefault();
        if (mobileDrawer && drawerOverlay) {
            mobileDrawer.classList.add('active');
            drawerOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Kunci scroll halaman saat menu terbuka
        }
    }

    function closeMobileLayanan() {
        if (mobileDrawer && drawerOverlay) {
            mobileDrawer.classList.remove('active');
            drawerOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Buka kembali scroll
        }
    }

    if (bottomNavLayanan) bottomNavLayanan.addEventListener('click', openMobileLayanan);
    if (openMenuBtn) openMenuBtn.addEventListener('click', openMobileLayanan);
    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeMobileLayanan);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeMobileLayanan);

});
