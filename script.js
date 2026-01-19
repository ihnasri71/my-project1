window.addEventListener("load", hideLoader);
setTimeout(hideLoader, 3000);

function hideLoader() {
  const loader = document.getElementById("preloader");
  if (loader) loader.style.display = "none";
}
