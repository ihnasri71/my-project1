function filterGallery(category, event) {
  const items = document.querySelectorAll('.item');
  const buttons = document.querySelectorAll('.categories button');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  items.forEach(item => {
    item.classList.remove('show');
    if (category === 'all' || item.classList.contains(category)) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.item').forEach(i => i.classList.add('show'));
});

/* SCROLL REVEAL */
window.addEventListener('scroll', () => {
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});
