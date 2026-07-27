document.addEventListener("DOMContentLoaded", function () {
    const megaContainer = document.getElementById("megaDropdownContainer");
    const megaBtn = document.getElementById("megaMenuBtn");

    if (megaBtn && megaContainer) {
        // Toggle Buka / Tutup saat menu "Jasa Konstruksi" diklik
        megaBtn.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation(); // Stop event bubbling
            
            // Toggle class 'show'
            megaContainer.classList.toggle("show");
        });

        // Mencegah menu tertutup jika user mengeklik di DALAM mega menu
        const megaMenuContent = document.getElementById("megaMenuContent");
        if (megaMenuContent) {
            megaMenuContent.addEventListener("click", function (e) {
                e.stopPropagation();
            });
        }

        // Otomatis TUTUP menu jika user mengeklik di LUAR navbar
        document.addEventListener("click", function () {
            megaContainer.classList.remove("show");
        });
    }
});

