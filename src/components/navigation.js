export function initNavigation() {
  const nav = document.getElementById("mainNav");
  nav.innerHTML = `
    <div class="nav-container">
      <div class="logo">
        <img src="/assets/logo_ivorycoast.svg" alt="Côte d'Ivoire" />
      </div>
      <div class="nav-links">
        <a href="#hero">Accueil</a>
        <a href="#culture">Culture</a>
        <a href="#tourism">Tourisme</a>
        <a href="#cuisine">Cuisine</a>
        <a href="#gallery">Galerie</a>
      </div>
      <button class="mobile-menu" aria-label="Menu">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  `;

  // Mobile menu toggle
  const mobileMenu = nav.querySelector(".mobile-menu");
  const navLinks = nav.querySelector(".nav-links");

  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  // Scroll handling
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) {
      nav.classList.add("hide");
    } else {
      nav.classList.remove("hide");
    }
    if (currentScroll < 50) {
      nav.classList.remove("scrolled");
    } else {
      nav.classList.add("scrolled");
    }
    lastScroll = currentScroll;
  });
}
