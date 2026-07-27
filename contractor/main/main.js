// Interaktivitas Halaman Main Contractor
document.addEventListener('DOMContentLoaded', function () {
    const btnSearch = document.getElementById('btnSearch');
    const filterSearch = document.getElementById('filter-search');
    const filterCategory = document.getElementById('filter-category');
    const filterSbu = document.getElementById('filter-sbu');
    const contractorCards = document.querySelectorAll('.expert-card');
    const totalCount = document.getElementById('totalCount');

    // Fungsi Filter Sederhana
    function applyFilter() {
        const searchText = filterSearch.value.toLowerCase().trim();
        const selectedCategory = filterCategory.value;
        const selectedSbu = filterSbu.value;
        let visibleCount = 0;

        contractorCards.forEach(card => {
            const title = card.querySelector('.expert-title').textContent.toLowerCase();
            const category = card.getAttribute('data-category');
            const sbu = card.getAttribute('data-sbu');

            const matchesSearch = title.includes(searchText);
            const matchesCategory = !selectedCategory || category === selectedCategory;
            const matchesSbu = !selectedSbu || sbu === selectedSbu;

            if (matchesSearch && matchesCategory && matchesSbu) {
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
    if (filterSbu) filterSbu.addEventListener('change', applyFilter);
});

