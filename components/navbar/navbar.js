// Menggunakan Event Delegation agar support navbar yang dimuat via fetch/include
document.addEventListener('click', function (e) {

    // ==========================================
    // 1. DESKTOP DROPDOWN TOGGLE (Buka & Tutup)
    // ==========================================
    const dropdownToggle = e.target.closest('.desktop-navbar .dropdown-toggle');

    if (dropdownToggle) {
        e.preventDefault();
        e.stopPropagation();

        const parentDropdown = dropdownToggle.closest('.nav-dropdown');
        const isCurrentlyActive = parentDropdown.classList.contains('active');

        // Tutup semua dropdown lain yang sedang terbuka
        document.querySelectorAll('.desktop-navbar .nav-dropdown').forEach(item => {
            item.classList.remove('active');
        });

        // Jika belum aktif -> buka. Jika sudah aktif -> tertutup (karena di-remove di atas)
        if (!isCurrentlyActive) {
            parentDropdown.classList.add('active');
        }
        return;
    }

    // Jika yang diklik adalah LINK DI DALAM SUB-MENU, biarkan link tersebut pindah halaman!
    if (e.target.closest('.desktop-navbar .dropdown-menu-single a')) {
        return; // Jangan e.preventDefault(), biar nav langsung jalan
    }

    // Klik di luar desktop navbar -> tutup semua dropdown
    if (!e.target.closest('.desktop-navbar')) {
        document.querySelectorAll('.desktop-navbar .nav-dropdown').forEach(item => {
            item.classList.remove('active');
        });
    }


    // ==========================================
    // 2. MOBILE DRAWER / TAB LAYANAN BOTTOM NAV
    // ==========================================
    
    // Klik Tombol 'Layanan' di Bottom Nav ATAU Tombol Titik Tiga
    const isLayananBtn = e.target.closest('#bottomNavLayanan') || e.target.closest('#openMenuBtn');
    if (isLayananBtn) {
        e.preventDefault();
        const mobileDrawer = document.getElementById('mobileDrawer');
        const drawerOverlay = document.getElementById('drawerOverlay');

        if (mobileDrawer) mobileDrawer.classList.add('active');
        if (drawerOverlay) drawerOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        return;
    }

    // Klik Tombol Close (X) atau Overlay Hitam di Mobile
    const isCloseBtn = e.target.closest('#closeDrawerBtn');
    const isOverlay = e.target.matches('#drawerOverlay');

    if (isCloseBtn || isOverlay) {
        const mobileDrawer = document.getElementById('mobileDrawer');
        const drawerOverlay = document.getElementById('drawerOverlay');

        if (mobileDrawer) mobileDrawer.classList.remove('active');
        if (drawerOverlay) drawerOverlay.classList.remove('active');
        document.body.style.overflow = '';
        return;
    }
});

let lastScrollTop = 0;
const bottomNav = document.querySelector('.mobile-bottom-nav');

window.addEventListener('scroll', function () {
    // Jalankan logika ini cuma di layar mobile
    if (window.innerWidth < 1024 && bottomNav) {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Cegah bug rebound efek scroll di iOS (bouncing)
        if (currentScroll < 0) return;

        if (currentScroll > lastScrollTop && currentScroll > 50) {
            // SCROLL DOWN -> Sembunyikan bottom nav ke bawah
            bottomNav.classList.add('nav-hidden');
        } else {
            // SCROLL UP -> Tampilkan kembali bottom nav
            bottomNav.classList.remove('nav-hidden');
        }

        lastScrollTop = currentScroll;
    }
});
