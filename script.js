// Fade animation
const faders = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.2 });

faders.forEach(el => observer.observe(el));

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.preview').forEach(img => {
  img.onclick = () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  };
});

lightbox.onclick = () => {
  lightbox.style.display = 'none';
};

// Auto hero slideshow
const hero = document.querySelector('.hero');
const slides = [
  'images/design1.jpg',
  'images/design2.jpg',
  'images/design3.jpg'
];

let i = 0;
setInterval(() => {
  hero.style.backgroundImage = `url(${slides[i]})`;
  i = (i + 1) % slides.length;
}, 5000);
