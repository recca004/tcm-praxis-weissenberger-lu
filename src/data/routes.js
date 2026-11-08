export const LOCALES = ['de', 'en', 'zh'];
export const LANG_TAG = { de: 'de-CH', en: 'en', zh: 'zh-CN' };
export const LOCAL_NAME = { de: 'Zürich', en: 'Zurich', zh: '蘇黎世' };

export const ROUTES = {
  home:       { de: '/de/', en: '/en/', zh: '/zh/' },
  about:      { de: '/de/ueber-min/', en: '/en/about-min/', zh: '/zh/guanyu-min/' },
  treatments: { de: '/de/behandlungen/', en: '/en/treatments/', zh: '/zh/liaofa/' },
  firstVisit: { de: '/de/erster-besuch/', en: '/en/first-visit/', zh: '/zh/shouci-jiuzhen/' },
  prices:     { de: '/de/preise-krankenkasse/', en: '/en/prices-insurance/', zh: '/zh/feiyong-baoxian/' },
  booking:    { de: '/de/termin-buchen/', en: '/en/book-appointment/', zh: '/zh/yuyue/' },
  contact:    { de: '/de/kontakt/', en: '/en/contact/', zh: '/zh/lianxi/' },
  privacy:    { de: '/de/datenschutz/', en: '/en/privacy-policy/', zh: '/zh/yinsi/' },
  imprint:    { de: '/de/impressum/', en: '/en/imprint/', zh: '/zh/falv-shengming/' },
};

export const PAGE_BY_SLUG = {};
for (const [id, s] of Object.entries(ROUTES))
  for (const [loc, p] of Object.entries(s)) PAGE_BY_SLUG[`${loc}${p === `/${loc}/` ? '/' : p.replace(`/${loc}`, '')}`] = id;

export const NAV = [
  ['treatments', { de: 'Behandlungen', en: 'Treatments', zh: '治療項目' }],
  ['about', { de: 'Über Min', en: 'About Min', zh: '認識 Min' }],
  ['firstVisit', { de: 'Erster Besuch', en: 'First Visit', zh: '首次就診' }],
  ['prices', { de: 'Preise & Krankenkasse', en: 'Prices & Insurance', zh: '收費與保險' }],
  ['contact', { de: 'Kontakt', en: 'Contact', zh: '聯絡方式' }],
];

export const I18N = {
  book:       { de: 'Termin buchen', en: 'Book Appointment', zh: '預約就診' },
  bookMobile: { de: 'Termin buchen', en: 'Book Appointment', zh: '預約就診' },
  menuTitle:  { de: 'Menü', en: 'Menu', zh: '網站選單' },
  menuAria:   { de: 'Mobilmenü', en: 'Mobile menu', zh: '移動端選單' },
  menuOpen:   { de: 'Menü öffnen', en: 'Open menu', zh: '開啟選單' },
  menuClose:  { de: 'Menü schliessen', en: 'Close menu', zh: '關閉選單' },
  langSwitch: { de: 'Sprachauswahl', en: 'Language', zh: '語言切換' },
  skip:       { de: 'Zum Inhalt springen', en: 'Skip to content', zh: '跳轉至主要內容' },
  home:       { de: 'Startseite', en: 'Home', zh: '首頁' },
  homeAria:   { de: 'TCM Praxis Weissenberger-Lu Startseite', en: 'TCM Praxis Weissenberger-Lu home', zh: 'TCM Praxis Weissenberger-Lu 首頁' },
  navAria:    { de: 'Hauptnavigation', en: 'Main navigation', zh: '主導航' },
  drawerLinks: {
    de: [['/de/', 'Startseite'], ['/de/behandlungen/', 'Behandlungen'], ['/de/ueber-min/', 'Über Min'], ['/de/erster-besuch/', 'Erster Besuch'], ['/de/preise-krankenkasse/', 'Preise & Krankenkasse'], ['/de/kontakt/', 'Kontakt & Anfahrt']],
    en: [['/en/', 'Home'], ['/en/treatments/', 'Treatments'], ['/en/about-min/', 'About Min'], ['/en/first-visit/', 'First Visit'], ['/en/prices-insurance/', 'Prices & Insurance'], ['/en/contact/', 'Contact & Directions']],
    zh: [['/zh/', '首頁'], ['/zh/liaofa/', '治療項目'], ['/zh/guanyu-min/', '認識 Min'], ['/zh/shouci-jiuzhen/', '首次就診'], ['/zh/feiyong-baoxian/', '收費與保險'], ['/zh/lianxi/', '聯絡方式與交通']],
  },
  phone: '+41 78 899 92 88',
  phoneHref: 'tel:+41788999288',
};
