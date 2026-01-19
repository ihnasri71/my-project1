document.body.classList.remove("no-js");
const observer=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting)t.target.classList.add("visible")})},{threshold:.15});
document.querySelectorAll(".fade").forEach(e=>observer.observe(e));
