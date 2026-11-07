/**
 * TCM Praxis Weissenberger-Lu
 * Micro-Interactions & Dealt Moment
 *
 * House rule: Content on a clinic/service page scrolls plainly without
 * scroll-jacking or fading elements. A dignified entrance runs once on
 * load, the dealt statement moment scrubs on scroll, and micro-interactions
 * handle all hover, press, and focus states.
 */

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  initHeroEntrance(prefersReducedMotion);
  initWordHighlight(prefersReducedMotion);
});

function initHeroEntrance(reducedMotion) {
  if (reducedMotion) return;
  const heroContent = document.querySelector('.hero-content');
  const heroMedia = document.querySelector('.hero-media-wrapper');

  if (heroContent && typeof window.gsap !== 'undefined') {
    window.gsap.from(heroContent.children, {
      y: 16,
      opacity: 0,
      duration: 0.65,
      stagger: 0.08,
      ease: 'power2.out',
      clearProps: 'all',
    });
  }

  if (heroMedia && typeof window.gsap !== 'undefined') {
    window.gsap.from(heroMedia, {
      scale: 0.98,
      opacity: 0,
      duration: 0.75,
      delay: 0.1,
      ease: 'power2.out',
      clearProps: 'all',
    });
  }
}

function initWordHighlight(reducedMotion) {
  const statement = document.querySelector('[data-moment="word-highlight"]');
  if (!statement) return;
  const textEl = statement.querySelector('.mo-wh__text');
  if (!textEl) return;

  // Split text into word spans if not already prepared
  if (!textEl.querySelector('.mo-w')) {
    const rawText = textEl.textContent || '';
    const words = rawText.trim().split(/\s+/);
    textEl.innerHTML = words.map((w) => `<span class="mo-w">${w}</span>`).join(' ');
  }

  const words = Array.from(textEl.querySelectorAll('.mo-w'));
  statement.classList.add('mo-wh');

  if (reducedMotion) {
    words.forEach((w) => w.classList.add('is-on'));
    return;
  }

  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const rect = textEl.getBoundingClientRect();
        const vh = window.innerHeight;
        const start = vh * 0.85;
        const end = vh * 0.35;
        const progress = Math.min(Math.max((start - rect.top) / Math.max(1, start - end + rect.height), 0), 1);
        const k = Math.round(progress * words.length);
        words.forEach((w, i) => {
          w.classList.toggle('is-on', i < k);
        });
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
