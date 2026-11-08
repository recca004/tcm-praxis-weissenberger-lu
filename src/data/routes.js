export const LOCALES = ['de', 'en', 'zh'];
export const LANG_TAG = { de: 'de-CH', en: 'en', zh: 'zh-CN' };
export const LOCAL_NAME = { de: 'Zürich', en: 'Zurich', zh: '苏黎世' };

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
  ['treatments', { de: 'Behandlungen', en: 'Treatments', zh: '治疗项目' }],
  ['about', { de: 'Über Min', en: 'About Min', zh: '认识 Min' }],
  ['firstVisit', { de: 'Erster Besuch', en: 'First Visit', zh: '首次就诊' }],
  ['prices', { de: 'Preise & Krankenkasse', en: 'Prices & Insurance', zh: '收费与保险' }],
  ['contact', { de: 'Kontakt', en: 'Contact', zh: '联络方式' }],
];

export const I18N = {
  book:       { de: 'Termin buchen', en: 'Book Appointment', zh: '预约就诊' },
  bookMobile: { de: 'Termin buchen', en: 'Book Appointment', zh: '预约就诊' },
  menuTitle:  { de: 'Menü', en: 'Menu', zh: '网站选单' },
  menuAria:   { de: 'Mobilmenü', en: 'Mobile menu', zh: '移动端选单' },
  menuOpen:   { de: 'Menü öffnen', en: 'Open menu', zh: '开启选单' },
  menuClose:  { de: 'Menü schliessen', en: 'Close menu', zh: '关闭选单' },
  langSwitch: { de: 'Sprachauswahl', en: 'Language', zh: '语言切换' },
  skip:       { de: 'Zum Inhalt springen', en: 'Skip to content', zh: '跳转至主要内容' },
  home:       { de: 'Startseite', en: 'Home', zh: '首页' },
  homeAria:   { de: 'TCM Praxis Weissenberger-Lu Startseite', en: 'TCM Praxis Weissenberger-Lu home', zh: 'TCM Praxis Weissenberger-Lu 首页' },
  navAria:    { de: 'Hauptnavigation', en: 'Main navigation', zh: '主导航' },
  drawerLinks: {
    de: [['/de/', 'Startseite'], ['/de/behandlungen/', 'Behandlungen'], ['/de/ueber-min/', 'Über Min'], ['/de/erster-besuch/', 'Erster Besuch'], ['/de/preise-krankenkasse/', 'Preise & Krankenkasse'], ['/de/kontakt/', 'Kontakt & Anfahrt']],
    en: [['/en/', 'Home'], ['/en/treatments/', 'Treatments'], ['/en/about-min/', 'About Min'], ['/en/first-visit/', 'First Visit'], ['/en/prices-insurance/', 'Prices & Insurance'], ['/en/contact/', 'Contact & Directions']],
    zh: [['/zh/', '首页'], ['/zh/liaofa/', '治疗项目'], ['/zh/guanyu-min/', '认识 Min'], ['/zh/shouci-jiuzhen/', '首次就诊'], ['/zh/feiyong-baoxian/', '收费与保险'], ['/zh/lianxi/', '联络方式与交通']],
  },
  phone: '+41 78 899 92 88',
  phoneHref: 'tel:+41788999288',
};
