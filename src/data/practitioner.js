// Practitioner (Min Weissenberger-Lu) section copy.
// `rev` flags zh strings carrying REVIEW-MIN-TC markers.

export const PORTRAIT = {
  name: 'Min Weissenberger-Lu',
  sublabel: {
    de: 'TCM-Therapeutin in Zürich-Seebach',
    en: 'TCM Practitioner in Zurich-Seebach',
    zh: '苏黎世 Seebach 执业中医师',
  },
  alt: {
    de: 'Min Weissenberger-Lu, TCM-Therapeutin der Praxis in Zürich-Seebach',
    en: 'Min Weissenberger-Lu, TCM practitioner at the Zurich-Seebach practice',
    zh: 'Min Weissenberger-Lu — 苏黎世 Seebach 中医诊所执业中医师',
  },
  badge: {
    de: '[Porträt vor Freigabe]',
    en: '[Portrait subject to approval]',
    zh: '[医师肖像待确认]',
  },
};

export const CREDENTIALS = [
  {
    icon: 'award',
    de: 'Eidg. Diplom TCM-Therapeutin',
    en: 'Swiss Federal Diploma TCM',
    zh: '瑞士联邦认证中医师',
  },
  {
    icon: 'shield-check',
    de: 'EMR / ASCA Anerkennung',
    en: 'EMR / ASCA Recognition',
    zh: 'EMR / ASCA 认可执业会员',
  },
  {
    icon: 'clock-3',
    de: 'Über 15 Jahre Praxiserfahrung',
    en: '15+ Years Clinical Practice',
    zh: '逾15年临床实践经验',
  },
];

// About-page variants of the credential chips.
export const CREDENTIALS_ABOUT = [
  {
    icon: 'award',
    de: 'Eidgenössisches Diplom TCM-Therapeutin',
    en: 'Swiss Federal Diploma in TCM',
    zh: '瑞士联邦认证中医师资质',
  },
  {
    icon: 'shield-check',
    de: 'Anerkannt bei EMR / ASCA / SBO-TCM',
    en: 'EMR / ASCA / SBO-TCM Recognized',
    zh: '瑞士经验医学登记处 EMR / ASCA 会员',
  },
  {
    icon: 'clock-3',
    de: 'Über 15 Jahre Berufspraxis',
    en: 'Over 15 Years Clinical Experience',
    zh: '逾15年临床实践沉淀',
  },
];

export const PRACTITIONER_HOME = {
  eyebrow: { de: 'Ihre Therapeutin', en: 'Your Practitioner', zh: '您的主治医师' },
  title: {
    de: 'Persönliche Zuwendung und fundierte Erfahrung',
    en: 'Dedicated Care and In-Depth Experience',
    zh: '专业敬业 · 悉心守护您的身心健康',
  },
  paragraphs: [
    {
      de: 'In meiner Praxis in Zürich-Seebach nehme ich mir Zeit für eine sorgfältige und ganzheitliche Betrachtung Ihrer Beschwerden. Die Traditionelle Chinesische Medizin betrachtet Körper und Geist als Einheit, in der Wohlbefinden auf einem ausgewogenen Energiefluss beruht.',
      en: 'At my practice in Zurich-Seebach, I take the time to understand your individual health story. Traditional Chinese Medicine views body and mind as an interconnected whole, where wellbeing is rooted in balanced vitality.',
      zh: '在苏黎世 Seebach 诊所，我始终坚持给予每位患者充裕的就诊时间与专注的倾听。中医注重“天人合一”，把人体视为一个有机整体，健康的本质在于气血阴阳的动态平衡。',
    },
    {
      de: 'Mit fundierten Kenntnissen in Akupunktur, Kräutertherapie und manuellen Techniken gestalte ich jede Behandlung individuell auf Ihre aktuellen Bedürfnisse und Lebenssituation abgestimmt.',
      en: 'With extensive training in acupuncture, herbal prescription, and manual therapies, each treatment plan is carefully tailored to support your personal recovery and long-term health.',
      zh: '凭借扎实的中医辨证功底与多年临床经验，我将针灸、中草药和中医推拿融会贯通，根据您的个人体质度身定制治疗方案，帮助身体重获自我调节与恢复能力。',
      rev: { zh: true },
    },
  ],
  languagesHtml: {
    de: 'Beratungssprachen: <strong>Deutsch</strong>, <strong>English</strong>, <strong>中文</strong>',
    en: 'Languages: <strong>English</strong>, <strong>German</strong>, <strong>Chinese (中文)</strong>',
    zh: '接诊交流语言：<strong>中文（普通话）</strong>、<strong>德语</strong>、<strong>英语</strong>',
  },
  moreBtn: { de: 'Mehr über Min erfahren', en: 'Learn more about Min', zh: '了解更多医师资讯' },
  bookBtn: { de: 'Termin vereinbaren', en: 'Book an appointment', zh: '立即预约' },
};

export const ABOUT_PAGE = {
  eyebrow: { de: 'Ihre Therapeutin', en: 'Your Practitioner', zh: '医师介绍' },
  title: { de: 'Über Min Weissenberger-Lu', en: 'About Min Weissenberger-Lu', zh: '认识中医师 Min Weissenberger-Lu' },
  lead: {
    de: 'Erfahrung, Empathie und fundiertes Wissen der Traditionellen Chinesischen Medizin im Herzen von Zürich-Seebach.',
    en: 'Dedicated care, clinical experience, and traditional expertise in Zurich-Seebach.',
    zh: '秉承仁心仁术，深耕传统中医经典，以专注与耐心服务苏黎世及周边华人与本地患者。',
  },
  bodyTitle: {
    de: 'Mein Weg & Behandlungsphilosophie',
    en: 'My Approach & Treatment Philosophy',
    zh: '行医理念与专业背景',
  },
  paragraphs: [
    {
      de: 'Die Traditionelle Chinesische Medizin (TCM) begleitet mich seit vielen Jahren. Mein Anspruch ist es, jedem Menschen mit Aufmerksamkeit, Respekt und fachlicher Sorgfalt zu begegnen.',
      en: 'Traditional Chinese Medicine has been my life\'s vocation. My conviction is that effective medical care requires taking time to listen attentively and understand each patient as a whole person.',
      zh: '传统中医学是一门讲求整体观与个体化辨证的博大医术。对我而言，医学不仅是解除病痛的技能，更是对每一位就诊者身心感受的深度尊重与关怀。',
      rev: { zh: true },
    },
    {
      de: 'Gesundheit bedeutet in der TCM weit mehr als die blosse Abwesenheit von Symptomen: Es ist das harmonische Gleichgewicht zwischen Körper, Geist und Lebensstil. Durch die Kombination aus traditioneller Diagnostik (Zungen- und Pulsbefund), gezielter Akupunktur, individueller Kräutertherapie und manuellen Techniken wie Tuina und Schröpfen unterstütze ich Ihren Körper dabei, seine Selbstregulationskräfte zu aktivieren.',
      en: 'In TCM, good health is not merely the absence of discomfort—it is the harmonious balance between bodily functions, emotional equilibrium, and lifestyle. By combining traditional diagnostics (tongue and pulse examination) with acupuncture, herbal prescriptions, and manual therapies like Tuina, I help your body awaken its self-regulating healing capacity.',
      zh: '在苏黎世行医期间，我深切体会到现代生活节奏给人们身心带来的压力与亚健康挑战。通过四诊合参（望、闻、问、切），结合毫针针灸、本草经方调治以及传统经络推拿，帮助患者疏理经气，恢复内在气血调和与阴阳平衡。',
      rev: { zh: true },
    },
  ],
  languagesHtml: {
    de: 'Ich berate Sie gerne in: <strong>Deutsch</strong>, <strong>English</strong> oder <strong>中文 (Chinesisch)</strong>',
    en: 'Consultation languages: <strong>English</strong>, <strong>German (Deutsch)</strong>, and <strong>Chinese (中文)</strong>',
    zh: '接诊沟通语言：<strong>中文（母语）</strong>、<strong>德语 (Deutsch)</strong>、<strong>英语 (English)</strong>',
  },
  pillars: [
    {
      icon: 'heart',
      title: { de: 'Ganzheitlicher Ansatz', en: 'Holistic Perspective', zh: '整体辨证调理' },
      desc: {
        de: 'Wir behandeln nicht nur isolierte Symptome, sondern ergründen die tiefer liegenden Ursachen Ihrer Beschwerden.',
        en: 'We look beyond isolated symptoms to uncover and treat the underlying imbalances in your health.',
        zh: '不局限於单一区域性症状，而是探寻失衡根源，从根本上改善脏腑机能与气血回圈。',
      },
      rev: { zh: true },
    },
    {
      icon: 'clock',
      title: { de: 'Zeit für Ihre Gesundheit', en: 'Time for Your Care', zh: '充足就诊时间' },
      desc: {
        de: 'Ausführliche Konsultationen und ruhige Behandlungen in einer entspannten Praxisatmosphäre ohne Zeitdruck.',
        en: 'Unhurried consultations and quiet, restorative treatment sessions in a peaceful clinical setting.',
        zh: '初诊提供充裕的沟通时间，环境静谧舒适，无匆促流水线式就诊压力。',
      },
      rev: {},
    },
    {
      icon: 'shield',
      title: { de: 'Höchste Qualitätsstandards', en: 'Highest Quality Standards', zh: '严谨质控与安全' },
      desc: {
        de: 'Verwendung geprüfter, steriler Einwegnadeln und streng kontrollierter chinesischer Arzneikräuter aus Schweizer Fachapotheken.',
        en: 'Exclusively certified sterile single-use needles and rigorous quality-tested herbs from licensed Swiss pharmacies.',
        zh: '全套医用无菌一次性耗材，中药材均通过瑞士严格农残与重金属检验。',
      },
      rev: { zh: true },
    },
  ],
};
