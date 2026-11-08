// Treatment catalogue — one stable ID per treatment across de/en/zh.
// `rev` flags zh strings that carry a REVIEW-MIN-TC medical-review marker.

export const TREATMENTS = [
  {
    id: 'acupuncture',
    icon: 'leaf',
    title: { de: 'Akupunktur', en: 'Acupuncture', zh: '针灸' },
    desc: {
      de: 'Gezieltes Setzen feiner, steriler Nadeln entlang der Leitbahnen zur Harmonisierung des Energieflusses (Qi) und Linderung von Beschwerden.',
      en: 'Careful placement of fine, sterile needles along meridian pathways to balance the flow of Qi and ease complaints.',
      zh: '选用无菌细针，沿经络穴位精准施针，以调和气机、疏通气血、缓解不适。',
    },
    descFull: {
      de: 'Stimulation spezifischer Akupunkturpunkte mit sterilen Einwegnadeln zur Regulation des Qi-Flusses und Linderung von Beschwerden.',
      en: 'Stimulation of specific acupuncture points with sterile single-use needles to regulate Qi flow and ease complaints.',
      zh: '以无菌一次性毫针刺激特定穴位，调节经气运行、缓解不适。',
    },
    titleFull: { de: 'Akupunktur', en: 'Acupuncture', zh: '针灸' },
    rev: { zh: true },
  },
  {
    id: 'tuina',
    icon: 'hand',
    title: { de: 'Tuina', en: 'Tuina', zh: '推拿' },
    desc: {
      de: 'Traditionelle chinesische Manualtherapie entlang der Meridiane — löst Verspannungen und regt die Selbstregulation an.',
      en: 'Traditional Chinese manual therapy along the meridians — releases tension and supports the body’s self-regulation.',
      zh: '沿经络施行的中医传统手法，松解筋结、促进机体自我调节。',
    },
    descFull: {
      de: 'Manuelle Techniken wie Drücken, Rollen und Dehnen entlang der Meridiane zur Lockerung von Muskulatur und Anregung der Selbstregulation.',
      en: 'Manual techniques such as pressing, rolling and stretching along the meridians to release muscles and stimulate self-regulation.',
      zh: '运用按、揉、拿、推等手法沿经络操作，松解肌肉、激发自我调节能力。',
    },
    titleFull: { de: 'Tuina', en: 'Tuina', zh: '推拿' },
    rev: { zh: true },
  },
  {
    id: 'cupping',
    icon: 'circle',
    title: { de: 'Schröpfen', en: 'Cupping', zh: '拔罐' },
    desc: {
      de: 'Schalen aus Glas oder Kunststoff erzeugen Unterdruck auf der Haut — regt die lokale Durchblutung und das Lösen von Verspannungen an.',
      en: 'Glass or plastic cups create suction on the skin — stimulates local circulation and the release of tension.',
      zh: '以玻璃或树脂罐具在体表形成负压，促进局部气血流通、舒解紧张。',
    },
    descFull: {
      de: 'Durch Unterdruck werden Schröpfgläser auf die Haut gesetzt, um die lokale Durchblutung zu fördern und Verspannungen zu lösen.',
      en: 'Cups are applied to the skin under suction to promote local blood flow and release muscle tension.',
      zh: '利用负压将罐具吸附于体表，促进局部血液循环、松解肌肉紧张。',
    },
    titleFull: { de: 'Schröpfen', en: 'Cupping', zh: '拔罐' },
    rev: { zh: true },
  },
  {
    id: 'herbal',
    icon: 'sprout',
    title: { de: 'Kräutertherapie', en: 'Herbal Medicine', zh: '中草药治疗' },
    desc: {
      de: 'Individuell abgestimmte Rezepturen aus chinesischen Arzneimitteln nach der traditionellen Bian-Zheng-Diagnostik.',
      en: 'Individually composed prescriptions of Chinese medicinal substances based on traditional pattern differentiation.',
      zh: '依中医辨证诊断，为体质与症状定制的中药配方。',
    },
    descFull: {
      de: 'Nach der TCM-Diagnostik (Bian Zheng) wird eine individuelle Rezeptur aus Kräutern, Wurzeln und Mineralien zusammengestellt.',
      en: 'Following TCM diagnostics (Bian Zheng), an individual prescription of herbs, roots and minerals is composed.',
      zh: '经辨证论治后，由草药、根茎与矿物等组成的个体化方剂。',
    },
    titleFull: { de: 'Kräutertherapie', en: 'Herbal Medicine', zh: '中草药治疗' },
    rev: { zh: true },
  },
  {
    id: 'guasha',
    icon: 'waves',
    title: { de: 'Gua Sha', en: 'Gua Sha', zh: '刮痧' },
    desc: {
      de: 'Streichtechnik mit einem glatten Werkzeug über die Haut — regt die Mikrozirkulation an und löst Verhärtungen.',
      en: 'A smooth tool is drawn across the skin — stimulates micro-circulation and releases hardened tissue.',
      zh: '以光滑工具沿皮肤刮拭，促进微循环、松解硬结。',
    },
    descFull: {
      de: 'Mit einem abgerundeten Werkzeug wird die Haut in Strichen bearbeitet, um die Durchblutung anzuregen und verhärtetes Gewebe zu lösen.',
      en: 'The skin is stroked with a rounded tool to stimulate circulation and release hardened tissue.',
      zh: '以圆滑器具在皮肤上刮拭，促进血流、化解硬结组织。',
    },
    titleFull: { de: 'Gua Sha', en: 'Gua Sha', zh: '刮痧' },
    rev: { zh: true },
  },
  {
    id: 'moxa',
    icon: 'flame',
    title: { de: 'Moxa', en: 'Moxibustion', zh: '艾灸' },
    desc: {
      de: 'Wärmebehandlung mit getrocknetem Beifuß an Akupunkturpunkten — wärmt und stärkt nach TCM-Verständnis.',
      en: 'Heat therapy with dried mugwort at acupuncture points — warms and tonifies in TCM understanding.',
      zh: '以干燥艾绒在穴位上施灸，按中医原理温通经络、扶助阳气。',
    },
    descFull: {
      de: 'Getrockneter Beifuß (Moxa) wird an Akupunkturpunkten gebrannt oder gewärmt, um Kälte zu vertreiben und das Qi zu stärken.',
      en: 'Dried mugwort (moxa) is burned or warmed at acupuncture points to dispel cold and strengthen Qi.',
      zh: '将干燥艾绒在穴位上燃烧或温热，以驱寒、温阳、壮气。',
    },
    titleFull: { de: 'Moxa', en: 'Moxibustion', zh: '艾灸' },
    rev: { zh: true },
  },
  {
    id: 'plum-blossom',
    icon: 'flower-2',
    title: { de: 'Pflaumenblütennadel-Behandlung', en: 'Plum Blossom Needle Therapy', zh: '梅花针治疗' },
    desc: {
      de: 'Oberflächliche Nadelung mit einem mehrköpfigen Federhammer — sanfter Reiz über größere Hautareale.',
      en: 'Superficial needling with a multi-tipped spring hammer — gentle stimulation over larger skin areas.',
      zh: '以多针弹簧锤浅刺皮肤，于较大面积给予温和刺激。',
    },
    descFull: {
      de: 'Die Pflaumenblütennadel (Mei Hua Zhen) ist ein mehrköpfiger Nadelhammer, der die Hautoberfläche rhythmisch betupft, ohne tief einzudringen.',
      en: 'The plum blossom needle (Mei Hua Zhen) is a multi-tipped hammer that taps the skin rhythmically without deep penetration.',
      zh: '梅花针是一种多头针锤，有节奏地轻叩皮肤表面而不深刺。',
    },
    titleFull: { de: 'Pflaumenblütennadel-Behandlung', en: 'Plum Blossom Needle Therapy', zh: '梅花针治疗' },
    rev: { zh: true },
  },
  {
    id: 'electro-acupuncture',
    icon: 'zap',
    title: { de: 'Elektro-Akupunktur', en: 'Electro-Acupuncture', zh: '电针' },
    desc: {
      de: 'Akupunkturnadeln werden mit schwachem Strom stimuliert — vertieft die Wirkung bei ausgewählten Indikationen.',
      en: 'Acupuncture needles are stimulated with weak electrical current — deepens the effect for selected indications.',
      zh: '以微弱电流刺激针体，在特定适应症上增强针刺效应。',
    },
    descFull: {
      de: 'Nach dem Setzen der Nadeln werden diese an ein schwaches Stromgerät angeschlossen, um die Stimulation zu verstärken oder auszudehnen.',
      en: 'After needle insertion they are connected to a low-current device to intensify or extend the stimulation.',
      zh: '进针后连接弱电设备，以增强或延长刺激作用。',
    },
    titleFull: { de: 'Elektro-Akupunktur', en: 'Electro-Acupuncture', zh: '电针' },
    rev: { zh: true },
  },
  {
    id: 'ear-acupuncture',
    icon: 'ear',
    title: { de: 'Ohr-Akupunktur', en: 'Ear Acupuncture', zh: '耳针' },
    desc: {
      de: 'Nadelung reflektorischer Punkte am Ohr — die Ohrmuschel bildet den Körper in Mikrosystemen nach.',
      en: 'Needling reflex points on the ear — the auricle maps the body in micro-systems.',
      zh: '针刺耳部反射点，耳廓以微系统对应全身。',
    },
    descFull: {
      de: 'Auf der Ohrmuschel werden reflektorische Zonen behandelt, die nach der Aurikulomedizin dem ganzen Organismus zugeordnet sind.',
      en: 'Reflex zones on the auricle are treated which, according to auricular medicine, correspond to the whole body.',
      zh: '按耳穴医学，在耳廓上对应全身的反射区进行治疗。',
    },
    titleFull: { de: 'Ohr-Akupunktur', en: 'Ear Acupuncture', zh: '耳针' },
    rev: { zh: true },
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
    de: 'Die Traditionelle Chinesische Medizin bietet ein vielseitiges Spektrum an bewährten Methoden. Erfahren Sie hier mehr über unsere neun Behandlungsmethoden.',
    en: 'Traditional Chinese Medicine provides a proven spectrum of time-tested healing modalities. Learn about our nine treatment methods below.',
    zh: '涵盖传统针灸、道地经方、经络推拿、拔罐与艾灸等九项特色疗法，因人辨证，标本兼顾。',
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
