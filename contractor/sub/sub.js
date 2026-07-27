// Interaktivitas Halaman Sub-Kontraktor
document.addEventListener('DOMContentLoaded', function () {
    const btnSearch = document.getElementById('btnSearch');
    const filterSearch = document.getElementById('filter-search');
    const filterSpec = document.getElementById('filter-spec');
    const filterRegion = document.getElementById('filter-region');
    const filterLegal = document.getElementById('filter-legal');
    const subconCards = document.querySelectorAll('.expert-card');
    const totalCount = document.getElementById('totalCount');

    // Fungsi Filter Data Sub-Kontraktor
    function applyFilter() {
        const searchText = filterSearch.value.toLowerCase().trim();
        const selectedSpec = filterSpec.value;
        const selectedRegion = filterRegion.value;
        const selectedLegal = filterLegal.value;
        let visibleCount = 0;

        subconCards.forEach(card => {
            const title = card.querySelector('.expert-title').textContent.toLowerCase();
            const spec = card.getAttribute('data-spec');
            const region = card.getAttribute('data-region');
            const legal = card.getAttribute('data-legal');

            const matchesSearch = title.includes(searchText);
            const matchesSpec = !selectedSpec || spec === selectedSpec;
            const matchesRegion = !selectedRegion || region === selectedRegion;
            const matchesLegal = !selectedLegal || legal === selectedLegal;

            if (matchesSearch && matchesSpec && matchesRegion && matchesLegal) {
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

    if (filterSpec) filterSpec.addEventListener('change', applyFilter);
    if (filterRegion) filterRegion.addEventListener('change', applyFilter);
    if (filterLegal) filterLegal.addEventListener('change', applyFilter);
});

