// AUTO SLIDER
const slider = document.querySelector('.slider');
setInterval(() => {
  slider.scrollBy({ left: 320, behavior: 'smooth' });
}, 3000);

// LIGHTBOX
const images = document.querySelectorAll('.slider img');
const lightbox = document.getElementById('lightbox');
const lightImg = document.getElementById('lightbox-img');
const close = document.getElementById('close');

images.forEach(img => {
  img.onclick = () => {
    lightbox.style.display = 'flex';
    lightImg.src = img.src;
  };
});

close.onclick = () => lightbox.style.display = 'none';

// FILTER
const buttons = document.querySelectorAll('.filters button');

buttons.forEach(btn => {
  btn.onclick = () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    images.forEach(img => {
      img.style.display =
        filter === 'all' || img.dataset.category === filter
        ? 'block' : 'none';
    });
  };
});

// SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
