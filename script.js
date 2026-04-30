const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
        navLinks.classList.remove('open');
    });
});

const serviceHeaders = document.querySelectorAll('.service-header');

serviceHeaders.forEach(function(header) {
    header.addEventListener('click', function() {
        const card = header.parentElement;
        card.classList.toggle('open');
    });
});

const galleryImages = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxOverlay = document.getElementById('lightbox-overlay');

galleryImages.forEach(function(item) {
    item.addEventListener('click', function() {
        const imageUrl = item.style.backgroundImage.slice(5, -2);
        lightboxImg.src = imageUrl;
        lightbox.classList.add('active');
    });
});

lightboxOverlay.addEventListener('click', function() {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
});