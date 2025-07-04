
let nav = document.getElementById('myNav');
nav.innerHTML = `
  <div class="logo">
    <a href="index.html"><img src="assets/img/log.png" alt="Astronomy Logo" /></a>
  </div>
  <div class="menu-toggle" id="menuToggle">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <ul class="nav-links" id="navLinks">
    <li><a href="index.html">Home</a></li>
    <li class="dropdown">
      <a href="#categories">Categories</a>
      <ul class="dropdown-menu">
        <li><a href="Bigbangtheory.html">Big Bang Theory</a></li>
        <li><a href="Evolution.html">Evolution of Earth</a></li>
        <li><a href="comet.html">Comet</a></li>
      </ul>
    </li>
    <li class="dropdown">
      <a href="#planets">Planets</a>
      <ul class="dropdown-menu">
        <li><a href="atmosphere.html">Atmosphere</a></li>
        <li><a href="observatories.html">Observatories</a></li>
      </ul>
    </li>
    <li><a href="contact.html">Contact Us</a></li>
    <li><a href="FAQ'S.html">FAQ'S</a></li>
  </ul>
`;

// ✅ Active class
const currentPage = window.location.pathname.split("/").pop();
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  const href = link.getAttribute("href");
  if (href === currentPage) {
    link.classList.add("active");
  }
});

// ✅ Responsive toggle
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('show');
});


// footer

let footer = document.getElementById('myFooter').innerHTML = `
<footer>
  <div class="row">
    <div class="col">
      <!-- <img src="assets/img/comet.webp" alt="" class="logo"> -->
      <img src="assets/img/comet-bg.png" alt="" class="logo" style="border: 1px solid white; width: 100%; height: 150px; border-radius: 20px;">
      <p>A galaxy is a massive system of stars, gas, dust, and dark matter held together by gravity. Our solar
        system is part of the Milky Way galaxy.</p>
    </div>

    <div class="col">
      <h3>Office <div class="under-line"><span></span></div></h3>
      <p>123 Galaxy Avenue, Nebula City, Andromeda</p>
      <p class="email-id">
        <a href="mailto:contact@astronomyuniverse.com">contact@astronomyuniverse.com</a>
      </p>
      <p class="email-id"><a href="#">1234567890</a></p>
    </div>

    <div class="col">
      <h3>Links <div class="under-line"><span></span></div></h3>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="bigbangtheory.html">Categories</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="FAQ'S.html">Faq's</a></li>
      </ul>
    </div>

    <div class="col">
      <h3>Map <div class="under-line"><span></span></div></h3>
      <div class="footer-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.3141351278077!2d67.1492499747537!3d24.887264277911807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339999415e0c3%3A0x36742eee0fd9c291!2sAptech%20Metro%20Star%20Gate!5e0!3m2!1sen!2s!4v1747903151496!5m2!1sen!2s"
          width="100%"
          height="200"
          style="border:0; border-radius: 10px;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </div>

  <hr>
  <p class="copy-right">&copy; 2025 Astronomy | All Right Reserved. Developed By Faizan Gohar</p>
</footer>
`;


