// Homepage hero + trust strip copy.
export const HERO = {
  eyebrow: { de: 'TCM Praxis in Zürich-Seebach', en: 'TCM Practice in Zurich-Seebach', zh: '苏黎世 Seebach 传统中医诊所' },
  title: {
    de: 'Traditionelle Chinesische Medizin in Zürich-Seebach',
    en: 'Traditional Chinese Medicine in Zurich-Seebach',
    zh: '传统中医疗法 · 苏黎世 Seebach',
  },
  lead: {
    de: 'Persönliche Beratung und TCM-Behandlungen bei Min Weissenberger-Lu.',
    en: 'Personal consultation and tailored TCM treatments with Min Weissenberger-Lu.',
    zh: '由中医师 Min Weissenberger-Lu 倾听您的健康需求，提供定制化的中医调理与悉心关怀。',
  },
  primary: { de: 'Termin buchen', en: 'Book Appointment', zh: '预约就诊' },
  secondary: { de: 'Behandlungen ansehen', en: 'Explore Treatments', zh: '浏览治疗项目' },
  imageAlt: {
    de: 'Behandlungsraum der TCM Praxis Weissenberger-Lu in Zürich-Seebach mit Liege und weissen Orchideen',
    en: 'Treatment room at TCM Praxis Weissenberger-Lu in Zurich-Seebach with treatment table and white orchids',
    zh: '苏黎世 Seebach 中医诊所治疗室实景 — 治疗床与白色兰花',
  },
  address: {
    de: 'Schaffhauserstrasse 466, 8052 Zürich',
    en: 'Schaffhauserstrasse 466, 8052 Zurich',
    zh: 'Schaffhauserstrasse 466, 8052 Zürich',
  },
  badge: { de: 'Foto vor Freigabe', en: 'Photo subject to approval', zh: '实景照片待确认' },
};

export const HERO_SLIDES = [
  {
    src: '/assets/images/clinic-room-orchids.webp',
    pos: '55% 50%',
    alt: {
      de: 'Behandlungsraum der TCM Praxis Weissenberger-Lu mit Liege und weissen Orchideen',
      en: 'Treatment room at TCM Praxis Weissenberger-Lu with table and white orchids',
      zh: '诊所治疗室实景 — 治疗床与白色兰花',
    },
  },
  {
    src: '/assets/images/clinic-treatment-room.webp',
    pos: '50% 45%',
    alt: {
      de: 'Behandlungsliege mit medizinischen Postern und Therapielampe in der Praxis',
      en: 'Treatment table with medical charts and therapy lamp in the practice',
      zh: '治疗室内的治疗床、人体经络图与治疗灯',
    },
  },
  {
    src: '/assets/images/clinic-waiting-area.webp',
    pos: '50% 55%',
    alt: {
      de: 'Wartebereich der Praxis mit zwei Sesseln und Kunstwerk an der Wand',
      en: 'Practice waiting area with two armchairs and artwork on the wall',
      zh: '诊所候诊区 — 两把座椅与墙上的艺术画作',
    },
  },
];

export const HOMEPAGE_TRUST = [
  { icon: 'user', h: { de: 'Persönliche Betreuung', en: 'Personal Care', zh: '一对一亲诊' },
    p: { de: 'Behandlung direkt bei Min Weissenberger-Lu', en: 'Direct treatment with Min Weissenberger-Lu', zh: '由 Min Weissenberger-Lu 亲自诊治' } },
  { icon: 'leaf', h: { de: 'Neun Behandlungsmethoden', en: 'Nine Treatment Methods', zh: '九种中医疗法' },
    p: { de: 'Von Akupunktur bis Ohr-Akupunktur — wie auf der Visitenkarte', en: 'From acupuncture to ear acupuncture — as listed on the practice card', zh: '针灸至耳针 — 与诊所名片所列一致' } },
  { icon: 'map-pin', h: { de: 'Zürich-Seebach', en: 'Zurich-Seebach', zh: '苏黎世 Seebach' },
    p: { de: 'Schaffhauserstrasse 466 · Tram 14 / Bus 768', en: 'Schaffhauserstrasse 466 · Tram 14 / Bus 768', zh: 'Schaffhauserstrasse 466 · 14路电车 / 768路巴士' } },
];
export const TRUST_ITEMS = [
  {
    icon: 'check-circle-2',
    h: {
      de: 'Krankenkassen-Anerkennung',
      en: 'Insurance Coverage',
      zh: '瑞士医保报销',
    },
    badge: { de: '[Status in Abklärung]', en: '[CONFIRM]', zh: '[CONFIRM]' },
    p: {
      de: 'Kostenübernahme abhängig von Ihrer Zusatzversicherung',
      en: 'Coverage depends on your supplementary insurance',
      zh: '报销取决于您的附加医疗保险',
    },
    rev: { zh: true },
  },
];


// Quiet statement moment — reuses existing approved sentences verbatim.
export const STATEMENT = {
  text: {
    de: 'Mein Anspruch ist es, jedem Menschen mit Aufmerksamkeit, Respekt und fachlicher Sorgfalt zu begegnen.',
    en: 'My conviction is that effective medical care requires taking time to listen attentively and understand each patient as a whole person.',
    zh: '在苏黎世 Seebach 诊所，我始终坚持给予每位患者充裕的就诊时间与专注的倾听。',
  },
};

// Sub-page "back to home" label.
export const BACK_LINK = { de: 'Zurück zur Startseite', en: 'Back to Home', zh: '返回首页' };
