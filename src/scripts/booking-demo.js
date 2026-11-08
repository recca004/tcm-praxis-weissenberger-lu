/**
 * TCM Praxis Weissenberger-Lu
 * Interactive Amelia-Inspired Booking Flow Prototype (demo data only)
 */

document.addEventListener('DOMContentLoaded', () => {
  initBookingWidget();
});

export function initBookingWidget() {
  const widget = document.querySelector('.js-booking-widget');
  if (!widget) return;

  const summaryService = widget.querySelector('.js-summary-service');
  const summaryDateTime = widget.querySelector('.js-summary-datetime');
  const summaryPatient = widget.querySelector('.js-summary-patient');
  const nextLabel = widget.querySelector('.js-next-label');

  // Seed state from server-rendered markup so all locales start consistent.
  const initialDateTime = summaryDateTime?.textContent || '';
  const sep = initialDateTime.lastIndexOf(' · ');
  const state = {
    step: 1,
    service: 'initial',
    serviceTitle: summaryService?.textContent || '',
    date: sep > 0 ? initialDateTime.slice(0, sep) : initialDateTime,
    time: sep > 0 ? initialDateTime.slice(sep + 3) : '',
    name: '',
    phone: '',
    email: '',
    notes: ''
  };

  const tabs = widget.querySelectorAll('.booking-step-tab');
  const panels = widget.querySelectorAll('.booking-step-panel');
  const serviceCards = widget.querySelectorAll('.service-card-select');
  const calCells = widget.querySelectorAll('.cal-day-cell:not(:disabled)');
  const timeBtns = widget.querySelectorAll('.time-slot-btn');
  const prevBtn = widget.querySelector('.js-booking-prev');
  const nextBtn = widget.querySelector('.js-booking-next');

  function updateView() {
    tabs.forEach((tab) => {
      const stepNum = parseInt(tab.dataset.step, 10);
      tab.classList.toggle('is-active', stepNum === state.step);
      tab.classList.toggle('is-completed', stepNum < state.step);
      tab.setAttribute('aria-current', stepNum === state.step ? 'step' : 'false');
    });

    panels.forEach((panel) => {
      const stepNum = parseInt(panel.dataset.step, 10);
      panel.style.display = stepNum === state.step ? 'block' : 'none';
    });

    if (prevBtn) {
      prevBtn.style.visibility = state.step === 1 ? 'hidden' : 'visible';
    }

    if (nextBtn && nextLabel) {
      const lang = document.documentElement.lang || 'de';
      if (state.step === 4) {
        nextBtn.style.display = 'none';
      } else {
        nextBtn.style.display = 'inline-flex';
        nextLabel.textContent = state.step === 3
          ? (lang === 'en' ? 'Review Appointment' : lang.startsWith('zh') ? '检视预约资讯' : 'Zur Terminübersicht')
          : (lang === 'en' ? 'Continue' : lang.startsWith('zh') ? '下一步' : 'Weiter');
      }
    }

    if (summaryService) summaryService.textContent = state.serviceTitle;
    if (summaryDateTime) summaryDateTime.textContent = `${state.date} · ${state.time}`;
    if (summaryPatient) {
      const patientInfo = state.name ? `${state.name} (${state.phone || state.email})` : '—';
      summaryPatient.textContent = patientInfo;
    }
  }

  serviceCards.forEach((card) => {
    card.setAttribute('aria-pressed', card.classList.contains('is-selected') ? 'true' : 'false');
    card.addEventListener('click', () => {
      serviceCards.forEach((c) => { c.classList.remove('is-selected'); c.setAttribute('aria-pressed', 'false'); });
      card.classList.add('is-selected');
      card.setAttribute('aria-pressed', 'true');
      state.service = card.dataset.service || 'initial';
      state.serviceTitle = card.querySelector('.service-card-title')?.textContent || 'Behandlung';
      updateView();
    });
  });

  calCells.forEach((cell) => {
    cell.addEventListener('click', () => {
      calCells.forEach((c) => c.classList.remove('is-selected'));
      cell.classList.add('is-selected');
      const day = cell.textContent.trim();
      const lang = document.documentElement.lang || 'de';
      if (lang === 'en') {
        state.date = `November ${day}, 2026`;
      } else if (lang.startsWith('zh')) {
        state.date = `2026年11月${day}日`;
      } else {
        state.date = `${day}. November 2026`;
      }
      updateView();
    });
  });

  timeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      timeBtns.forEach((b) => b.classList.remove('is-selected'));
      btn.classList.add('is-selected');
      state.time = btn.textContent.trim();
      updateView();
    });
  });

  const nameInput = widget.querySelector('#booking-name');
  const phoneInput = widget.querySelector('#booking-phone');
  const emailInput = widget.querySelector('#booking-email');

  if (nameInput) {
    nameInput.addEventListener('input', (e) => {
      state.name = e.target.value;
      updateView();
    });
  }
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      state.phone = e.target.value;
      updateView();
    });
  }
  if (emailInput) {
    emailInput.addEventListener('input', (e) => {
      state.email = e.target.value;
      updateView();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (state.step < 4) {
        state.step += 1;
        updateView();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (state.step > 1) {
        state.step -= 1;
        updateView();
      }
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetStep = parseInt(tab.dataset.step, 10);
      if (targetStep <= state.step || targetStep === state.step + 1) {
        state.step = targetStep;
        updateView();
      }
    });
  });

  updateView();
}
