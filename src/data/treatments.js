// Treatment catalogue — one stable ID per treatment across de/en/zh.
// `rev` flags zh strings that carry a REVIEW-MIN-TC medical-review marker.

export const TREATMENTS = [
  {
    id: 'acupuncture',
    icon: 'leaf',
    title: { de: 'Akupunktur', en: 'Acupuncture', zh: '中医针灸' },
    desc: {
      de: 'Gezieltes Setzen feiner, steriler Nadeln entlang der Leitbahnen zur Harmonisierung des Energieflusses (Qi) und Linderung von Beschwerden.',
      en: 'Careful placement of ultra-fine, sterile needles along meridian pathways to balance the flow of Qi and alleviate pain.',
      zh: '选用极细一次性无菌针灸针，精准施针于经络穴位，疏通经气、畅通气血，有效缓解各类急慢性疼痛与机体失调。',
    },
    descFull: {
      de: 'Gezielte Stimulation spezifischer Akupunkturpunkte mit haarfeinen, sterilen Einwegnadeln. Dient der Regulation des Energieflusses (Qi), Linderung von Schmerzen und Förderung der inneren Ruhe.',
      en: 'Precision insertion of single-use, sterile micro-needles along meridian channels to regulate energy circulation (Qi), alleviate pain, and calm the nervous system.',
      zh: '根据中医经络穴位理论，选取极细毫针精准施术。具有疏通经络、调和气血、平肝熄风、舒缓疼痛等多重疗效，深层放松身心。',
    },
    titleFull: { de: 'Akupunktur', en: 'Acupuncture', zh: '中医针灸' },
    rev: { zh: true },
  },
  {
    id: 'herbal',
    icon: 'flask-conical',
    title: { de: 'Chinesische Kräutertherapie', en: 'Chinese Herbal Medicine', zh: '中药调理' },
    desc: {
      de: 'Individuell zusammengestellte Rezepturen aus traditionellen Heilkräutern zur inneren Stärkung, Regulierung von Disharmonien und Unterstützung der Genesung.',
      en: 'Custom herbal formulations from certified Swiss pharmacies to strengthen vitality, regulate internal balance, and aid recovery.',
      zh: '根据个人体质与脉象辨证，由瑞士合规药房精细配制优质中草药配方颗粒，温和调补脏腑气血，扶正固本。',
    },
    descFull: {
      de: 'Individuelle Rezepturen aus geprüften chinesischen Heilpflanzen als Granulate oder Dekokte. Stärkt den Organismus von innen und unterstützt die nachhaltige Wiederherstellung des Gleichgewichts.',
      en: 'Personalized botanical formulas dispensed by certified Swiss pharmacies. Tailored to nourish vital organ systems, clear dampness or heat, and restore systemic balance.',
      zh: '依据四诊辨析脏腑虚实，选用道地药材调配定制方剂。由瑞士持牌中药房出具符合欧盟与瑞士标准的免煎中药浓缩颗粒，服用便捷安全。',
    },
    titleFull: { de: 'Chinesische Kräutertherapie', en: 'Chinese Herbal Medicine', zh: '中药辨证调理' },
    rev: { zh: true },
  },
  {
    id: 'tuina',
    icon: 'activity',
    title: { de: 'Tuina-Massage', en: 'Tuina Massage', zh: '推拿疗法' },
    desc: {
      de: 'Traditionelle chinesische manuelle Therapie mit Druck- und Dehntechniken zur Lösung von Muskelverspannungen und Förderung der Durchblutung.',
      en: 'Traditional manual therapeutic massage applying pressure and stretching to release chronic muscle tension and stimulate circulation.',
      zh: '运用循经按压、点穴、揉捏等中医手法，松解肌筋粘连，缓解颈肩腰背劳损酸痛，促进区域性血液回圈。',
    },
    descFull: {
      de: 'Manuelle Druck-, Knet- und Mobilisationstechniken entlang der Meridiane. Befreit blockierte Leitbahnen, löst tiefsitzende Verspannungen und verbessert die Beweglichkeit.',
      en: 'Traditional manual medical bodywork utilizing rhythmic pressure, kneading, and joint mobilization techniques to dissolve stubborn muscular knots and invigorate circulation.',
      zh: '运用传统推拿手法作用于体表经络与肌腱筋膜，松解劳损黏连、改善关节活动度，对长期伏案、姿势不良引发的僵硬酸痛效果显著。',
    },
    titleFull: { de: 'Tuina-Massage', en: 'Tuina Massage', zh: '经络推拿' },
    rev: { zh: true },
  },
  {
    id: 'cupping',
    icon: 'circle-dot',
    title: { de: 'Schröpfen', en: 'Cupping', zh: '拔罐疗法' },
    desc: {
      de: 'Erzeugung eines sanften Unterdrucks mit Gläsern auf der Haut zur Durchblutungsförderung, Lockerung des Gewebes und Ausleitung von Kälte oder Feuchtigkeit.',
      en: 'Application of glass cups with gentle suction to improve microcirculation, loosen connective tissue, and dispel cold and dampness.',
      zh: '利用火罐或负压原理吸附于特定体表部位，活血化瘀，祛除体内积聚的风、寒、湿邪，舒缓深层肌肉紧张。',
    },
    descFull: {
      de: 'Aufsetzen von Schröpfgläsern mit sanftem Vakuum. Regt die lokale Mikrozirkulation und den Lymphfluss intensiv an, lockert das Bindegewebe und leitet pathogene Faktoren aus.',
      en: 'Applying suction cups to the skin to encourage deep microcirculation and lymphatic drainage, release myofascial restrictions, and clear internal pathogenic stagnation.',
      zh: '在背部俞穴或阿是穴上施以负压罐疗，吸出区域性深层郁积的风、寒、湿气，加速血液回圈与机体代谢排毒。',
    },
    titleFull: { de: 'Schröpfen (Ba Guan)', en: 'Cupping (Ba Guan)', zh: '拔罐理疗 (Ba Guan)' },
    rev: {},
  },
  {
    id: 'moxibustion',
    icon: 'flame',
    title: { de: 'Moxibustion', en: 'Moxibustion', zh: '艾灸温通' },
    desc: {
      de: 'Gezielte Erwärmung spezifischer Akupunkturpunkte durch getrocknetes Beifusskraut (Moxa) zur Kräftigung des Yang und Vertreibung von Kälte.',
      en: 'Thermal stimulation of specific acupuncture points using ignited mugwort herb (moxa) to nourish Yang energy and dispel deep chill.',
      zh: '点燃精纯艾绒，通过温热药气透达经络穴位，温阳散寒、健脾益气，特别适合虚寒体质及畏冷人群。',
    },
    descFull: {
      de: 'Sanfte Wärmebehandlung bestimmter Akupunkturpunkte durch das Verglimmen von gereinigtem Beifusskraut. Wirkt tief wärmend, kräftigend und vertreibt Kältegefühle.',
      en: 'Gentle thermal warming of specific acupuncture points using dried, smoldering Artemisia herb (moxa) to nourish Yang, alleviate deep-seated chill, and boost vital energy.',
      zh: '利用点燃之陈年艾条或温灸盒悬灸特定穴位，以纯阳之火温煦经络，温经散寒、活血止痛、补中益气，是虚劳体质的温润良方。',
    },
    titleFull: { de: 'Moxibustion', en: 'Moxibustion', zh: '艾灸温通' },
    rev: { zh: true },
  },
  {
    id: 'consultation',
    icon: 'clipboard-check',
    title: { de: 'TCM-Beratung & Diagnostik', en: 'TCM Consultation & Diagnosis', zh: '中医辨证与体质咨询' },
    desc: {
      de: 'Ausführliche Erhebung des aktuellen Befindens nach TCM-Kriterien inklusive Zungen- und Pulsdiagnose sowie begleitende Lebensstil- und Ernährungsempfehlungen.',
      en: 'In-depth health assessment according to traditional criteria, including tongue and pulse evaluation, plus lifestyle and dietary guidance.',
      zh: '通过详尽的中医问诊与望闻问切，细致剖析气血阴阳状态，并提供贴合日常生活的饮食调养与健康指导。',
    },
    descFull: {
      de: 'Ganzheitliche Erfassung des Befindens durch Befragung, Zungen- und Pulsdiagnose. Ergänzt durch praktische Empfehlungen zu Ernährung nach den Fünf Elementen und gesunder Lebensführung.',
      en: 'Detailed health assessment combining medical questioning with traditional tongue and pulse evaluation, accompanied by actionable nutritional and lifestyle advice.',
      zh: '全面分析体质偏颇（如气虚、阳虚、湿热、气郁等），从作息节律、四季养生、五味五谷饮食等多维度提供日常健康保健建议。',
    },
    titleFull: { de: 'TCM-Beratung & Diagnostik', en: 'TCM Consultation & Diagnostics', zh: '中医体质与未病调摄' },
    rev: { zh: true }, // title only on treatments page
  },
];

// Section headers for the home treatments preview and the treatments page.
export const TREATMENTS_SECTION = {
  eyebrow: { de: 'Therapieangebote', en: 'Our Services', zh: '专业特色诊疗' },
  title: { de: 'Individuelle TCM-Behandlungen', en: 'Individual TCM Treatments', zh: '定制中医治疗项目' },
  lead: {
    de: 'Ganzheitliche Methoden der Traditionellen Chinesischen Medizin, abgestimmt auf Ihr persönliches Befinden.',
    en: 'Holistic methods of Traditional Chinese Medicine, personalized to your health needs.',
    zh: '结合传统中医精髓与现代卫生标准，因人施治，全面调和身心平衡。',
  },
  rev: { zh: ['eyebrow'] },
};

export const TREATMENTS_PAGE = {
  eyebrow: { de: 'Therapieübersicht', en: 'Therapeutic Services', zh: '专业特色诊疗' },
  title: { de: 'TCM-Behandlungen in Zürich-Seebach', en: 'TCM Treatments in Zurich-Seebach', zh: '中医治疗项目 · 苏黎世 Seebach' },
  lead: {
    de: 'Die Traditionelle Chinesische Medizin bietet ein vielseitiges Spektrum an bewährten Methoden. Erfahren Sie hier mehr über unsere sechs Behandlungsformen.',
    en: 'Traditional Chinese Medicine provides a proven spectrum of time-tested healing modalities. Learn about our six core therapies below.',
    zh: '涵盖传统针灸、经典经方、传统推拿、拔罐与艾灸等多种疗法，因人辨证，标本兼顾。',
  },
  rev: { zh: ['eyebrow', 'lead'] },
  cardLink: { de: 'Termin buchen', en: 'Book appointment', zh: '预约咨询' },
  cardLinkHome: { de: 'Termin anfragen', en: 'Book consultation', zh: '预约咨询' },
};

// "How we choose your treatment" block on the treatments page.
export const DIAGNOSTIC = {
  eyebrow: { de: 'Diagnostik & Auswahl', en: 'Diagnostic Process', zh: '辩证施治' },
  title: {
    de: 'Wie wählen wir die passende Behandlung für Sie aus?',
    en: 'How do we select your treatment plan?',
    zh: '我们如何为您量身制定治疗方案？',
  },
  lead: {
    de: 'In der Traditionellen Chinesischen Medizin gibt es kein starres Schema. Jeder Mensch und jedes Beschwerdebild ist einzigartig. Bei Ihrem ersten Besuch widmen wir uns daher ausführlich der traditionellen Befunderhebung:',
    en: 'In Traditional Chinese Medicine, there is no generic formula. Every patient is assessed individually through three complementary diagnostics:',
    zh: '中医强调“同病异治，异病同治”。即使表面症状相似，不同体质患者的成因机制亦大不相同。',
  },
  items: [
    {
      de: '<strong>Anamnesegespräch:</strong> Umfassende Betrachtung aktueller Beschwerden, Schlaf, Verdauung und Energielevel.',
      en: '<strong>Comprehensive Intake:</strong> In-depth discussion of sleep, digestion, stress, energy levels, and health history.',
      zh: '<strong>详尽四诊合参：</strong>系统评估体征表现、睡眠起居、二便状况与饮食喜好。',
    },
    {
      de: '<strong>Zungendiagnose:</strong> Farbe, Form und Belag der Zunge geben wertvolle Hinweise auf den Zustand der inneren Organe.',
      en: '<strong>Tongue Examination:</strong> Color, shape, and coating provide insight into internal organ systems and fluid dynamics.',
      zh: '<strong>望舌辨微：</strong>观察舌质红绛苍老、舌苔厚薄腻润，判断体内寒热湿燥。',
    },
    {
      de: '<strong>Pulsdiagnose:</strong> Abtasten der verschiedenen Pulstiefen und -qualitäten an beiden Handgelenken.',
      en: '<strong>Radial Pulse Diagnosis:</strong> Assessing the quality, depth, and rhythm of 12 distinct pulse positions at both wrists.',
      zh: '<strong>切脉辨气血：</strong>切按双手寸关尺三部，感知脏腑经气虚实深浅。',
    },
  ],
  rev: { zh: ['lead'] },
  image: {
    de: { src: '/assets/images/clinic-treatment-room.webp', alt: 'Behandlungsraum der Praxis mit Liege und medizinischen Postern' },
    en: { src: '/assets/images/clinic-treatment-room.webp', alt: 'Practice treatment room with table and medical charts' },
    zh: { src: '/assets/images/clinic-treatment-room.webp', alt: '诊所治疗室实景 — 治疗床与人体经络图' },
  },
};
