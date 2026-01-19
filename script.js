// EMAILJS INIT (replace with your keys)
emailjs.init("YOUR_PUBLIC_KEY");

// CONTACT FORM
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    this
  ).then(() => {
    alert("Message sent successfully!");
    this.reset();
  }, () => {
    alert("Failed to send message.");
  });
});

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// SLIDER
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-track img');
const nextBtn = document.querySelector('.arrow.right');
const prevBtn = document.querySelector('.arrow.left');

let index = 0;
let slideWidth = slides[0].offsetWidth + 20;

function slideGallery() {
  track.style.transform = `translateX(${-index * slideWidth}px)`;
}

nextBtn.onclick = () => {
  index++;
  if (index > slides.length - 3) index = 0;
  slideGallery();
};

prevBtn.onclick = () => {
  index--;
  if (index < 0) index = slides.length - 3;
  slideGallery();
};

setInterval(() => nextBtn.click(), 3000);

window.addEventListener('resize', () => {
  slideWidth = slides[0].offsetWidth + 20;
  slideGallery();
});
