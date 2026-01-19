* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
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
  border: 5px solid #333;
  border-top: 5px solid orange;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* HEADER */
header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0,0,0,0.4);
  z-index: 10;
}

.logo {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
}

nav a {
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
  background: rgba(0,0,0,0.55);
}

.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
}

.hero-content h1 {
  font-size: 48px;
}

.btn {
  margin-top: 20px;
  padding: 12px 30px;
  background: orange;
  color: #000;
  text-decoration: none;
  border-radius: 30px;
}

/* CONTACT */
.contact {
  padding: 80px 20px;
  text-align: center;
}

.contact form {
  max-width: 400px;
  margin: auto;
}

.contact input,
.contact textarea {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
}

.contact button {
  padding: 12px;
  width: 100%;
  background: orange;
  border: none;
  cursor: pointer;
}
