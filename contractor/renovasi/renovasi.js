// Interaktivitas Halaman Renovasi
document.addEventListener('DOMContentLoaded', function () {
    const btnSearch = document.getElementById('btnSearch');
    const filterSearch = document.getElementById('filter-search');
    const filterCategory = document.getElementById('filter-category');
    const filterScale = document.getElementById('filter-scale');
    const filterRegion = document.getElementById('filter-region');
    const renovasiCards = document.querySelectorAll('.expert-card');
    const totalCount = document.getElementById('totalCount');

    // Fungsi Filter Data Renovasi
    function applyFilter() {
        const searchText = filterSearch.value.toLowerCase().trim();
        const selectedCategory = filterCategory.value;
        const selectedScale = filterScale.value;
        const selectedRegion = filterRegion.value;
        let visibleCount = 0;

        renovasiCards.forEach(card => {
            const title = card.querySelector('.expert-title').textContent.toLowerCase();
            const category = card.getAttribute('data-category');
            const scale = card.getAttribute('data-scale');
            const region = card.getAttribute('data-region');

            const matchesSearch = title.includes(searchText);
            const matchesCategory = !selectedCategory || category === selectedCategory;
            const matchesScale = !selectedScale || scale === selectedScale;
            const matchesRegion = !selectedRegion || region === selectedRegion;

            if (matchesSearch && matchesCategory && matchesScale && matchesRegion) {
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

    if (filterCategory) filterCategory.addEventListener('change', applyFilter);
    if (filterScale) filterScale.addEventListener('change', applyFilter);
    if (filterRegion) filterRegion.addEventListener('change', applyFilter);
});

