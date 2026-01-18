document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting me!');
});

// Lightbox for gallery
const images = document.querySelectorAll('.gallery-container img');
images.forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.8)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '9999';

        const fullImg = document.createElement('img');
        fullImg.src = img.src;
        fullImg.style.maxWidth = '90%';
        fullImg.style.maxHeight = '90%';
        fullImg.style.borderRadius = '8px';

        overlay.appendChild(fullImg);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
            overlay.remove();
        });
    });
});

// Scroll animations
const sections = document.querySelectorAll('section');
function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
