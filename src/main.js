import './styles/main.css';
import { initNavigation } from './components/navigation';
import { initHero } from './components/hero';
import { initCulture } from './components/culture';
import { initTourism } from './components/tourism';
import { initCuisine } from './components/cuisine';
import { initGallery } from './components/gallery';
import { initFooter } from './components/footer';
import { initAnimations } from './utils/animations';

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHero();
  initCulture();
  initTourism();
  initCuisine();
  initGallery();
  initFooter();
  initAnimations();
});