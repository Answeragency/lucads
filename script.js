// ============================================================
// LucAds — interactions légères
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Apparitions au scroll ---
  const revealEls = document.querySelectorAll('.reveal');
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  }

  // --- Parallax discret : la photo du hero suit légèrement la souris ---
  const hero = document.querySelector('.hero');
  const heroPhoto = document.querySelector('.hero-photo');
  const canParallax = hero && heroPhoto && !prefersReducedMotion &&
    window.matchMedia('(min-width: 981px)').matches &&
    window.matchMedia('(pointer: fine)').matches;

  if (canParallax) {
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      heroPhoto.style.transform = `translate(${x * 14}px, ${y * 14}px)`;
    });
    hero.addEventListener('mouseleave', () => {
      heroPhoto.style.transform = '';
    });
  }

  // --- Anneau qui accompagne le curseur natif ---
  // Le curseur natif reste visible (main sur les liens) ; l'anneau suit avec un léger lissage.
  const canCustomCursor = !prefersReducedMotion && window.matchMedia('(pointer: fine)').matches;
  const cursorRing = document.querySelector('.cursor-ring');

  if (canCustomCursor && cursorRing) {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    window.addEventListener('mousemove', (e) => {
      if (!document.body.classList.contains('has-custom-cursor')) {
        // premier mouvement : on part de la souris, pas du coin de l'écran
        ringX = e.clientX;
        ringY = e.clientY;
        document.body.classList.add('has-custom-cursor');
      }
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.35;
      ringY += (mouseY - ringY) * 0.35;
      // transform plutôt que left/top : pas de recalcul de mise en page à chaque image
      cursorRing.style.transform = `translate3d(${ringX - 17}px, ${ringY - 17}px, 0)`;
      requestAnimationFrame(animateRing);
    };
    requestAnimationFrame(animateRing);

    const interactiveSelector = 'a, button, summary, input, textarea, select, [role="button"]';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelector)) cursorRing.classList.add('is-active');
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelector)) cursorRing.classList.remove('is-active');
    });
    document.addEventListener('mousedown', () => cursorRing.classList.add('is-pressed'));
    document.addEventListener('mouseup', () => cursorRing.classList.remove('is-pressed'));
    document.documentElement.addEventListener('mouseleave', () => { cursorRing.style.opacity = '0'; });
    document.documentElement.addEventListener('mouseenter', () => { cursorRing.style.opacity = ''; });
  }

  // --- Pause du bandeau clients (clavier et tactile, pas seulement au survol) ---
  const clients = document.querySelector('.clients');
  const marqueeToggle = document.querySelector('.marquee-toggle');
  if (clients && marqueeToggle) {
    marqueeToggle.addEventListener('click', () => {
      const paused = clients.classList.toggle('is-paused');
      marqueeToggle.setAttribute('aria-pressed', String(paused));
      marqueeToggle.textContent = paused ? 'Reprendre' : 'Mettre en pause';
    });
  }

  // --- Menu mobile ---
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
