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

  // --- Curseur personnalisé (point + anneau qui suit avec un léger effet de traîne) ---
  const canCustomCursor = !prefersReducedMotion && window.matchMedia('(pointer: fine)').matches;

  if (canCustomCursor) {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
      // Affiché seulement après le premier mouvement, sinon l'anneau reste figé au centre
      if (!document.body.classList.contains('has-custom-cursor')) {
        ringX = e.clientX;
        ringY = e.clientY;
        document.body.classList.add('has-custom-cursor');
      }
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
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
    document.addEventListener('mouseleave', () => {
      cursorDot.style.opacity = '0';
      cursorRing.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      cursorDot.style.opacity = '1';
      cursorRing.style.opacity = '1';
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
