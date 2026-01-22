// Footer dinâmico
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('open');

    // Alterna símbolo ☰ e X
    if (navList.classList.contains('open')) {
        hamburger.textContent = '✖';
    } else {
        hamburger.textContent = '☰';
    }
});
