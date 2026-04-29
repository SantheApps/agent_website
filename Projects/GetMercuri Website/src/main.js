import './components/site-header.js';
import './components/hero-section.js';
import './components/why-mercuri-section.js';
import './components/stats-section.js';
import './components/build-section.js';
import './components/advantage-section.js';
import './components/process-section.js';
import './components/customer-reviews-section.js';
import './components/final-cta-section.js';
import './components/site-footer.js';

const revealTargets = () =>
  document.querySelectorAll('header, section, footer, .ui-card');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
);

window.addEventListener('DOMContentLoaded', () => {
  revealTargets().forEach((node) => {
    node.classList.add('reveal');
    observer.observe(node);
  });
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
