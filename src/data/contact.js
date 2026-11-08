// Contact details, transport info, and enquiry-form copy.

export const CONTACT_HOME = {
  eyebrow: { de: 'Kontakt & Erreichbarkeit', en: 'Get in Touch', zh: '诊所方位与联络' },
  title: { de: 'Praxis in Zürich-Seebach', en: 'Practice in Zurich-Seebach', zh: '苏黎世 Seebach 诊所' },
  text: {
    de: 'Haben Sie Fragen zur Behandlung oder möchten Sie einen Termin telefonisch vereinbaren? Wir freuen uns über Ihre Kontaktaufnahme.',
    en: 'Have questions about treatments or prefer to book by phone? We look forward to hearing from you.',
    zh: '如有任何治疗疑问或希望电话咨询，欢迎随时与我们取得联络。',
  },
  mapsBtn: {
    de: 'Route in Google Maps planen',
    en: 'Open directions in Google Maps',
    zh: '在 Google 地图中规划路线',
  },
};

export const CONTACT_PAGE = {
  eyebrow: { de: 'Standort & Erreichbarkeit', en: 'Location & Hours', zh: '诊所联络与方位' },
  title: { de: 'Kontakt & Anfahrt', en: 'Contact & Directions', zh: '联络方式与交通路线' },
  lead: {
    de: 'Wir freuen uns auf Ihren Besuch in unserer Praxis in Zürich-Seebach. Hier finden Sie alle Kontaktdaten und Anreiseinformationen.',
    en: 'We look forward to welcoming you to our clinic in Zurich-Seebach. Find contact numbers, map directions, and transit routes below.',
    zh: '热忱欢迎您莅临苏黎世 Seebach 中医诊所。以下为诊所联络资讯、交通路线及公共停车指引。',
  },
  cardTitle: { de: 'Praxisdaten', en: 'Practice Details', zh: '诊所基本资讯' },
  mapsBtn: {
    de: 'Route mit Google Maps planen',
    en: 'Plan Route with Google Maps',
    zh: '在 Google 地图中导航',
  },
};

export const CONTACT_LABELS = {
  address: { de: 'Adresse:', en: 'Address:', zh: '诊所地址：' },
  phone: { de: 'Telefon:', en: 'Telephone:', zh: '接诊电话：' },
  phoneHome: { de: 'Telefon:', en: 'Phone:', zh: '联络电话：' },
  email: { de: 'E-Mail:', en: 'Email:', zh: '电子邮箱：' },
  hours: { de: 'Öffnungszeiten:', en: 'Opening Hours:', zh: '接诊时间：' },
  hoursHome: { de: 'Öffnungszeiten:', en: 'Hours:', zh: '接诊时间：' },
};

export const HOURS = {
  weekday: { de: 'Montag – Freitag: 09:00 – 18:00 Uhr', en: 'Monday – Friday: 09:00 – 18:00', zh: '周一至周五：09:00 – 18:00' },
  saturday: { de: 'Samstag: nach Vereinbarung', en: 'Saturday: By appointment', zh: '周六：需提前预约' },
  saturdayPage: { de: 'Samstag: Nach Vereinbarung', en: 'Saturday: By special arrangement', zh: '周六：需特别预约' },
};

export const TRANSIT = {
  title: { de: 'Anreise mit ÖV & Auto', en: 'Public Transport & Parking', zh: '公共交通及停车指引' },
  items: [
    {
      icon: 'tram-front',
      html: {
        de: '<strong>Tramlinie 14:</strong> Haltestelle <em>Seebacherplatz</em> oder <em>Felsenrainstrasse</em>, von dort ca. 2 bis 3 Gehminuten zur Praxis.',
        en: '<strong>Tram 14:</strong> Stop at <em>Seebacherplatz</em> or <em>Felsenrainstrasse</em>, approximately 2–3 minutes walk.',
        zh: '<strong>14路有轨电车：</strong>乘至 <em>Seebacherplatz</em> 或 <em>Felsenrainstrasse</em> 站，下车步行约2至3分钟即达。',
      },
    },
    {
      icon: 'bus',
      html: {
        de: '<strong>Bus 768:</strong> Direkte Verbindung ab Bahnhof Oerlikon oder Flughafen Zürich bis Seebach.',
        en: '<strong>Bus 768:</strong> Direct route from Zurich Oerlikon station or Zurich Airport.',
        zh: '<strong>768路巴士：</strong>自苏黎世 Oerlikon 火车站或苏黎世机场直达 Seebach。',
      },
    },
    {
      icon: 'car',
      html: {
        de: '<strong>Parkplätze:</strong> Öffentliche Parkplätze in der blauen Zone befinden sich in den umliegenden Quartierstrassen.',
        en: '<strong>Parking:</strong> Public blue-zone parking spaces are situated along adjacent residential streets.',
        zh: '<strong>自驾停车：</strong>诊所所在街区道路设有公共蓝区（Blaue Zone）停车位。',
      },
    },
  ],
};

export const CONTACT_FORM = {
  title: { de: 'Nachricht senden', en: 'Send an Enquiry', zh: '留言咨询' },
  noteHome: {
    de: 'Bitte senden Sie über dieses allgemeine Formular keine vertraulichen Krankheitsgeschichten oder Diagnosen.',
    en: 'Please do not include sensitive diagnostic or medical history information in this general form.',
    zh: '为了保护您的医疗隐私，请勿在此公开网页表单中提交敏感病历资讯。',
  },
  notePage: {
    de: 'Haben Sie eine Frage zur Behandlung oder zur Praxis? Nutzen Sie unser Kontaktformular. Bitte senden Sie keine vertraulichen Diagnosen über das Formular.',
    en: 'Please do not submit confidential medical histories, diagnoses, or symptoms through this general contact form.',
    zh: '若您有任何就诊疑问，欢迎填写留言。为保障个人隐私，请勿在表单中传送病历与敏感个人健康记录。',
  },
  fields: {
    name: { de: 'Ihr Name', en: 'Your Name', zh: '您的姓名' },
    namePage: { de: 'Ihr Name', en: 'Your Name', zh: '姓名' },
    namePlaceholder: { de: 'Vor- und Nachname', en: 'Full name', zh: '姓名' },
    phoneOptional: { de: 'Telefonnummer (optional)', en: 'Phone Number (optional)', zh: '联络电话（选填）' },
    email: { de: 'E-Mail-Adresse', en: 'Email Address', zh: '电子邮箱' },
    emailPlaceholder: { de: 'ihre.adresse@beispiel.ch', en: 'name@example.com', zh: 'name@example.com' },
    lang: { de: 'Bevorzugte Sprache', en: 'Preferred Language', zh: '接诊语言偏好' },
    message: { de: 'Ihre Nachricht', en: 'Your Message', zh: '咨询内容' },
    messagePlaceholder: {
      de: 'Wie können wir Ihnen weiterhelfen?',
      en: 'How can we assist you?',
      zh: '请简要描述您的咨询需求',
    },
    messagePlaceholderPage: {
      de: 'Wie können wir Ihnen weiterhelfen?',
      en: 'How can we help you?',
      zh: '请简要写下您的咨询事项',
    },
  },
  langOptions: {
    de: [['de', 'Deutsch'], ['en', 'English'], ['zh', '中文 (Chinese)']],
    en: [['en', 'English'], ['de', 'Deutsch (German)'], ['zh', '中文 (Chinese)']],
    zh: [['zh', '中文 (Chinese)'], ['de', 'Deutsch (德语)'], ['en', 'English (英语)']],
  },
  langOptionsPage: {
    de: [['de', 'Deutsch'], ['en', 'English'], ['zh', '中文']],
    en: [['en', 'English'], ['de', 'German (Deutsch)'], ['zh', 'Chinese (中文)']],
    zh: [['zh', '中文 (Chinese)'], ['de', 'Deutsch (德语)'], ['en', 'English (英语)']],
  },
  privacyHtml: {
    de: 'Ich habe die <a href="/de/datenschutz/" target="_blank">Datenschutzerklärung</a> gelesen und bin mit der Verarbeitung meiner Angaben einverstanden.',
    en: 'I have read the <a href="/en/privacy-policy/" target="_blank">Privacy Policy</a> and agree to the processing of my contact details.',
    zh: '我已阅读并知悉 <a href="/zh/yinsi/" target="_blank">隐私政策</a>。',
  },
  privacyHtmlPage: {
    de: 'Ich habe die <a href="/de/datenschutz/" target="_blank">Datenschutzerklärung</a> zur Kenntnis genommen.',
    en: 'I acknowledge the <a href="/en/privacy-policy/" target="_blank">Privacy Policy</a> regarding the handling of my message.',
    zh: '我已阅读并知悉 <a href="/zh/yinsi/" target="_blank">隐私政策</a>。',
  },
  submit: { de: 'Nachricht absenden', en: 'Send Enquiry', zh: '传送留言' },
  submitPage: { de: 'Nachricht absenden', en: 'Send Message', zh: '传送留言' },
};
