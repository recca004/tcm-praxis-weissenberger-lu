// Treatment catalogue — one stable ID per treatment across de/en/zh.
// `rev` flags zh strings that carry a REVIEW-MIN-TC medical-review marker.

export const TREATMENTS = [
  {
    id: 'acupuncture',
    icon: 'leaf',
    title: { de: 'Akupunktur', en: 'Acupuncture', zh: '中醫針灸' },
    desc: {
      de: 'Gezieltes Setzen feiner, steriler Nadeln entlang der Leitbahnen zur Harmonisierung des Energieflusses (Qi) und Linderung von Beschwerden.',
      en: 'Careful placement of ultra-fine, sterile needles along meridian pathways to balance the flow of Qi and alleviate pain.',
      zh: '選用極細一次性無菌針灸針，精準施針於經絡穴位，疏通經氣、暢通氣血，有效緩解各類急慢性疼痛與機體失調。',
    },
    descFull: {
      de: 'Gezielte Stimulation spezifischer Akupunkturpunkte mit haarfeinen, sterilen Einwegnadeln. Dient der Regulation des Energieflusses (Qi), Linderung von Schmerzen und Förderung der inneren Ruhe.',
      en: 'Precision insertion of single-use, sterile micro-needles along meridian channels to regulate energy circulation (Qi), alleviate pain, and calm the nervous system.',
      zh: '根據中醫經絡穴位理論，選取極細毫針精準施術。具有疏通經絡、調和氣血、平肝熄風、舒緩疼痛等多重療效，深層放鬆身心。',
    },
    titleFull: { de: 'Akupunktur', en: 'Acupuncture', zh: '中醫針灸' },
    rev: { zh: true },
  },
  {
    id: 'herbal',
    icon: 'flask-conical',
    title: { de: 'Chinesische Kräutertherapie', en: 'Chinese Herbal Medicine', zh: '中藥調理' },
    desc: {
      de: 'Individuell zusammengestellte Rezepturen aus traditionellen Heilkräutern zur inneren Stärkung, Regulierung von Disharmonien und Unterstützung der Genesung.',
      en: 'Custom herbal formulations from certified Swiss pharmacies to strengthen vitality, regulate internal balance, and aid recovery.',
      zh: '根據個人體質與脈象辨證，由瑞士合規藥房精細配製優質中草藥配方顆粒，溫和調補臟腑氣血，扶正固本。',
    },
    descFull: {
      de: 'Individuelle Rezepturen aus geprüften chinesischen Heilpflanzen als Granulate oder Dekokte. Stärkt den Organismus von innen und unterstützt die nachhaltige Wiederherstellung des Gleichgewichts.',
      en: 'Personalized botanical formulas dispensed by certified Swiss pharmacies. Tailored to nourish vital organ systems, clear dampness or heat, and restore systemic balance.',
      zh: '依據四診辨析臟腑虛實，選用道地藥材調配定製方劑。由瑞士持牌中藥房出具符合歐盟與瑞士標準的免煎中藥濃縮顆粒，服用便捷安全。',
    },
    titleFull: { de: 'Chinesische Kräutertherapie', en: 'Chinese Herbal Medicine', zh: '中藥辨證調理' },
    rev: { zh: true },
  },
  {
    id: 'tuina',
    icon: 'activity',
    title: { de: 'Tuina-Massage', en: 'Tuina Massage', zh: '推拿療法' },
    desc: {
      de: 'Traditionelle chinesische manuelle Therapie mit Druck- und Dehntechniken zur Lösung von Muskelverspannungen und Förderung der Durchblutung.',
      en: 'Traditional manual therapeutic massage applying pressure and stretching to release chronic muscle tension and stimulate circulation.',
      zh: '運用循經按壓、點穴、揉捏等中醫手法，鬆解肌筋粘連，緩解頸肩腰背勞損痠痛，促進區域性血液迴圈。',
    },
    descFull: {
      de: 'Manuelle Druck-, Knet- und Mobilisationstechniken entlang der Meridiane. Befreit blockierte Leitbahnen, löst tiefsitzende Verspannungen und verbessert die Beweglichkeit.',
      en: 'Traditional manual medical bodywork utilizing rhythmic pressure, kneading, and joint mobilization techniques to dissolve stubborn muscular knots and invigorate circulation.',
      zh: '運用傳統推拿手法作用於體表經絡與肌腱筋膜，鬆解勞損黏連、改善關節活動度，對長期伏案、姿勢不良引發的僵硬痠痛效果顯著。',
    },
    titleFull: { de: 'Tuina-Massage', en: 'Tuina Massage', zh: '經絡推拿' },
    rev: { zh: true },
  },
  {
    id: 'cupping',
    icon: 'circle-dot',
    title: { de: 'Schröpfen', en: 'Cupping', zh: '拔罐療法' },
    desc: {
      de: 'Erzeugung eines sanften Unterdrucks mit Gläsern auf der Haut zur Durchblutungsförderung, Lockerung des Gewebes und Ausleitung von Kälte oder Feuchtigkeit.',
      en: 'Application of glass cups with gentle suction to improve microcirculation, loosen connective tissue, and dispel cold and dampness.',
      zh: '利用火罐或負壓原理吸附於特定體表部位，活血化瘀，祛除體內積聚的風、寒、溼邪，舒緩深層肌肉緊張。',
    },
    descFull: {
      de: 'Aufsetzen von Schröpfgläsern mit sanftem Vakuum. Regt die lokale Mikrozirkulation und den Lymphfluss intensiv an, lockert das Bindegewebe und leitet pathogene Faktoren aus.',
      en: 'Applying suction cups to the skin to encourage deep microcirculation and lymphatic drainage, release myofascial restrictions, and clear internal pathogenic stagnation.',
      zh: '在背部俞穴或阿是穴上施以負壓罐療，吸出區域性深層鬱積的風、寒、溼氣，加速血液迴圈與機體代謝排毒。',
    },
    titleFull: { de: 'Schröpfen (Ba Guan)', en: 'Cupping (Ba Guan)', zh: '拔罐理療 (Ba Guan)' },
    rev: {},
  },
  {
    id: 'moxibustion',
    icon: 'flame',
    title: { de: 'Moxibustion', en: 'Moxibustion', zh: '艾灸溫通' },
    desc: {
      de: 'Gezielte Erwärmung spezifischer Akupunkturpunkte durch getrocknetes Beifusskraut (Moxa) zur Kräftigung des Yang und Vertreibung von Kälte.',
      en: 'Thermal stimulation of specific acupuncture points using ignited mugwort herb (moxa) to nourish Yang energy and dispel deep chill.',
      zh: '點燃精純艾絨，通過溫熱藥氣透達經絡穴位，溫陽散寒、健脾益氣，特別適合虛寒體質及畏冷人群。',
    },
    descFull: {
      de: 'Sanfte Wärmebehandlung bestimmter Akupunkturpunkte durch das Verglimmen von gereinigtem Beifusskraut. Wirkt tief wärmend, kräftigend und vertreibt Kältegefühle.',
      en: 'Gentle thermal warming of specific acupuncture points using dried, smoldering Artemisia herb (moxa) to nourish Yang, alleviate deep-seated chill, and boost vital energy.',
      zh: '利用點燃之陳年艾條或溫灸盒懸灸特定穴位，以純陽之火溫煦經絡，溫經散寒、活血止痛、補中益氣，是虛勞體質的溫潤良方。',
    },
    titleFull: { de: 'Moxibustion', en: 'Moxibustion', zh: '艾灸溫通' },
    rev: { zh: true },
  },
  {
    id: 'consultation',
    icon: 'clipboard-check',
    title: { de: 'TCM-Beratung & Diagnostik', en: 'TCM Consultation & Diagnosis', zh: '中醫辨證與體質諮詢' },
    desc: {
      de: 'Ausführliche Erhebung des aktuellen Befindens nach TCM-Kriterien inklusive Zungen- und Pulsdiagnose sowie begleitende Lebensstil- und Ernährungsempfehlungen.',
      en: 'In-depth health assessment according to traditional criteria, including tongue and pulse evaluation, plus lifestyle and dietary guidance.',
      zh: '通過詳盡的中醫問診與望聞問切，細緻剖析氣血陰陽狀態，並提供貼合日常生活的飲食調養與健康指導。',
    },
    descFull: {
      de: 'Ganzheitliche Erfassung des Befindens durch Befragung, Zungen- und Pulsdiagnose. Ergänzt durch praktische Empfehlungen zu Ernährung nach den Fünf Elementen und gesunder Lebensführung.',
      en: 'Detailed health assessment combining medical questioning with traditional tongue and pulse evaluation, accompanied by actionable nutritional and lifestyle advice.',
      zh: '全面分析體質偏頗（如氣虛、陽虛、溼熱、氣鬱等），從作息節律、四季養生、五味五穀飲食等多維度提供日常健康保健建議。',
    },
    titleFull: { de: 'TCM-Beratung & Diagnostik', en: 'TCM Consultation & Diagnostics', zh: '中醫體質與未病調攝' },
    rev: { zh: true }, // title only on treatments page
  },
];

// Section headers for the home treatments preview and the treatments page.
export const TREATMENTS_SECTION = {
  eyebrow: { de: 'Therapieangebote', en: 'Our Services', zh: '專業特色診療' },
  title: { de: 'Individuelle TCM-Behandlungen', en: 'Individual TCM Treatments', zh: '定製中醫治療項目' },
  lead: {
    de: 'Ganzheitliche Methoden der Traditionellen Chinesischen Medizin, abgestimmt auf Ihr persönliches Befinden.',
    en: 'Holistic methods of Traditional Chinese Medicine, personalized to your health needs.',
    zh: '結合傳統中醫精髓與現代衛生標準，因人施治，全面調和身心平衡。',
  },
  rev: { zh: ['eyebrow'] },
};

export const TREATMENTS_PAGE = {
  eyebrow: { de: 'Therapieübersicht', en: 'Therapeutic Services', zh: '專業特色診療' },
  title: { de: 'TCM-Behandlungen in Zürich-Seebach', en: 'TCM Treatments in Zurich-Seebach', zh: '中醫治療項目 · 蘇黎世 Seebach' },
  lead: {
    de: 'Die Traditionelle Chinesische Medizin bietet ein vielseitiges Spektrum an bewährten Methoden. Erfahren Sie hier mehr über unsere sechs Behandlungsformen.',
    en: 'Traditional Chinese Medicine provides a proven spectrum of time-tested healing modalities. Learn about our six core therapies below.',
    zh: '涵蓋傳統針灸、經典經方、傳統推拿、拔罐與艾灸等多種療法，因人辨證，標本兼顧。',
  },
  rev: { zh: ['eyebrow', 'lead'] },
  cardLink: { de: 'Termin buchen', en: 'Book appointment', zh: '預約諮詢' },
  cardLinkHome: { de: 'Termin anfragen', en: 'Book consultation', zh: '預約諮詢' },
};

// "How we choose your treatment" block on the treatments page.
export const DIAGNOSTIC = {
  eyebrow: { de: 'Diagnostik & Auswahl', en: 'Diagnostic Process', zh: '辯證施治' },
  title: {
    de: 'Wie wählen wir die passende Behandlung für Sie aus?',
    en: 'How do we select your treatment plan?',
    zh: '我們如何為您量身制定治療方案？',
  },
  lead: {
    de: 'In der Traditionellen Chinesischen Medizin gibt es kein starres Schema. Jeder Mensch und jedes Beschwerdebild ist einzigartig. Bei Ihrem ersten Besuch widmen wir uns daher ausführlich der traditionellen Befunderhebung:',
    en: 'In Traditional Chinese Medicine, there is no generic formula. Every patient is assessed individually through three complementary diagnostics:',
    zh: '中醫強調“同病異治，異病同治”。即使表面症狀相似，不同體質患者的成因機制亦大不相同。',
  },
  items: [
    {
      de: '<strong>Anamnesegespräch:</strong> Umfassende Betrachtung aktueller Beschwerden, Schlaf, Verdauung und Energielevel.',
      en: '<strong>Comprehensive Intake:</strong> In-depth discussion of sleep, digestion, stress, energy levels, and health history.',
      zh: '<strong>詳盡四診合參：</strong>系統評估體徵表現、睡眠起居、二便狀況與飲食喜好。',
    },
    {
      de: '<strong>Zungendiagnose:</strong> Farbe, Form und Belag der Zunge geben wertvolle Hinweise auf den Zustand der inneren Organe.',
      en: '<strong>Tongue Examination:</strong> Color, shape, and coating provide insight into internal organ systems and fluid dynamics.',
      zh: '<strong>望舌辨微：</strong>觀察舌質紅絳蒼老、舌苔厚薄膩潤，判斷體內寒熱溼燥。',
    },
    {
      de: '<strong>Pulsdiagnose:</strong> Abtasten der verschiedenen Pulstiefen und -qualitäten an beiden Handgelenken.',
      en: '<strong>Radial Pulse Diagnosis:</strong> Assessing the quality, depth, and rhythm of 12 distinct pulse positions at both wrists.',
      zh: '<strong>切脈辨氣血：</strong>切按雙手寸關尺三部，感知臟腑經氣虛實深淺。',
    },
  ],
  rev: { zh: ['lead'] },
  image: {
    de: { src: '/assets/images/tcm-herbs.webp', alt: 'Chinesische Kräuterheilkunde und Beratungstisch' },
    en: { src: '/assets/images/tcm-cupping.webp', alt: 'TCM treatment instruments, massage stones, and cupping glass' },
    zh: { src: '/assets/images/tcm-herbs.webp', alt: '傳統中藥材調理與問診臺' },
  },
};
