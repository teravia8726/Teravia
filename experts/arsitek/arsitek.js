// Interaktivitas Modul Direktori Arsitek
document.addEventListener('DOMContentLoaded', function () {
    const btnSearch = document.getElementById('btnSearch');
    const filterSearch = document.getElementById('filter-search');
    const filterLocation = document.getElementById('filter-location');
    const filterStyle = document.getElementById('filter-style');
    const filterPrice = document.getElementById('filter-price');
    const expertCards = document.querySelectorAll('.expert-card');
    const totalCount = document.getElementById('totalCount');

    // Fungsi Filter Data Arsitek
    function applyFilter() {
        const searchText = filterSearch ? filterSearch.value.toLowerCase().trim() : '';
        const selectedLocation = filterLocation ? filterLocation.value : '';
        const selectedStyle = filterStyle ? filterStyle.value : '';
        const selectedPrice = filterPrice ? filterPrice.value : '';
        let visibleCount = 0;

        expertCards.forEach(card => {
            const title = card.querySelector('.expert-title').textContent.toLowerCase();
            const location = card.getAttribute('data-location');
            const style = card.getAttribute('data-style');
            const price = card.getAttribute('data-price');

            const matchesSearch = title.includes(searchText);
            const matchesLocation = !selectedLocation || location === selectedLocation;
            const matchesStyle = !selectedStyle || style === selectedStyle;
            const matchesPrice = !selectedPrice || price === selectedPrice;

            if (matchesSearch && matchesLocation && matchesStyle && matchesPrice) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (totalCount) {
            totalCount.textContent = visibleCount;
        }
    }

    // Event Listeners
    if (btnSearch) {
        btnSearch.addEventListener('click', applyFilter);
    }

    if (filterSearch) {
        filterSearch.addEventListener('keyup', function (e) {
            if (e.key === 'Enter') applyFilter();
        });
    }

    if (filterLocation) filterLocation.addEventListener('change', applyFilter);
    if (filterStyle) filterStyle.addEventListener('change', applyFilter);
    if (filterPrice) filterPrice.addEventListener('change', applyFilter);
});

