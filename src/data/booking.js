// Booking-demo copy + demo data (local only — no real appointments).
// Variants: 'home' (embedded in homepage) and 'page' (booking page).

export const BOOKING_DEMO = {
  days: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
  disabledDays: [9, 10, 11, 12, 13, 14, 15, 21, 22, 28, 29],
  selectedDay: 16,
};

export const BOOKING = {
  home: {
    sectionEyebrow: { de: 'Online-Termin', en: 'Online Appointment', zh: '線上預約' },
    sectionTitle: { de: 'Wunschtermin anfragen', en: 'Request an Appointment', zh: '預約就診時間' },
    sectionLead: {
      de: 'Wählen Sie in wenigen Schritten Ihren passenden Zeitpunkt in der Praxis.',
      en: 'Explore available time slots in our interactive booking prototype.',
      zh: '通過互動原型預覽便捷的就診預約流程。',
    },
    widgetTitle: { de: 'Terminvereinbarung', en: 'Appointment Calendar', zh: '就診預約嚮導' },
    widgetBadge: { de: 'Demo-Ablauf', en: 'Prototype Demo', zh: '演示原型' },
    step1Heading: {
      de: 'Bitte wählen Sie Ihre gewünschte Leistung:',
      en: '1. Select your appointment type:',
      zh: '1. 請選擇就診項目：',
    },
    step2Heading: {
      de: 'Wählen Sie einen Tag und eine Uhrzeit:',
      en: '2. Choose a date and sample time:',
      zh: '2. 選擇就診日期與時段：',
    },
    step3Heading: {
      de: 'Ihre Kontaktdaten für die Terminbestätigung:',
      en: '3. Your contact information:',
      zh: '3. 填寫您的基本聯絡方式：',
    },
    step4Heading: {
      de: 'Zusammenfassung Ihrer Terminanfrage:',
      en: '4. Summary of appointment request:',
      zh: '4. 預約資訊預覽：',
    },
    services: [
      {
        id: 'initial',
        title: {
          de: 'Erstkonsultation inkl. Befundaufnahme',
          en: 'Initial Consultation & Assessment',
          zh: '首次問診與針灸治療',
        },
        meta: {
          de: 'Dauer: ca. 75–90 Minuten · Umfassende Anamnese, Zungen- & Pulsdiagnose sowie erste Akupunkturbehandlung.',
          en: 'Approx. 75–90 min · Comprehensive health intake, tongue and pulse diagnostics, and first acupuncture treatment.',
          zh: '時長：約75–90分鐘 · 包含詳盡病史採集、舌脈診察及首次針對性針灸治療。',
        },
        rev: { zh: true },
      },
      {
        id: 'followup',
        title: {
          de: 'Folgebehandlung Akupunktur / TCM',
          en: 'Follow-up Treatment (Acupuncture / TCM)',
          zh: '後續複診（針灸／中醫療法）',
        },
        meta: {
          de: 'Dauer: ca. 60 Minuten · Gezielte Weiterführung der begonnenen Therapie, Verlaufskontrolle und Behandlung.',
          en: 'Approx. 60 min · Ongoing targeted therapy, progress evaluation, and personalized treatment.',
          zh: '時長：約60分鐘 · 跟蹤病情變化，繼續階段性經絡調理與對症治療。',
        },
        rev: { zh: true },
      },
    ],
    namePlaceholder: { de: 'z.B. Anna Meier', en: 'e.g. Sarah Jenkins', zh: '如：李明' },
    emailPlaceholder: { de: 'ihre.adresse@beispiel.ch', en: 'your.name@example.ch', zh: 'name@example.com' },
    notesPlaceholder: {
      de: 'z.B. Erreichbarkeit oder allgemeine Terminwünsche',
      en: 'e.g. availability or general preferences',
      zh: '如：接聽電話的方便時段等常規說明',
    },
    summaryService: {
      de: 'Erstkonsultation inkl. Befundaufnahme',
      en: 'Initial Consultation & Assessment',
      zh: '首次問診與針灸治療',
    },
    summaryDatetime: {
      de: '16. November 2026 · 09:00 Uhr',
      en: 'November 16, 2026 · 09:00 AM',
      zh: '2026年11月16日 · 09:00',
    },
    summaryServiceRev: { zh: true },
    demoNoticeHtml: {
      de: '<strong>Demo-Modus:</strong> Es wurde kein verbindlicher Termin im echten Kalender gebucht. In der finalen WordPress-Website wird dieses Modul direkt mit dem Amelia-Buchungssystem gekoppelt.',
      en: '<strong>Demo only — no appointment has been booked.</strong><br />In the production WordPress website, this interface will connect to the Amelia booking engine.',
      zh: '<strong>演示模式說明：</strong> 本次操作僅為靜態互動原型，尚未在真實系統產生實際預約。在正式網站上線後，該區域將直接接入 Amelia 專業線上預約系統。',
    },
  },
  page: {
    sectionEyebrow: { de: 'Online-Buchung', en: 'Online Scheduling', zh: '線上預約' },
    sectionTitle: { de: 'Termin vereinbaren', en: 'Book an Appointment', zh: '預約就診時間' },
    sectionLead: {
      de: 'Wählen Sie Ihren gewünschten Behandlungstyp und finden Sie einen passenden Zeitpunkt.',
      en: 'Select your consultation type and reserve your preferred appointment time.',
      zh: '請選擇您的就診項目及方便的時間段。',
    },
    widgetTitle: { de: 'Terminkalender', en: 'Appointment Schedule', zh: '就診預約嚮導' },
    widgetBadge: { de: 'Demo-Ablauf', en: 'Demo Prototype', zh: '演示原型' },
    step1Heading: {
      de: '1. Bitte wählen Sie die Art Ihres Termins:',
      en: '1. Select appointment type:',
      zh: '1. 請選擇就診項目：',
    },
    step2Heading: {
      de: '2. Wählen Sie das passende Datum und die Uhrzeit:',
      en: '2. Choose an appointment date and slot:',
      zh: '2. 選擇就診日期與時段：',
    },
    step3Heading: {
      de: '3. Ihre Kontaktdaten:',
      en: '3. Enter your contact details:',
      zh: '3. 填寫您的基本聯絡資訊：',
    },
    step4Heading: {
      de: '4. Übersicht Ihrer Terminanfrage:',
      en: '4. Summary of your reservation request:',
      zh: '4. 預約資訊預覽：',
    },
    services: [
      {
        id: 'initial',
        title: {
          de: 'Erstkonsultation inkl. Befundaufnahme',
          en: 'Initial Consultation & Assessment',
          zh: '首次辨證問診與針灸治療',
        },
        meta: {
          de: 'Dauer: ca. 75–90 Minuten · Ausführliches Anamnesegespräch, Puls- und Zungendiagnose sowie erste TCM-Behandlung (Akupunktur).',
          en: 'Approx. 75–90 min · Full health history, tongue & pulse diagnosis, and first acupuncture treatment.',
          zh: '時長約75–90分鐘 · 包含詳盡病史採集、舌脈診察及首次針對性針灸治療。',
        },
        rev: { zh: true },
      },
      {
        id: 'followup',
        title: {
          de: 'Folgebehandlung (Akupunktur / TCM)',
          en: 'Follow-up Treatment (Acupuncture / TCM)',
          zh: '後續複診（針灸／中醫療法）',
        },
        meta: {
          de: 'Dauer: ca. 60 Minuten · Gezielte Weiterführung der Behandlung, Verlaufskontrolle und Therapieabstimmung.',
          en: 'Approx. 60 min · Follow-up consultation, progress evaluation, and targeted session.',
          zh: '時長約60分鐘 · 階段性隨訪評估與對症施治。',
        },
        rev: { zh: true }, // title only on page variant
      },
    ],
    namePlaceholder: { de: 'z.B. Anna Meier', en: 'e.g. John Doe', zh: '姓名' },
    emailPlaceholder: { de: 'ihre.adresse@beispiel.ch', en: 'john.doe@example.com', zh: 'name@example.com' },
    notesPlaceholder: {
      de: 'z.B. Erreichbarkeit oder allgemeine Terminwünsche',
      en: 'e.g. preferred call-back times or questions',
      zh: '如：接聽電話的方便時段等常規說明',
    },
    summaryService: {
      de: 'Erstkonsultation inkl. Befundaufnahme',
      en: 'Initial Consultation & Assessment',
      zh: '首次辨證問診與針灸治療',
    },
    summaryDatetime: {
      de: '16. November 2026 · 09:00 Uhr',
      en: 'November 16, 2026 · 09:00 AM',
      zh: '2026年11月16日 · 09:00',
    },
    summaryServiceRev: { zh: true },
    demoNoticeHtml: {
      de: '<strong>Demo only — no appointment has been booked.</strong><br />Nur Demonstration — es wurde kein verbindlicher Termin im echten Kalender gebucht. In der finalen WordPress-Website wird dieses Modul direkt mit dem Amelia-Buchungssystem gekoppelt.',
      en: '<strong>Demo only — no appointment has been booked.</strong><br />This is an interactive design prototype. In the final WordPress website, this interface will be seamlessly powered by the Amelia booking engine.',
      zh: '<strong>演示模式說明：</strong> 本次操作僅為靜態互動原型，尚未在真實系統產生實際預約。在正式網站上線後，該區域將直接接入 Amelia 專業線上預約系統。',
    },
  },
  shared: {
    stepTabs: {
      de: ['1. Behandlung', '2. Datum & Zeit', '3. Angaben', '4. Bestätigung'],
      en: ['1. Treatment', '2. Date & Time', '3. Details', '4. Confirmation'],
      zh: ['1. 選擇療法', '2. 就診時間', '3. 個人資訊', '4. 確認資訊'],
    },
    monthLabel: { de: 'November 2026', en: 'November 2026', zh: '2026年11月' },
    weekdays: {
      de: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
      en: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      zh: ['一', '二', '三', '四', '五', '六', '日'],
    },
    timesLabel: { de: 'Verfügbare Uhrzeiten:', en: 'Available Times:', zh: '可選時間：' },
    timeSlots: {
      de: ['09:00 Uhr', '10:30 Uhr', '13:30 Uhr', '15:00 Uhr', '16:30 Uhr'],
      en: ['09:00 AM', '10:30 AM', '01:30 PM', '03:00 PM', '04:30 PM'],
      zh: ['09:00', '10:30', '13:30', '15:00', '16:30'],
    },
    fields: {
      name: { de: 'Vorname & Nachname', en: 'Full Name', zh: '姓名' },
      phone: { de: 'Telefonnummer', en: 'Phone Number', zh: '聯絡電話' },
      email: { de: 'E-Mail-Adresse', en: 'Email Address', zh: '電子郵箱' },
      notes: {
        de: 'Bemerkung zur Terminabstimmung (keine vertraulichen Befunde)',
        en: 'Organizational Note (no sensitive medical records)',
        zh: '就診時間備註說明（請勿提交隱私健康病歷）',
      },
      notesPage: {
        de: 'Organisatorische Notiz (keine vertraulichen Befunde)',
        en: 'Scheduling note (no confidential health records)',
        zh: '就診時間備註（請勿提交隱私健康病歷）',
      },
    },
    summaryLabels: {
      service: { de: 'Leistung:', en: 'Service:', zh: '項目：' },
      datetime: { de: 'Zeitpunkt:', en: 'Time:', zh: '就診時間：' },
      location: { de: 'Ort:', en: 'Location:', zh: '就診地址：' },
      patient: { de: 'Patient/in:', en: 'Patient:', zh: '就診人：' },
    },
    locationText: 'Schaffhauserstrasse 466, 8052 Zürich-Seebach',
    prev: { de: 'Zurück', en: 'Back', zh: '上一步' },
    next: { de: 'Weiter', en: 'Continue', zh: '下一步' },
    phoneAlt: {
      title: {
        de: 'Lieber telefonisch anfragen?',
        en: 'Prefer booking by telephone?',
        zh: '更習慣通過電話諮詢預約？',
      },
      text: {
        de: 'Sollte Ihr Wunschtermin online nicht ersichtlich sein oder haben Sie eine dringende Frage, erreichen Sie uns auch telefonisch.',
        en: 'If you do not find a suitable online slot or have special scheduling requirements, please call us directly.',
        zh: '如未找到合適的線上時間段，或有特殊調理需求，歡迎直接致電診所。',
      },
      btn: {
        de: '+41 78 899 92 88 anrufen',
        en: 'Call +41 78 899 92 88',
        zh: '致電諮詢：+41 78 899 92 88',
      },
    },
  },
};
