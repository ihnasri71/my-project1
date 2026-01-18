// DARK MODE
document.getElementById("toggle-mode").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// MOBILE MENU
document.getElementById("menu-toggle").onclick = () => {
  document.getElementById("nav").classList.toggle("active");
};

// AUTO SLIDER
const texts = [
  "Modern Web Design",
  "Creative UI Layouts",
  "Responsive Experiences"
];
let index = 0;

setInterval(() => {
  document.getElementById("slider-text").textContent = texts[index];
  index = (index + 1) % texts.length;
}, 3000);

// LIGHTBOX
document.querySelectorAll(".card img").forEach(img => {
  img.onclick = () => {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = img.src;
  };
});

document.getElementById("close").onclick = () => {
  document.getElementById("lightbox").style.display = "none";
};

// FILTER
function filterImages(type) {
  document.querySelectorAll(".card").forEach(card => {
    card.style.display =
      type === "all" || card.classList.contains(type)
        ? "block"
        : "none";
  });
}

// CONTACT FORM (DEMO)
document.getElementById("contact-form").onsubmit = e => {
  e.preventDefault();
  document.getElementById("form-status").textContent =
    "Message sent successfully ✅";
  e.target.reset();
};

// SCROLL ANIMATION
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
