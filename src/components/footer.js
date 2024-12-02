export function initFooter() {
  const footer = document.getElementById('footer');
  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Contact</h3>
          <p>Email: info@visitcotedivoire.ci</p>
          <p>Tél: +33 0618109672</p>
        </div>
        <div class="footer-section">
          <h3>Suivez-nous</h3>
          <div class="social-links">
            <a href="#" aria-label="Facebook">📱</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📸</a>
          </div>
        </div>
        <div class="footer-section">
          <h3>Newsletter</h3>
          <form class="newsletter-form">
            <input type="email" placeholder="Votre email" aria-label="Email for newsletter" />
            <button type="submit" class="primary-btn">S'abonner</button>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Côte d'Ivoire Tourisme. Tous droits réservés.</p>
      </div>
    </div>
  `;

  // Newsletter form handling
  const form = footer.querySelector('.newsletter-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input').value;
    alert('Merci de votre inscription à notre newsletter!');
    form.reset();
  });
}