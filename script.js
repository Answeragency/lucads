// LucAds · apparition au défilement et menu mobile. Rien d'autre (voir DESIGN.md, « Mouvement »).

document.addEventListener('DOMContentLoaded', () => {
  // --- Apparition au défilement (une seule fois) ---
  const revealEls = document.querySelectorAll('.reveal');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => observer.observe(el));
  }

  // --- Menu mobile ---
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (!navToggle || !mainNav) return;

  const setMenu = (isOpen) => {
    mainNav.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  };

  navToggle.addEventListener('click', () => setMenu(!mainNav.classList.contains('is-open')));
  mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
      setMenu(false);
      navToggle.focus();
    }
  });
});
