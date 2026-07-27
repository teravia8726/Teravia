// Menerapkan Event Delegation agar kompatibel baik load statis maupun dynamic/fetch
document.addEventListener('click', function (e) {
    // 1. Cari apakah elemen yang diklik adalah tombol/link toggle mega menu
    const toggleBtn = e.target.closest('#megaMenuBtn') || e.target.closest('.mega-dropdown > .dropdown-toggle');
    const megaContainer = document.getElementById('megaDropdownContainer') || document.querySelector('.mega-dropdown');

    if (toggleBtn && megaContainer) {
        e.preventDefault();
        e.stopPropagation();
        
        // Toggle (buka jika tutup, tutup jika buka)
        megaContainer.classList.toggle('show');
        return;
    }

    // 2. Jika user mengeklik di DALAM isi mega menu, biarkan tetap terbuka (jangan ditutup)
    if (e.target.closest('#megaMenuContent') || e.target.closest('.mega-menu')) {
        return;
    }

    // 3. Jika user mengeklik di LUAR mega menu & navbar, tutup mega menu
    if (megaContainer && megaContainer.classList.contains('show')) {
        megaContainer.classList.remove('show');
    }
});
