export function initHero() {
  const hero = document.getElementById('hero');
  hero.innerHTML = `
    <div class="hero-content" data-aos="fade-up">
      <h1>Bienvenue en Côte d'Ivoire</h1>
      <p>Découvrez la perle de l'Afrique de l'Ouest</p>
      <div class="hero-cta">
        <button class="primary-btn">Explorez</button>
      </div>
    </div>
    <div class="hero-background">
      <div class="overlay"></div>
      <img src="https://images.unsplash.com/photo-1708347456872-6ebd105740de?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Côte d'Ivoire landscape" />
    </div>
  `;

  // Parallax effect
  window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    const background = hero.querySelector('.hero-background');
    background.style.transform = `translateY(${scroll * 0.5}px)`;
  });

  const button = hero.querySelector('.primary-btn');
    button.addEventListener('click', () => {
    const culture = document.getElementById('culture');
    culture.scrollIntoView({ behavior: 'smooth' });
  });
}