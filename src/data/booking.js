// Booking-demo copy + demo data (local only — no real appointments).
// Variants: 'home' (embedded in homepage) and 'page' (booking page).

export const BOOKING_DEMO = {
  days: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
  disabledDays: [9, 10, 11, 12, 13, 14, 15, 21, 22, 28, 29],
  selectedDay: 16,
};

export const BOOKING = {
  home: {
    sectionEyebrow: { de: 'Online-Termin', en: 'Online Appointment', zh: '线上预约' },
    sectionTitle: { de: 'Wunschtermin anfragen', en: 'Request an Appointment', zh: '预约就诊时间' },
    sectionLead: {
      de: 'Wählen Sie in wenigen Schritten Ihren passenden Zeitpunkt in der Praxis.',
      en: 'Explore available time slots in our interactive booking prototype.',
      zh: '通过互动原型预览便捷的就诊预约流程。',
    },
    widgetTitle: { de: 'Terminvereinbarung', en: 'Appointment Calendar', zh: '就诊预约向导' },
    widgetBadge: { de: 'Demo-Ablauf', en: 'Prototype Demo', zh: '演示原型' },
    step1Heading: {
      de: 'Bitte wählen Sie Ihre gewünschte Leistung:',
      en: '1. Select your appointment type:',
      zh: '1. 请选择就诊项目：',
    },
    step2Heading: {
      de: 'Wählen Sie einen Tag und eine Uhrzeit:',
      en: '2. Choose a date and sample time:',
      zh: '2. 选择就诊日期与时段：',
    },
    step3Heading: {
      de: 'Ihre Kontaktdaten für die Terminbestätigung:',
      en: '3. Your contact information:',
      zh: '3. 填写您的基本联络方式：',
    },
    step4Heading: {
      de: 'Zusammenfassung Ihrer Terminanfrage:',
      en: '4. Summary of appointment request:',
      zh: '4. 预约资讯预览：',
    },
    services: [
      {
        id: 'initial',
        title: {
          de: 'Erstkonsultation inkl. Befundaufnahme',
          en: 'Initial Consultation & Assessment',
          zh: '首次问诊与针灸治疗',
        },
        meta: {
          de: 'Dauer: ca. 75–90 Minuten · Umfassende Anamnese, Zungen- & Pulsdiagnose sowie erste Akupunkturbehandlung.',
          en: 'Approx. 75–90 min · Comprehensive health intake, tongue and pulse diagnostics, and first acupuncture treatment.',
          zh: '时长：约75–90分钟 · 包含详尽病史采集、舌脉诊察及首次针对性针灸治疗。',
        },
        rev: { zh: true },
      },
      {
        id: 'followup',
        title: {
          de: 'Folgebehandlung Akupunktur / TCM',
          en: 'Follow-up Treatment (Acupuncture / TCM)',
          zh: '后续复诊（针灸／中医疗法）',
        },
        meta: {
          de: 'Dauer: ca. 60 Minuten · Gezielte Weiterführung der begonnenen Therapie, Verlaufskontrolle und Behandlung.',
          en: 'Approx. 60 min · Ongoing targeted therapy, progress evaluation, and personalized treatment.',
          zh: '时长：约60分钟 · 跟踪病情变化，继续阶段性经络调理与对症治疗。',
        },
        rev: { zh: true },
      },
    ],
    namePlaceholder: { de: 'z.B. Anna Meier', en: 'e.g. Sarah Jenkins', zh: '如：李明' },
    emailPlaceholder: { de: 'ihre.adresse@beispiel.ch', en: 'your.name@example.ch', zh: 'name@example.com' },
    notesPlaceholder: {
      de: 'z.B. Erreichbarkeit oder allgemeine Terminwünsche',
      en: 'e.g. availability or general preferences',
      zh: '如：接听电话的方便时段等常规说明',
    },
    summaryService: {
      de: 'Erstkonsultation inkl. Befundaufnahme',
      en: 'Initial Consultation & Assessment',
      zh: '首次问诊与针灸治疗',
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
      zh: '<strong>演示模式说明：</strong> 本次操作仅为静态互动原型，尚未在真实系统产生实际预约。在正式网站上线后，该区域将直接接入 Amelia 专业线上预约系统。',
    },
  },
  page: {
    sectionEyebrow: { de: 'Online-Buchung', en: 'Online Scheduling', zh: '线上预约' },
    sectionTitle: { de: 'Termin vereinbaren', en: 'Book an Appointment', zh: '预约就诊时间' },
    sectionLead: {
      de: 'Wählen Sie Ihren gewünschten Behandlungstyp und finden Sie einen passenden Zeitpunkt.',
      en: 'Select your consultation type and reserve your preferred appointment time.',
      zh: '请选择您的就诊项目及方便的时间段。',
    },
    widgetTitle: { de: 'Terminkalender', en: 'Appointment Schedule', zh: '就诊预约向导' },
    widgetBadge: { de: 'Demo-Ablauf', en: 'Demo Prototype', zh: '演示原型' },
    step1Heading: {
      de: '1. Bitte wählen Sie die Art Ihres Termins:',
      en: '1. Select appointment type:',
      zh: '1. 请选择就诊项目：',
    },
    step2Heading: {
      de: '2. Wählen Sie das passende Datum und die Uhrzeit:',
      en: '2. Choose an appointment date and slot:',
      zh: '2. 选择就诊日期与时段：',
    },
    step3Heading: {
      de: '3. Ihre Kontaktdaten:',
      en: '3. Enter your contact details:',
      zh: '3. 填写您的基本联络资讯：',
    },
    step4Heading: {
      de: '4. Übersicht Ihrer Terminanfrage:',
      en: '4. Summary of your reservation request:',
      zh: '4. 预约资讯预览：',
    },
    services: [
      {
        id: 'initial',
        title: {
          de: 'Erstkonsultation inkl. Befundaufnahme',
          en: 'Initial Consultation & Assessment',
          zh: '首次辨证问诊与针灸治疗',
        },
        meta: {
          de: 'Dauer: ca. 75–90 Minuten · Ausführliches Anamnesegespräch, Puls- und Zungendiagnose sowie erste TCM-Behandlung (Akupunktur).',
          en: 'Approx. 75–90 min · Full health history, tongue & pulse diagnosis, and first acupuncture treatment.',
          zh: '时长约75–90分钟 · 包含详尽病史采集、舌脉诊察及首次针对性针灸治疗。',
        },
        rev: { zh: true },
      },
      {
        id: 'followup',
        title: {
          de: 'Folgebehandlung (Akupunktur / TCM)',
          en: 'Follow-up Treatment (Acupuncture / TCM)',
          zh: '后续复诊（针灸／中医疗法）',
        },
        meta: {
          de: 'Dauer: ca. 60 Minuten · Gezielte Weiterführung der Behandlung, Verlaufskontrolle und Therapieabstimmung.',
          en: 'Approx. 60 min · Follow-up consultation, progress evaluation, and targeted session.',
          zh: '时长约60分钟 · 阶段性随访评估与对症施治。',
        },
        rev: { zh: true }, // title only on page variant
      },
    ],
    namePlaceholder: { de: 'z.B. Anna Meier', en: 'e.g. John Doe', zh: '姓名' },
    emailPlaceholder: { de: 'ihre.adresse@beispiel.ch', en: 'john.doe@example.com', zh: 'name@example.com' },
    notesPlaceholder: {
      de: 'z.B. Erreichbarkeit oder allgemeine Terminwünsche',
      en: 'e.g. preferred call-back times or questions',
      zh: '如：接听电话的方便时段等常规说明',
    },
    summaryService: {
      de: 'Erstkonsultation inkl. Befundaufnahme',
      en: 'Initial Consultation & Assessment',
      zh: '首次辨证问诊与针灸治疗',
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
      zh: '<strong>演示模式说明：</strong> 本次操作仅为静态互动原型，尚未在真实系统产生实际预约。在正式网站上线后，该区域将直接接入 Amelia 专业线上预约系统。',
    },
  },
  shared: {
    stepTabs: {
      de: ['1. Behandlung', '2. Datum & Zeit', '3. Angaben', '4. Bestätigung'],
      en: ['1. Treatment', '2. Date & Time', '3. Details', '4. Confirmation'],
      zh: ['1. 选择疗法', '2. 就诊时间', '3. 个人资讯', '4. 确认资讯'],
    },
    monthLabel: { de: 'November 2026', en: 'November 2026', zh: '2026年11月' },
    weekdays: {
      de: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
      en: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      zh: ['一', '二', '三', '四', '五', '六', '日'],
    },
    timesLabel: { de: 'Verfügbare Uhrzeiten:', en: 'Available Times:', zh: '可选时间：' },
    timeSlots: {
      de: ['09:00 Uhr', '10:30 Uhr', '13:30 Uhr', '15:00 Uhr', '16:30 Uhr'],
      en: ['09:00 AM', '10:30 AM', '01:30 PM', '03:00 PM', '04:30 PM'],
      zh: ['09:00', '10:30', '13:30', '15:00', '16:30'],
    },
    fields: {
      name: { de: 'Vorname & Nachname', en: 'Full Name', zh: '姓名' },
      phone: { de: 'Telefonnummer', en: 'Phone Number', zh: '联络电话' },
      email: { de: 'E-Mail-Adresse', en: 'Email Address', zh: '电子邮箱' },
      notes: {
        de: 'Bemerkung zur Terminabstimmung (keine vertraulichen Befunde)',
        en: 'Organizational Note (no sensitive medical records)',
        zh: '就诊时间备注说明（请勿提交隐私健康病历）',
      },
      notesPage: {
        de: 'Organisatorische Notiz (keine vertraulichen Befunde)',
        en: 'Scheduling note (no confidential health records)',
        zh: '就诊时间备注（请勿提交隐私健康病历）',
      },
    },
    summaryLabels: {
      service: { de: 'Leistung:', en: 'Service:', zh: '项目：' },
      datetime: { de: 'Zeitpunkt:', en: 'Time:', zh: '就诊时间：' },
      location: { de: 'Ort:', en: 'Location:', zh: '就诊地址：' },
      patient: { de: 'Patient/in:', en: 'Patient:', zh: '就诊人：' },
    },
    locationText: 'Schaffhauserstrasse 466, 8052 Zürich-Seebach',
    prev: { de: 'Zurück', en: 'Back', zh: '上一步' },
    next: { de: 'Weiter', en: 'Continue', zh: '下一步' },
    phoneAlt: {
      title: {
        de: 'Lieber telefonisch anfragen?',
        en: 'Prefer booking by telephone?',
        zh: '更习惯通过电话咨询预约？',
      },
      text: {
        de: 'Sollte Ihr Wunschtermin online nicht ersichtlich sein oder haben Sie eine dringende Frage, erreichen Sie uns auch telefonisch.',
        en: 'If you do not find a suitable online slot or have special scheduling requirements, please call us directly.',
        zh: '如未找到合适的线上时间段，或有特殊调理需求，欢迎直接致电诊所。',
      },
      landlineBtn: {
        de: 'Festnetz: 043 300 99 32',
        en: 'Landline: +41 43 300 99 32',
        zh: '固定电话：043 300 99 32',
      },
      btn: {
        de: 'Mobil: +41 78 899 92 88',
        en: 'Mobile: +41 78 899 92 88',
        zh: '手机：+41 78 899 92 88',
      },
    },
  },
};
