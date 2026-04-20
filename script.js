const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', function() {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
});

const serviceHeaders = document.querySelectorAll('.service-header');

serviceHeaders.forEach(function(header) {
    header.addEventListener('click', function() {
        const card = header.parentElement;
        card.classList.toggle('open');
    });
});