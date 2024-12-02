export function initCulture() {
  const culture = document.getElementById('culture');
  culture.innerHTML = `
    <div class="section-container">
      <h2 data-aos="fade-up">Notre Culture</h2>
      <div class="culture-grid">
        <div class="culture-card" data-aos="fade-right">
          <img src="/assets/zaoul_mask.jpg" alt="Traditions" />
          <div class="culture-card-overlay">
              <h3>Traditions</h3>
              <p>Découvrez nos riches traditions ancestrales</p>
          </div>
        </div>
        <div class="culture-card" data-aos="fade-up">
          <img src="/assets/art_mask_ivorycoast.jpg" alt="Art" />
          <div class="culture-card-overlay">
              <h3>Art</h3>
              <p>L'art ivoirien dans toute sa splendeur</p>
          </div>
        </div>
        <div class="culture-card" data-aos="fade-left">
          <img src="/assets/ks_bloom_music_ivorycoast.jpg" alt="Musique" />
          <div class="culture-card-overlay">
              <h3>Musique</h3>
              <p>Vibrez au rythme de nos sons</p>
          </div>
        </div>
      </div>
    </div>
  `;
}