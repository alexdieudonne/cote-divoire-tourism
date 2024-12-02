import AOS from 'aos';

export function initAnimations() {
  AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
    offset: 100,
    easing: 'ease-in-out'
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  const parallaxImages = document.querySelectorAll('.culture-card img, .cuisine-card img');
  window.addEventListener('scroll', () => {
    parallaxImages.forEach(img => {
      const speed = 0.2;
      const rect = img.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom > 0;
      
      // if (visible) {
      //   const distance = window.pageYOffset - (img.offsetTop - window.innerHeight);
      //   img.style.transform = `translateY(${distance * speed * 0.1}px)`;
      // }
    });
  });

  // Text reveal animation
  const revealText = () => {
    const texts = document.querySelectorAll('.reveal-text');
    texts.forEach(text => {
      const position = text.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (position < screenPosition) {
        text.classList.add('revealed');
      }
    });
  };

  window.addEventListener('scroll', revealText);

  // animation for cards
  const cards = document.querySelectorAll('.culture-card, .cuisine-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.transition = 'all 0.1s ease';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'all 0.8s ease';
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  });

  // Gallery image hover effect
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.05)';
      item.style.zIndex = '1';
    });

    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
      item.style.zIndex = '0';
    });
  });
}