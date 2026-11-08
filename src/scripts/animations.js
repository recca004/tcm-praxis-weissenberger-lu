/**
 * TCM Praxis Weissenberger-Lu
 * Micro-Interactions & Dealt Moment
 *
 * House rule: Content on a clinic/service page scrolls plainly without
 * scroll-jacking or fading elements. A dignified entrance runs once on
 * load, the dealt statement moment scrubs on scroll, and micro-interactions
 * handle all hover, press, and focus states.
 *
 * Everything here is cosmetic — every element is fully visible when JS is
 * disabled (we only ever tween FROM a hidden state to the natural state).
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  initWordHighlight();

  // Motion is gated by prefers-reduced-motion AND viewport. On reduced
  // motion nothing below runs; content is never hidden as a fallback.
  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    initHeroEntrance();
    initHeadingEntrances();
    initRowReveals();
    initPortraitEntrance();
  });
});

function initHeroEntrance() {
  const heroContent = document.querySelector('.hero-content');
  const heroMedia = document.querySelector('.hero-media-wrapper');

  if (heroContent) {
    gsap.from(heroContent.children, {
      y: 16,
      opacity: 0,
      duration: 0.65,
      stagger: 0.08,
      ease: 'power2.out',
      clearProps: 'all',
    });
  }

  if (heroMedia) {
    gsap.from(heroMedia, {
      scale: 0.98,
      opacity: 0,
      duration: 0.75,
      delay: 0.1,
      ease: 'power2.out',
      clearProps: 'all',
    });
  }
}

// Short, one-time entrances for page section headers (subpages + home).
function initHeadingEntrances() {
  document.querySelectorAll('.section-header').forEach((el) => {
    gsap.from(el, {
      y: 14,
      autoAlpha: 0,
      duration: 0.55,
      ease: 'power2.out',
      clearProps: 'all',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });
}

// Light one-time scroll reveal for treatment/symptom/about rows.
function initRowReveals() {
  const rows = gsap.utils.toArray('.t-index-row, .pillar-row');
  if (!rows.length) return;
  ScrollTrigger.batch(rows, {
    start: 'top 92%',
    once: true,
    onEnter: (batch) =>
      gsap.from(batch, {
        y: 12,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power2.out',
        clearProps: 'all',
      }),
  });
}

// Small, smooth entrance for the approved portrait on the About page.
function initPortraitEntrance() {
  const photo = document.querySelector('.pract-ed--about .pract-ed-photo--real');
  if (!photo) return;
  gsap.from(photo, {
    y: 18,
    autoAlpha: 0,
    duration: 0.7,
    ease: 'power2.out',
    clearProps: 'all',
    scrollTrigger: { trigger: photo, start: 'top 90%', once: true },
  });
}

// Statement moment — word-by-word highlight scrubbed by scroll. This is
// class-driven (no gsap) so it also runs for reduced-motion users as an
// instant fully-on state.
function initWordHighlight() {
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

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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
