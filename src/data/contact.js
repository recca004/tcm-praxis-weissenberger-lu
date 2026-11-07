// Contact details, transport info, and enquiry-form copy.

export const CONTACT_HOME = {
  eyebrow: { de: 'Kontakt & Erreichbarkeit', en: 'Get in Touch', zh: '診所方位與聯絡' },
  title: { de: 'Praxis in Zürich-Seebach', en: 'Practice in Zurich-Seebach', zh: '蘇黎世 Seebach 診所' },
  text: {
    de: 'Haben Sie Fragen zur Behandlung oder möchten Sie einen Termin telefonisch vereinbaren? Wir freuen uns über Ihre Kontaktaufnahme.',
    en: 'Have questions about treatments or prefer to book by phone? We look forward to hearing from you.',
    zh: '如有任何治療疑問或希望電話諮詢，歡迎隨時與我們取得聯絡。',
  },
  mapsBtn: {
    de: 'Route in Google Maps planen',
    en: 'Open directions in Google Maps',
    zh: '在 Google 地圖中規劃路線',
  },
};

export const CONTACT_PAGE = {
  eyebrow: { de: 'Standort & Erreichbarkeit', en: 'Location & Hours', zh: '診所聯絡與方位' },
  title: { de: 'Kontakt & Anfahrt', en: 'Contact & Directions', zh: '聯絡方式與交通路線' },
  lead: {
    de: 'Wir freuen uns auf Ihren Besuch in unserer Praxis in Zürich-Seebach. Hier finden Sie alle Kontaktdaten und Anreiseinformationen.',
    en: 'We look forward to welcoming you to our clinic in Zurich-Seebach. Find contact numbers, map directions, and transit routes below.',
    zh: '熱忱歡迎您蒞臨蘇黎世 Seebach 中醫診所。以下為診所聯絡資訊、交通路線及公共停車指引。',
  },
  cardTitle: { de: 'Praxisdaten', en: 'Practice Details', zh: '診所基本資訊' },
  mapsBtn: {
    de: 'Route mit Google Maps planen',
    en: 'Plan Route with Google Maps',
    zh: '在 Google 地圖中導航',
  },
};

export const CONTACT_LABELS = {
  address: { de: 'Adresse:', en: 'Address:', zh: '診所地址：' },
  phone: { de: 'Telefon:', en: 'Telephone:', zh: '接診電話：' },
  phoneHome: { de: 'Telefon:', en: 'Phone:', zh: '聯絡電話：' },
  email: { de: 'E-Mail:', en: 'Email:', zh: '電子郵箱：' },
  hours: { de: 'Öffnungszeiten:', en: 'Opening Hours:', zh: '接診時間：' },
  hoursHome: { de: 'Öffnungszeiten:', en: 'Hours:', zh: '接診時間：' },
};

export const HOURS = {
  weekday: { de: 'Montag – Freitag: 09:00 – 18:00 Uhr', en: 'Monday – Friday: 09:00 – 18:00', zh: '週一至週五：09:00 – 18:00' },
  saturday: { de: 'Samstag: nach Vereinbarung', en: 'Saturday: By appointment', zh: '週六：需提前預約' },
  saturdayPage: { de: 'Samstag: Nach Vereinbarung', en: 'Saturday: By special arrangement', zh: '週六：需特別預約' },
};

export const TRANSIT = {
  title: { de: 'Anreise mit ÖV & Auto', en: 'Public Transport & Parking', zh: '公共交通及停車指引' },
  items: [
    {
      icon: 'tram-front',
      html: {
        de: '<strong>Tramlinie 14:</strong> Haltestelle <em>Seebacherplatz</em> oder <em>Felsenrainstrasse</em>, von dort ca. 2 bis 3 Gehminuten zur Praxis.',
        en: '<strong>Tram 14:</strong> Stop at <em>Seebacherplatz</em> or <em>Felsenrainstrasse</em>, approximately 2–3 minutes walk.',
        zh: '<strong>14路有軌電車：</strong>乘至 <em>Seebacherplatz</em> 或 <em>Felsenrainstrasse</em> 站，下車步行約2至3分鐘即達。',
      },
    },
    {
      icon: 'bus',
      html: {
        de: '<strong>Bus 768:</strong> Direkte Verbindung ab Bahnhof Oerlikon oder Flughafen Zürich bis Seebach.',
        en: '<strong>Bus 768:</strong> Direct route from Zurich Oerlikon station or Zurich Airport.',
        zh: '<strong>768路巴士：</strong>自蘇黎世 Oerlikon 火車站或蘇黎世機場直達 Seebach。',
      },
    },
    {
      icon: 'car',
      html: {
        de: '<strong>Parkplätze:</strong> Öffentliche Parkplätze in der blauen Zone befinden sich in den umliegenden Quartierstrassen.',
        en: '<strong>Parking:</strong> Public blue-zone parking spaces are situated along adjacent residential streets.',
        zh: '<strong>自駕停車：</strong>診所所在街區道路設有公共藍區（Blaue Zone）停車位。',
      },
    },
  ],
};

export const CONTACT_FORM = {
  title: { de: 'Nachricht senden', en: 'Send an Enquiry', zh: '留言諮詢' },
  noteHome: {
    de: 'Bitte senden Sie über dieses allgemeine Formular keine vertraulichen Krankheitsgeschichten oder Diagnosen.',
    en: 'Please do not include sensitive diagnostic or medical history information in this general form.',
    zh: '為了保護您的醫療隱私，請勿在此公開網頁表單中提交敏感病歷資訊。',
  },
  notePage: {
    de: 'Haben Sie eine Frage zur Behandlung oder zur Praxis? Nutzen Sie unser Kontaktformular. Bitte senden Sie keine vertraulichen Diagnosen über das Formular.',
    en: 'Please do not submit confidential medical histories, diagnoses, or symptoms through this general contact form.',
    zh: '若您有任何就診疑問，歡迎填寫留言。為保障個人隱私，請勿在表單中傳送病歷與敏感個人健康記錄。',
  },
  fields: {
    name: { de: 'Ihr Name', en: 'Your Name', zh: '您的姓名' },
    namePage: { de: 'Ihr Name', en: 'Your Name', zh: '姓名' },
    namePlaceholder: { de: 'Vor- und Nachname', en: 'Full name', zh: '姓名' },
    phoneOptional: { de: 'Telefonnummer (optional)', en: 'Phone Number (optional)', zh: '聯絡電話（選填）' },
    email: { de: 'E-Mail-Adresse', en: 'Email Address', zh: '電子郵箱' },
    emailPlaceholder: { de: 'ihre.adresse@beispiel.ch', en: 'name@example.com', zh: 'name@example.com' },
    lang: { de: 'Bevorzugte Sprache', en: 'Preferred Language', zh: '接診語言偏好' },
    message: { de: 'Ihre Nachricht', en: 'Your Message', zh: '諮詢內容' },
    messagePlaceholder: {
      de: 'Wie können wir Ihnen weiterhelfen?',
      en: 'How can we assist you?',
      zh: '請簡要描述您的諮詢需求',
    },
    messagePlaceholderPage: {
      de: 'Wie können wir Ihnen weiterhelfen?',
      en: 'How can we help you?',
      zh: '請簡要寫下您的諮詢事項',
    },
  },
  langOptions: {
    de: [['de', 'Deutsch'], ['en', 'English'], ['zh', '中文 (Chinese)']],
    en: [['en', 'English'], ['de', 'Deutsch (German)'], ['zh', '中文 (Chinese)']],
    zh: [['zh', '中文 (Chinese)'], ['de', 'Deutsch (德語)'], ['en', 'English (英語)']],
  },
  langOptionsPage: {
    de: [['de', 'Deutsch'], ['en', 'English'], ['zh', '中文']],
    en: [['en', 'English'], ['de', 'German (Deutsch)'], ['zh', 'Chinese (中文)']],
    zh: [['zh', '中文 (Chinese)'], ['de', 'Deutsch (德語)'], ['en', 'English (英語)']],
  },
  privacyHtml: {
    de: 'Ich habe die <a href="/de/datenschutz/" target="_blank">Datenschutzerklärung</a> gelesen und bin mit der Verarbeitung meiner Angaben einverstanden.',
    en: 'I have read the <a href="/en/privacy-policy/" target="_blank">Privacy Policy</a> and agree to the processing of my contact details.',
    zh: '我已閱讀並知悉 <a href="/zh/yinsi/" target="_blank">隱私政策</a>。',
  },
  privacyHtmlPage: {
    de: 'Ich habe die <a href="/de/datenschutz/" target="_blank">Datenschutzerklärung</a> zur Kenntnis genommen.',
    en: 'I acknowledge the <a href="/en/privacy-policy/" target="_blank">Privacy Policy</a> regarding the handling of my message.',
    zh: '我已閱讀並知悉 <a href="/zh/yinsi/" target="_blank">隱私政策</a>。',
  },
  submit: { de: 'Nachricht absenden', en: 'Send Enquiry', zh: '傳送留言' },
  submitPage: { de: 'Nachricht absenden', en: 'Send Message', zh: '傳送留言' },
};
