document.addEventListener('DOMContentLoaded', function () {
    console.log('Halaman Mitra Notaris siap.');

    // Logika Filter dan Search Sederhana
    const searchInput = document.getElementById('searchNotary');
    const filterCity = document.getElementById('filterCity');
    const cards = document.querySelectorAll('.notary-card');

    function filterNotary() {
        const query = searchInput ? searchInput.value.toLowerCase() : '';
        const city = filterCity ? filterCity.value.toLowerCase() : '';

        cards.forEach(card => {
            const text = card.innerText.toLowerCase();
            const matchesSearch = text.includes(query);
            const matchesCity = city === '' || text.includes(city);

            if (matchesSearch && matchesCity) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    if (searchInput) searchInput.addEventListener('input', filterNotary);
    if (filterCity) filterCity.addEventListener('change', filterNotary);
});
          
