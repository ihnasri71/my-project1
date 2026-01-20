emailjs.init("YOUR_PUBLIC_KEY");

/* FIREBASE */
firebase.initializeApp({
  apiKey: "KEY",
  authDomain: "APP.firebaseapp.com",
  databaseURL: "https://APP.firebaseio.com"
});

const db = firebase.database();

/* CART */
let cart = [];
let total = 0;

function addToCart(name, price, vendor) {
  cart.push({ name, price, vendor });
  total += price;
  renderCart();
}

function renderCart() {
  const list = document.getElementById("cart-items");
  list.innerHTML = "";
  cart.forEach((i, idx) => {
    list.innerHTML += `<li>${i.name} - GHS ${i.price}</li>`;
  });
  document.getElementById("total").textContent = total;
}

/* PAYSTACK */
document.querySelector(".checkout").onclick = () => {
  PaystackPop.setup({
    key: "PAYSTACK_KEY",
    email: "ih.nasri71@gmail.com",
    amount: total * 100,
    currency: "GHS",
    callback: res => saveOrder(res.reference)
  }).openIframe();
};

/* SAVE ORDER */
function saveOrder(ref) {
  const order = { cart, total, ref, date: new Date().toISOString() };
  db.ref("orders").push(order);
  generateInvoice(order);
  alert("Payment successful");
}

/* INVOICE */
function generateInvoice(order) {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF();
  pdf.text("INVOICE - DANIEL NASIR", 20, 20);
  pdf.text(`Total: GHS ${order.total}`, 20, 40);
  pdf.save("invoice.pdf");
}

/* ANALYTICS */
db.ref("orders").on("value", snap => {
  let orders = 0, revenue = 0;
  snap.forEach(o => {
    orders++;
    revenue += o.val().total;
  });
  document.getElementById("total-orders").textContent = orders;
  document.getElementById("total-revenue").textContent = revenue;
});

/* AI SUPPORT */
async function askAI() {
  const q = document.getElementById("ai-input").value;
  document.getElementById("ai-response").textContent = "Thinking...";
  const r = await fetch("https://api.openai.com/v1/chat/completions", {
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer OPENAI_KEY"
    },
    body:JSON.stringify({
      model:"gpt-4",
      messages:[{role:"user",content:q}]
    })
  });
  const d = await r.json();
  document.getElementById("ai-response").textContent =
    d.choices[0].message.content;
}
