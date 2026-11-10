// Insurer candidates for the homepage logo carousel and the Prices page
// name list. `approved` flips to true ONLY after Min confirms (a)
// reimbursement and (b) permission to display the logo/name. Until then
// nothing renders publicly as a recognition claim — the Prices page shows
// the names strictly as examples with a pending-approval marker.
export const INSURERS = [
  { id: 'helsana', name: 'Helsana', url: 'https://www.helsana.ch/', logo: null, approved: false, logoPending: true },
  { id: 'css', name: 'CSS', url: 'https://www.css.ch/', logo: null, approved: false, logoPending: true },
  { id: 'swica', name: 'SWICA', url: 'https://www.swica.ch/', logo: null, approved: false, logoPending: true },
  { id: 'sanitas', name: 'Sanitas', url: 'https://www.sanitas.com/', logo: null, approved: false, logoPending: true },
  { id: 'sympany', name: 'Sympany', url: 'https://www.sympany.ch/', logo: null, approved: false, logoPending: true },
  { id: 'concordia', name: 'CONCORDIA', url: 'https://www.concordia.ch/', logo: null, approved: false, logoPending: true },
  { id: 'visana', name: 'Visana', url: 'https://www.visana.ch/', logo: null, approved: false, logoPending: true },
  { id: 'egk', name: 'EGK', url: 'https://www.egk.ch/', logo: null, approved: false, logoPending: true },
  { id: 'mutuel', name: 'Groupe Mutuel', url: 'https://www.groupemutuel.ch/', logo: '/assets/insurers/mutuel.svg', approved: false },
  { id: 'kpt', name: 'KPT', url: 'https://www.kpt.ch/', logo: '/assets/insurers/kpt.svg', approved: false },
  { id: 'oekk', name: 'ÖKK', url: 'https://www.oekk.ch/', logo: null, approved: false, logoPending: true },
  { id: 'atupri', name: 'Atupri', url: 'https://www.atupri.ch/', logo: null, approved: false, logoPending: true },
];

export const INSURANCE_SECTION = {
  title: { de: 'Krankenkassen & Zusatzversicherung', en: 'Health Insurers & Supplementary Coverage', zh: '健康保险与补充医疗保障' },
  text: {
    de: 'Ob und in welchem Umfang Ihre Krankenkasse die Kosten übernimmt, hängt von Ihrer Zusatzversicherung, der Behandlung und den Bedingungen Ihres Versicherers ab. Bitte klären Sie die Kostenübernahme vor Ihrem Termin direkt mit Ihrer Versicherung.',
    en: 'Whether and to what extent your health insurer covers the costs depends on your supplementary plan, the treatment and your insurer’s conditions. Please confirm coverage directly with your insurer before your appointment.',
    zh: '您的医疗保险是否报销以及报销比例，取决于您的附加医疗保险方案、治疗项目及保险公司的条款。请在就诊前直接向您的保险公司确认报销事宜。',
  },
  link: { de: 'Preise & Krankenkasse', en: 'Prices & Insurance', zh: '收费与保险说明' },
};
