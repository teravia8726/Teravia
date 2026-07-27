// Component: Desktop Navbar Interaction (TERAVIA)
document.addEventListener('DOMContentLoaded', function () {
    const megaDropdownContainer = document.getElementById('megaDropdownContainer');
    const megaMenuBtn = document.getElementById('megaMenuBtn');

    if (megaDropdownContainer && megaMenuBtn) {
        
        // 1. Toggle via Klik
        megaMenuBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            megaDropdownContainer.classList.toggle('show');
        });

        // 2. Klik di luar menutup dropdown
        document.addEventListener('click', function (e) {
            if (!megaDropdownContainer.contains(e.target)) {
                megaDropdownContainer.classList.remove('show');
            }
        });
    }
});
