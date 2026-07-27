// Interaktivitas Halaman Interior
document.addEventListener('DOMContentLoaded', function () {
    const btnSearch = document.getElementById('btnSearch');
    const filterSearch = document.getElementById('filter-search');
    const filterScope = document.getElementById('filter-scope');
    const filterMaterial = document.getElementById('filter-material');
    const filterRegion = document.getElementById('filter-region');
    const interiorCards = document.querySelectorAll('.expert-card');
    const totalCount = document.getElementById('totalCount');

    // Fungsi Filter Data Interior
    function applyFilter() {
        const searchText = filterSearch.value.toLowerCase().trim();
        const selectedScope = filterScope.value;
        const selectedMaterial = filterMaterial.value;
        const selectedRegion = filterRegion.value;
        let visibleCount = 0;

        interiorCards.forEach(card => {
            const title = card.querySelector('.expert-title').textContent.toLowerCase();
            const scope = card.getAttribute('data-scope');
            const material = card.getAttribute('data-material');
            const region = card.getAttribute('data-region');

            const matchesSearch = title.includes(searchText);
            const matchesScope = !selectedScope || scope === selectedScope;
            const matchesMaterial = !selectedMaterial || material === selectedMaterial;
            const matchesRegion = !selectedRegion || region === selectedRegion;

            if (matchesSearch && matchesScope && matchesMaterial && matchesRegion) {
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

    if (filterScope) filterScope.addEventListener('change', applyFilter);
    if (filterMaterial) filterMaterial.addEventListener('change', applyFilter);
    if (filterRegion) filterRegion.addEventListener('change', applyFilter);
});

