export function initGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = `
    <div class="section-container">
      <h2 data-aos="fade-up">Galerie Photo</h2>
      <div class="gallery-grid">
        <div class="gallery-item" data-aos="zoom-in">
          <img src="assets/assinie-beach.jpg" alt="Plage" />
          <div class="gallery-overlay">
            <p>Plages paradisiaques</p>
          </div>
        </div>
        <div class="gallery-item" data-aos="zoom-in" data-aos-delay="100">
          <img src="/assets/danse_traditionnel.jpg" alt="Culture" />
          <div class="gallery-overlay">
            <p>Danse traditionnelle</p>
          </div>
        </div>
        <div class="gallery-item" data-aos="zoom-in" data-aos-delay="200">
          <img src="/assets/parc_tai_ivorycoast.jpg" alt="Nature" />
          <div class="gallery-overlay">
            <p>Parc national</p>
          </div>
        </div>
        <div class="gallery-item" data-aos="zoom-in" data-aos-delay="300">
          <img src="/assets/architecture_ivorycoast.jpg" alt="Architecture" />
          <div class="gallery-overlay">
            <p>Architecture moderne</p>
          </div>
        </div>
      </div>
    </div>
  `;
}