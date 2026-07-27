document.addEventListener('DOMContentLoaded', function () {
    const bottomNavLayanan = document.getElementById('bottomNavLayanan');
    const openMenuBtn = document.getElementById('openMenuBtn');
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const mobileDrawer = document.getElementById('mobileDrawer');

    function openDrawer() {
        if (mobileDrawer && drawerOverlay) {
            mobileDrawer.classList.add('active');
            drawerOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeDrawer() {
        if (mobileDrawer && drawerOverlay) {
            mobileDrawer.classList.remove('active');
            drawerOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (bottomNavLayanan) bottomNavLayanan.addEventListener('click', openDrawer);
    if (openMenuBtn) openMenuBtn.addEventListener('click', openDrawer);
    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
});
