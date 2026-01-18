// DARK MODE
document.getElementById("toggle-mode").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// MOBILE MENU
document.getElementById("menu-toggle").onclick = () => {
  document.getElementById("nav").classList.toggle("active");
};

// TYPING EFFECT
const typingText = [
  "Modern Web Design",
  "Creative UI Experiences",
  "Responsive Websites"
];

let textIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (charIndex < typingText[textIndex].length) {
    typingElement.textContent += typingText[textIndex][charIndex++];
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent =
      typingText[textIndex].substring(0, --charIndex);
    setTimeout(eraseEffect, 50);
  } else {
    textIndex = (textIndex + 1) % typingText.length;
    setTimeout(typeEffect, 500);
  }
}

typeEffect();

// LIGHTBOX
document.querySelectorAll(".card img").forEach(img => {
  img.onclick = () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  };
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.getElementById("close").onclick = () => {
  lightbox.style.display = "none";
};

// FILTER
function filterImages(type) {
  document.querySelectorAll(".card").forEach(card => {
    card.style.display =
      type === "all" || card.classList.contains(type) ? "block" : "none";
  });
}

// CONTACT FORM (DEMO)
document.getElementById("contact-form").onsubmit = e => {
  e.preventDefault();
  document.getElementById("form-status").textContent =
    "Message sent successfully ✅";
  e.target.reset();
};

// SCROLL REVEAL (FIXED)
function revealOnScroll() {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run once on load
