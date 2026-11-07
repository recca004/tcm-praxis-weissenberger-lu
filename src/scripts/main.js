/**
 * TCM Praxis Weissenberger-Lu
 * Main Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initAccordion();
  initContactForms();
});

/**
 * Header scroll shadow & backdrop change
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Mobile Navigation Drawer
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const closeBtn = document.querySelector('.mobile-menu-close');

  if (!toggleBtn || !overlay) return;

  const openMenu = () => {
    overlay.classList.add('is-open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    overlay.classList.remove('is-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeMenu();
    }
  });
}

/**
 * Accessible FAQ Accordion
 */
function initAccordion() {
  const triggers = document.querySelectorAll('.accordion-trigger');

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      trigger.setAttribute('aria-expanded', !isExpanded);
      if (item) {
        item.classList.toggle('is-open', !isExpanded);
      }
    });
  });
}

/**
 * Contact form prototype submission handler
 */
function initContactForms() {
  const contactForms = document.querySelectorAll('.js-contact-form');

  contactForms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const lang = document.documentElement.lang || 'de';
      const feedbackEl = form.querySelector('.form-submission-feedback');

      let successMsg = 'Vielen Dank für Ihre Anfrage. Wir werden uns baldmöglichst bei Ihnen melden. (Hinweis: Dies ist ein Prototyp.)';
      if (lang === 'en') {
        successMsg = 'Thank you for your enquiry. We will get back to you shortly. (Note: This is a design prototype.)';
      } else if (lang.startsWith('zh')) {
        successMsg = '感謝您的諮詢，我們將盡快與您取得聯絡。（提示：當前為原型展示。）';
      }

      if (feedbackEl) {
        feedbackEl.style.display = 'block';
        feedbackEl.className = 'notice-box form-submission-feedback';
        feedbackEl.innerHTML = `<strong>${successMsg}</strong>`;
      }

      form.reset();
    });
  });
}
