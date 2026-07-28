// Buka Modal
function openAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.add('active');
}

// Tutup Modal
function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.remove('active');
}

// Switch Tab (Masuk / Daftar)
function switchAuthTab(tab) {
    const tabs = document.querySelectorAll('.auth-tab-btn');
    const forms = document.querySelectorAll('.auth-form');

    tabs.forEach(t => t.classList.remove('active'));
    forms.forEach(f => f.classList.remove('active'));

    if (tab === 'login') {
        tabs[0].classList.add('active');
        document.getElementById('loginForm').classList.add('active');
    } else {
        tabs[1].classList.add('active');
        document.getElementById('registerForm').classList.add('active');
    }
}

// Show/Hide Password
function togglePassword(inputId, icon) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('ph-eye', 'ph-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.replace('ph-eye-slash', 'ph-eye');
    }
}
