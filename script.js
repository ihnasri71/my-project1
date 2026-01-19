// EMAILJS INIT (REPLACE WITH YOUR PUBLIC KEY)
emailjs.init("YOUR_PUBLIC_KEY");

// CONTACT FORM EMAIL
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
