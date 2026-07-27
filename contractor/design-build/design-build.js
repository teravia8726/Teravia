// Interaktivitas Halaman Design & Build
document.addEventListener('DOMContentLoaded', function () {
    const btnSearch = document.getElementById('btnSearch');
    const filterSearch = document.getElementById('filter-search');
    const filterStyle = document.getElementById('filter-style');
    const filterType = document.getElementById('filter-type');
    const filterPackage = document.getElementById('filter-package');
    const dbCards = document.querySelectorAll('.expert-card');
    const totalCount = document.getElementById('totalCount');

    // Fungsi Filter Data Design & Build
    function applyFilter() {
        const searchText = filterSearch.value.toLowerCase().trim();
        const selectedStyle = filterStyle.value;
        const selectedType = filterType.value;
        const selectedPackage = filterPackage.value;
        let visibleCount = 0;

        dbCards.forEach(card => {
            const title = card.querySelector('.expert-title').textContent.toLowerCase();
            const style = card.getAttribute('data-style');
            const type = card.getAttribute('data-type');
            const packageVal = card.getAttribute('data-package');

            const matchesSearch = title.includes(searchText);
            const matchesStyle = !selectedStyle || style === selectedStyle;
            const matchesType = !selectedType || type === selectedType;
            const matchesPackage = !selectedPackage || packageVal === selectedPackage;

            if (matchesSearch && matchesStyle && matchesType && matchesPackage) {
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

    if (filterStyle) filterStyle.addEventListener('change', applyFilter);
    if (filterType) filterType.addEventListener('change', applyFilter);
    if (filterPackage) filterPackage.addEventListener('change', applyFilter);
});

