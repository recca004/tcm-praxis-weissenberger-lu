// Practitioner (Min Weissenberger-Lu) section copy.
// `rev` flags zh strings carrying REVIEW-MIN-TC markers.

export const PORTRAIT = {
  name: 'Min Weissenberger-Lu',
  sublabel: {
    de: 'TCM-Therapeutin in Zürich-Seebach',
    en: 'TCM Practitioner in Zurich-Seebach',
    zh: '蘇黎世 Seebach 執業中醫師',
  },
  badge: {
    de: '[Foto folgt nach Freigabe durch Min]',
    en: '[Portrait awaiting client approval]',
    zh: '[醫師肖像待確認]',
  },
};

export const CREDENTIALS = [
  {
    icon: 'award',
    de: 'Eidg. Diplom TCM-Therapeutin',
    en: 'Swiss Federal Diploma TCM',
    zh: '瑞士聯邦認證中醫師',
  },
  {
    icon: 'shield-check',
    de: 'EMR / ASCA Anerkennung',
    en: 'EMR / ASCA Recognition',
    zh: 'EMR / ASCA 認可執業會員',
  },
  {
    icon: 'clock-3',
    de: 'Über 15 Jahre Praxiserfahrung',
    en: '15+ Years Clinical Practice',
    zh: '逾15年臨床實踐經驗',
  },
];

// About-page variants of the credential chips.
export const CREDENTIALS_ABOUT = [
  {
    icon: 'award',
    de: 'Eidgenössisches Diplom TCM-Therapeutin',
    en: 'Swiss Federal Diploma in TCM',
    zh: '瑞士聯邦認證中醫師資質',
  },
  {
    icon: 'shield-check',
    de: 'Anerkannt bei EMR / ASCA / SBO-TCM',
    en: 'EMR / ASCA / SBO-TCM Recognized',
    zh: '瑞士經驗醫學登記處 EMR / ASCA 會員',
  },
  {
    icon: 'clock-3',
    de: 'Über 15 Jahre Berufspraxis',
    en: 'Over 15 Years Clinical Experience',
    zh: '逾15年臨床實踐沉澱',
  },
];

export const PRACTITIONER_HOME = {
  eyebrow: { de: 'Ihre Therapeutin', en: 'Your Practitioner', zh: '您的主治醫師' },
  title: {
    de: 'Persönliche Zuwendung und fundierte Erfahrung',
    en: 'Dedicated Care and In-Depth Experience',
    zh: '專業敬業 · 悉心守護您的身心健康',
  },
  paragraphs: [
    {
      de: 'In meiner Praxis in Zürich-Seebach nehme ich mir Zeit für eine sorgfältige und ganzheitliche Betrachtung Ihrer Beschwerden. Die Traditionelle Chinesische Medizin betrachtet Körper und Geist als Einheit, in der Wohlbefinden auf einem ausgewogenen Energiefluss beruht.',
      en: 'At my practice in Zurich-Seebach, I take the time to understand your individual health story. Traditional Chinese Medicine views body and mind as an interconnected whole, where wellbeing is rooted in balanced vitality.',
      zh: '在蘇黎世 Seebach 診所，我始終堅持給予每位患者充裕的就診時間與專注的傾聽。中醫注重“天人合一”，把人體視為一個有機整體，健康的本質在於氣血陰陽的動態平衡。',
    },
    {
      de: 'Mit fundierten Kenntnissen in Akupunktur, Kräutertherapie und manuellen Techniken gestalte ich jede Behandlung individuell auf Ihre aktuellen Bedürfnisse und Lebenssituation abgestimmt.',
      en: 'With extensive training in acupuncture, herbal prescription, and manual therapies, each treatment plan is carefully tailored to support your personal recovery and long-term health.',
      zh: '憑藉紮實的中醫辨證功底與多年臨床經驗，我將針灸、中草藥和中醫推拿融會貫通，根據您的個人體質度身定製治療方案，幫助身體重獲自我調節與恢復能力。',
      rev: { zh: true },
    },
  ],
  languagesHtml: {
    de: 'Beratungssprachen: <strong>Deutsch</strong>, <strong>English</strong>, <strong>中文</strong>',
    en: 'Languages: <strong>English</strong>, <strong>German</strong>, <strong>Chinese (中文)</strong>',
    zh: '接診交流語言：<strong>中文（普通話）</strong>、<strong>德語</strong>、<strong>英語</strong>',
  },
  moreBtn: { de: 'Mehr über Min erfahren', en: 'Learn more about Min', zh: '瞭解更多醫師資訊' },
  bookBtn: { de: 'Termin vereinbaren', en: 'Book an appointment', zh: '立即預約' },
};

export const ABOUT_PAGE = {
  eyebrow: { de: 'Ihre Therapeutin', en: 'Your Practitioner', zh: '醫師介紹' },
  title: { de: 'Über Min Weissenberger-Lu', en: 'About Min Weissenberger-Lu', zh: '認識中醫師 Min Weissenberger-Lu' },
  lead: {
    de: 'Erfahrung, Empathie und fundiertes Wissen der Traditionellen Chinesischen Medizin im Herzen von Zürich-Seebach.',
    en: 'Dedicated care, clinical experience, and traditional expertise in Zurich-Seebach.',
    zh: '秉承仁心仁術，深耕傳統中醫經典，以專注與耐心服務蘇黎世及周邊華人與本地患者。',
  },
  bodyTitle: {
    de: 'Mein Weg & Behandlungsphilosophie',
    en: 'My Approach & Treatment Philosophy',
    zh: '行醫理念與專業背景',
  },
  paragraphs: [
    {
      de: 'Die Traditionelle Chinesische Medizin (TCM) begleitet mich seit vielen Jahren. Mein Anspruch ist es, jedem Menschen mit Aufmerksamkeit, Respekt und fachlicher Sorgfalt zu begegnen.',
      en: 'Traditional Chinese Medicine has been my life\'s vocation. My conviction is that effective medical care requires taking time to listen attentively and understand each patient as a whole person.',
      zh: '傳統中醫學是一門講求整體觀與個體化辨證的博大醫術。對我而言，醫學不僅是解除病痛的技能，更是對每一位就診者身心感受的深度尊重與關懷。',
      rev: { zh: true },
    },
    {
      de: 'Gesundheit bedeutet in der TCM weit mehr als die blosse Abwesenheit von Symptomen: Es ist das harmonische Gleichgewicht zwischen Körper, Geist und Lebensstil. Durch die Kombination aus traditioneller Diagnostik (Zungen- und Pulsbefund), gezielter Akupunktur, individueller Kräutertherapie und manuellen Techniken wie Tuina und Schröpfen unterstütze ich Ihren Körper dabei, seine Selbstregulationskräfte zu aktivieren.',
      en: 'In TCM, good health is not merely the absence of discomfort—it is the harmonious balance between bodily functions, emotional equilibrium, and lifestyle. By combining traditional diagnostics (tongue and pulse examination) with acupuncture, herbal prescriptions, and manual therapies like Tuina, I help your body awaken its self-regulating healing capacity.',
      zh: '在蘇黎世行醫期間，我深切體會到現代生活節奏給人們身心帶來的壓力與亞健康挑戰。通過四診合參（望、聞、問、切），結合毫針針灸、本草經方調治以及傳統經絡推拿，幫助患者疏理經氣，恢復內在氣血調和與陰陽平衡。',
      rev: { zh: true },
    },
  ],
  languagesHtml: {
    de: 'Ich berate Sie gerne in: <strong>Deutsch</strong>, <strong>English</strong> oder <strong>中文 (Chinesisch)</strong>',
    en: 'Consultation languages: <strong>English</strong>, <strong>German (Deutsch)</strong>, and <strong>Chinese (中文)</strong>',
    zh: '接診溝通語言：<strong>中文（母語）</strong>、<strong>德語 (Deutsch)</strong>、<strong>英語 (English)</strong>',
  },
  pillars: [
    {
      icon: 'heart',
      title: { de: 'Ganzheitlicher Ansatz', en: 'Holistic Perspective', zh: '整體辨證調理' },
      desc: {
        de: 'Wir behandeln nicht nur isolierte Symptome, sondern ergründen die tiefer liegenden Ursachen Ihrer Beschwerden.',
        en: 'We look beyond isolated symptoms to uncover and treat the underlying imbalances in your health.',
        zh: '不侷限於單一區域性症狀，而是探尋失衡根源，從根本上改善臟腑機能與氣血迴圈。',
      },
      rev: { zh: true },
    },
    {
      icon: 'clock',
      title: { de: 'Zeit für Ihre Gesundheit', en: 'Time for Your Care', zh: '充足就診時間' },
      desc: {
        de: 'Ausführliche Konsultationen und ruhige Behandlungen in einer entspannten Praxisatmosphäre ohne Zeitdruck.',
        en: 'Unhurried consultations and quiet, restorative treatment sessions in a peaceful clinical setting.',
        zh: '初診提供充裕的溝通時間，環境靜謐舒適，無匆促流水線式就診壓力。',
      },
      rev: {},
    },
    {
      icon: 'shield',
      title: { de: 'Höchste Qualitätsstandards', en: 'Highest Quality Standards', zh: '嚴謹質控與安全' },
      desc: {
        de: 'Verwendung geprüfter, steriler Einwegnadeln und streng kontrollierter chinesischer Arzneikräuter aus Schweizer Fachapotheken.',
        en: 'Exclusively certified sterile single-use needles and rigorous quality-tested herbs from licensed Swiss pharmacies.',
        zh: '全套醫用無菌一次性耗材，中藥材均通過瑞士嚴格農殘與重金屬檢驗。',
      },
      rev: { zh: true },
    },
  ],
};
