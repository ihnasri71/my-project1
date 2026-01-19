document.querySelectorAll('.shot-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.cursor = 'pointer';
  });
});
