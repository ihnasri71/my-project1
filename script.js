/* PRELOADER FAILSAFE */
window.addEventListener("load", hideLoader);
setTimeout(hideLoader, 3000);

function hideLoader() {
  const loader = document.getElementById("preloader");
  if (loader) loader.style.display = "none";
}

/* TYPING EFFECT */
const text = "Welcome to My Website";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

typeEffect();
