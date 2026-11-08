// Central SEO system — Open Graph/Twitter defaults, structured data
// (JSON-LD), and breadcrumb labels. Single source used by BaseLayout so
// every page gets correct metadata without page-level duplication.
//
// Only confirmed public facts are encoded here: practice name, address,
// landline (EMR-verified), email, geo from the published Maps embed, and
// the EMR profile link. Unconfirmed values (mobile, opening hours,
// prices, insurer partners, ratings, medical specialties) stay out.
import { PRACTICE, SITE_URL } from './site.js';

export const OG_IMAGE = '/assets/images/clinic-room-orchids.webp';
export const OG_IMAGE_DIMS = { width: 1500, height: 1000 };
export const OG_LOCALE = { de: 'de_CH', en: 'en_GB', zh: 'zh_CN' };

export const OG_IMAGE_ALT = {
  de: 'Behandlungsraum der TCM Praxis Weissenberger-Lu in Zürich-Seebach',
  en: 'Treatment room at TCM Praxis Weissenberger-Lu in Zurich-Seebach',
  zh: '苏黎世 Seebach TCM Weissenberger-Lu 中医诊所治疗室',
};

// Short breadcrumb labels per page (nav labels + legal/booking fallbacks).
export const CRUMB = {
  home:       { de: 'Startseite', en: 'Home', zh: '首页' },
  treatments: { de: 'Behandlungen', en: 'Treatments', zh: '治疗项目' },
  symptoms:   { de: 'Beschwerden', en: 'Symptoms', zh: '健康问题' },
  about:      { de: 'Über Min', en: 'About Min', zh: '认识 Min' },
  firstVisit: { de: 'Erster Besuch', en: 'First Visit', zh: '首次就诊' },
  prices:     { de: 'Preise & Krankenkasse', en: 'Prices & Insurance', zh: '收费与保险' },
  booking:    { de: 'Termin buchen', en: 'Book Appointment', zh: '预约就诊' },
  contact:    { de: 'Kontakt', en: 'Contact', zh: '联络方式' },
  privacy:    { de: 'Datenschutz', en: 'Privacy Policy', zh: '隐私政策' },
  imprint:    { de: 'Impressum', en: 'Imprint', zh: '法律声明' },
};

export function practiceNode() {
  return {
    '@type': 'MedicalBusiness',
    '@id': `${SITE_URL}/#practice`,
    name: PRACTICE.name,
    url: `${SITE_URL}/de/`,
    telephone: PRACTICE.landlineIntl.replace(/\s/g, ''),
    email: PRACTICE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: PRACTICE.street,
      postalCode: '8052',
      addressLocality: 'Zürich',
      addressRegion: 'ZH',
      addressCountry: 'CH',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 47.41911, longitude: 8.54801 },
    image: SITE_URL + OG_IMAGE,
    sameAs: ['https://emr.ch/de/therapeut/min.weissenberger-lu'],
  };
}

export function breadcrumbNode(pageId, locale, routes) {
  if (pageId === 'home') return null;
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: CRUMB.home[locale],
        item: SITE_URL + routes.home[locale],
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: (CRUMB[pageId] || CRUMB.home)[locale],
        item: SITE_URL + routes[pageId][locale],
      },
    ],
  };
}

export function personNode(locale, canonical) {
  return {
    '@type': 'Person',
    name: PRACTICE.practitioner,
    jobTitle: { de: 'TCM-Therapeutin', en: 'TCM Practitioner', zh: '执业中医师' }[locale],
    url: canonical,
    worksFor: { '@id': `${SITE_URL}/#practice` },
    sameAs: ['https://emr.ch/de/therapeut/min.weissenberger-lu'],
  };
}

// Assemble the JSON-LD @graph for a page.
export function buildJsonLd({ pageId, locale, canonical, routes }) {
  const graph = [practiceNode()];
  const crumbs = breadcrumbNode(pageId, locale, routes);
  if (crumbs) graph.push(crumbs);
  if (pageId === 'about') graph.push(personNode(locale, canonical));
  return { '@context': 'https://schema.org', '@graph': graph };
}
