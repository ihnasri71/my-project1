* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background: #000;
  color: #fff;
}

/* PRELOADER */
#preloader {
  position: fixed;
  inset: 0;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #444;
  border-top: 5px solid orange;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  100% { transform: rotate(360deg); }
}

/* HEADER */
header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  background: rgba(0,0,0,0.6);
  z-index: 10;
}

header a {
  color: #fff;
  margin-left: 20px;
  text-decoration: none;
}

/* HERO */
.hero {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.hero video {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);
}

.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero-content span {
  color: orange;
}

/* GALLERY */
.gallery {
  padding: 80px 40px;
  background: #111;
}

.gallery h2 {
  text-align: center;
  margin-bottom: 40px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.grid img {
  width: 100%;
  border-radius: 10px;
  transition: transform 0.4s;
}

.grid img:hover {
  transform: scale(1.05);
}

/* CONTACT */
.contact {
  padding: 80px 40px;
  text-align: center;
}

.contact form {
  max-width: 400px;
  margin: auto;
}

.contact input,
.contact textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
}

.contact button {
  padding: 10px 30px;
  border: none;
  background: orange;
  cursor: pointer;
}
