export function initTourism() {
  const tourism = document.getElementById('tourism');
  tourism.innerHTML = `
    <div class="section-container">
      <h2 data-aos="fade-up">Destinations Touristiques</h2>
      <div class="tourism-slider" data-aos="fade-up">
        <div class="slider-container">
          <div class="slide">
            <img src="/assets/abidjan_ivorycoast.jpg" alt="Abidjan" />
            <div class="slide-content">
              <h3>Abidjan</h3>
              <p>La perle des lagunes</p>
            </div>
          </div>
          <div class="slide">
            <img src="/assets/yamoussoukro_ivorycoast.avif" alt="Yamoussoukro" />
            <div class="slide-content">
              <h3>Yamoussoukro</h3>
              <p>La capitale politique</p>
            </div>
          </div>
          <div class="slide">
            <img src="/assets/bassam_ivorycoast.jpeg" alt="Grand-Bassam" />
            <div class="slide-content">
              <h3>Grand-Bassam</h3>
              <p>Ville historique</p>
            </div>
          </div>
        </div>
        <button class="slider-btn prev" aria-label="Previous">❮</button>
        <button class="slider-btn next" aria-label="Next">❯</button>
      </div>
    </div>
  `;

  // Slider functionality
  const sliderContainer = tourism.querySelector('.slider-container');
  const slides = tourism.querySelectorAll('.slide');
  const prevBtn = tourism.querySelector('.prev');
  const nextBtn = tourism.querySelector('.next');
  let currentSlide = 0;

  function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  });
}