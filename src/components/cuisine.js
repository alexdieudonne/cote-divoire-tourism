export function initCuisine() {
  const cuisine = document.getElementById('cuisine');
  cuisine.innerHTML = `
    <div class="section-container">
      <h2 data-aos="fade-up">Gastronomie Ivoirienne</h2>
      <div class="cuisine-grid">
        <div class="cuisine-card" data-aos="fade-right">
          <img src="/assets/attieke_ivorycoast.jpg" alt="Attiéké Poisson" />
          <div class="cuisine-content">
            <h3>Attiéké Poisson</h3>
            <p>Le plat national par excellence</p>
          </div>
        </div>
        <div class="cuisine-card" data-aos="fade-up">
          <img src="/assets/Alloco.webp" alt="Alloco" />
          <div class="cuisine-content">
            <h3>Alloco</h3>
            <p>Bananes plantains frites dorées</p>
          </div>
        </div>
        <div class="cuisine-card" data-aos="fade-left">
          <img src="/assets/sauce-graine.jpg" alt="Sauce Graine" />
          <div class="cuisine-content">
            <h3>Sauce Graine</h3>
            <p>Délicieuse sauce traditionnelle</p>
          </div>
        </div>
      </div>
    </div>
  `;
}