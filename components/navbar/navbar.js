// ==========================================
// Component: Desktop Navbar Interaction (TERAVIA)
// ==========================================

document.addEventListener('DOMContentLoaded', function () {
    const megaDropdownContainer = document.getElementById('megaDropdownContainer');
    const megaMenuBtn = document.getElementById('megaMenuBtn');
    const megaMenuContent = document.getElementById('megaMenuContent');

    if (megaDropdownContainer && megaMenuBtn) {
        
        // 1. Toggle Mega Menu via Klik Button
        megaMenuBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            megaDropdownContainer.classList.toggle('show');
        });

        // 2. Mencegah Menu Tertutup Saat Klik Area Di Dalam Mega Menu
        if (megaMenuContent) {
            megaMenuContent.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        }

        // 3. Menutup Mega Menu Saat Klik Di Luar Area Navbar
        document.addEventListener('click', function (e) {
            if (!megaDropdownContainer.contains(e.target)) {
                megaDropdownContainer.classList.remove('show');
            }
        });

        // 4. Fitur Tambahan (Hover): Buka otomatis saat di-hover pada perangkat non-touchscreen
        if (window.matchMedia('(hover: hover)').matches) {
            megaDropdownContainer.addEventListener('mouseenter', function () {
                megaDropdownContainer.classList.add('show');
            });

            megaDropdownContainer.addEventListener('mouseleave', function () {
                megaDropdownContainer.classList.remove('show');
            });
        }
    }
});
