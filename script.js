// PRELOADER
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

// MOBILE MENU
document.getElementById("menu-toggle").onclick = () => {
  document.getElementById("nav").classList.toggle("active");
};

// TYPING EFFECT
const words = [
  "Modern Web Design",
  "Creative UI",
  "Responsive Websites"
];

let wordIndex = 0;
let charIndex = 0;
const typing = document.getElementById("typing");

function type() {
  if (charIndex < words[wordIndex].length) {
    typing.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typing.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  }
}

type();

// CONTACT FORM (DEMO)
document.getElementById("contact-form").onsubmit = e => {
  e.preventDefault();
  document.getElementById("form-status").textContent =
    "Message sent successfully ✅";
  e.target.reset();
};
