/**
 * TCM Praxis Weissenberger-Lu
 * GSAP & ScrollTrigger Animations
 *
 * Visibility contract: markup is visible by default. Elements only ever
 * start hidden when GSAP + ScrollTrigger are both present, motion is not
 * reduced, and a reveal trigger is scheduled for them. A failsafe reveals
 * anything still hidden after load, so no content can stay invisible.
 */

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;
  if (typeof window.gsap === 'undefined') return;

  const gsap = window.gsap;
  const hasST = typeof window.ScrollTrigger !== 'undefined';
  if (hasST) gsap.registerPlugin(window.ScrollTrigger);

  initPageAnimations(gsap, hasST);

  // Failsafe: anything still at opacity 0 after everything settled is forced visible.
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
      document.querySelectorAll('.treatment-card, .t-index-row, .timeline-step, .trust-item, .practitioner-wrapper, .pract-ed, .statement-text, .booking-band, .hero-content > *, .hero-media-wrapper')
        .forEach((el) => {
          if (parseFloat(getComputedStyle(el).opacity) < 1) {
            gsap.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.3, clearProps: 'opacity,transform' });
          }
        });
    }, 1500);
  });
});

function initPageAnimations(gsap, hasST) {
  // 1. Hero Content Entrance
  const heroContent = document.querySelector('.hero-content');
  const heroMedia = document.querySelector('.hero-media-wrapper');

  if (heroContent) {
    gsap.from(heroContent.children, {
      y: 20, opacity: 0, duration: 0.65, stagger: 0.1, ease: 'power2.out', clearProps: 'all'
    });
  }

  if (heroMedia) {
    gsap.from(heroMedia, {
      scale: 0.98, opacity: 0, duration: 0.8, delay: 0.15, ease: 'power2.out', clearProps: 'all'
    });
  }

  if (!hasST) return;

  // Per-element reveals: each item animates when IT enters the viewport,
  // so later rows are not left faded waiting on a section-level trigger.
  const reveal = (selector, vars = {}) => {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        y: 20, opacity: 0, duration: 0.55, ease: 'power2.out', clearProps: 'all',
        ...vars
      });
    });
  };

  reveal('.trust-item', { y: 15, duration: 0.5 });
  reveal('.treatment-card', { y: 24, duration: 0.6 });
  reveal('.t-index-row', { y: 18, duration: 0.55 });
  reveal('.timeline-step', { y: 20 });
  reveal('.practitioner-wrapper, .pract-ed', { duration: 0.65 });
  reveal('.statement-text', { duration: 0.7 });
  reveal('.booking-band', { y: 16, duration: 0.6 });
}
