// Pricing & insurance content — single source for the Prices page and the
// homepage overview. CHF amounts are Min's proposed figures (Nov 2026
// reference screenshots) — `pending` keeps the review marker visible until
// she confirms them in writing.

export const PRICE_PENDING_LABEL = {
  de: 'Betrag zur Freigabe',
  en: 'Amount pending approval',
  zh: '金额待确认',
};

export const PRICE_BLOCKS = [
  {
    id: 'initial',
    title: { de: 'Erstbehandlung', en: 'Initial Treatment', zh: '首次治疗' },
    price: 'CHF 200',
    duration: { de: 'ca. 90 Minuten', en: 'approx. 90 minutes', zh: '约 90 分钟' },
    desc: {
      de: 'Ausführliches Erstgespräch, TCM-Diagnostik mit Zungen- und Pulsbeurteilung sowie individuell abgestimmte Behandlung.',
      en: 'Detailed initial consultation, TCM diagnostics with tongue and pulse assessment, and an individually tailored treatment.',
      zh: '详尽的初诊问诊，包括舌诊与脉诊等中医辨证评估，以及量身定制的治疗方案。',
    },
    pending: true,
    rev: { zh: ['desc'] },
  },
  {
    id: 'followup',
    title: { de: 'Folgebehandlung', en: 'Follow-up Treatment', zh: '复诊治疗' },
    price: 'CHF 150',
    duration: { de: 'ca. 60 Minuten', en: 'approx. 60 minutes', zh: '约 60 分钟' },
    desc: {
      de: 'Verlaufskontrolle und individuell angepasste Behandlung, beispielsweise mit Akupunktur und ergänzenden TCM-Methoden.',
      en: 'Progress review and individually adjusted treatment, for example with acupuncture and complementary TCM methods.',
      zh: '复诊病情跟踪与个体化调整的治疗，例如针灸及配合其他中医疗法。',
    },
    pending: true,
    rev: { zh: ['desc'] },
  },
];

export const PRICES_HOME = {
  eyebrow: { de: 'Transparenz & Kosten', en: 'Fair & Transparent', zh: '透明收费' },
  title: {
    de: 'Preise & Krankenkasse',
    en: 'Prices & Supplementary Insurance',
    zh: '收费标准与医疗保险',
  },
  text: {
    de: 'Individuelle Behandlung nach den Grundsätzen der Traditionellen Chinesischen Medizin — mit klaren, transparenten Preisen.',
    en: 'Individual treatment based on the principles of Traditional Chinese Medicine — with clear, transparent pricing.',
    zh: '遵循传统中医诊疗原则的个性化治疗，价格清晰透明。',
  },
  rev: { zh: ['text'] },
  link: {
    de: 'Alle Details zu Preisen & Versicherung',
    en: 'Full pricing & insurance details',
    zh: '查看收费与保险详情',
  },
  insurance: {
    eyebrow: { de: 'Krankenkassen-Deckung', en: 'Swiss Health Insurance', zh: '瑞士医保报销说明' },
    title: { de: 'Zusatzversicherung (VVG)', en: 'Supplementary Coverage (VVG)', zh: '补充医疗保险 (VVG)' },
    text: {
      de: 'Die obligatorische Grundversicherung übernimmt komplementärmedizinische Behandlungen von Naturheilpraktikern in der Regel nicht. Ob und in welchem Umfang eine Zusatzversicherung (VVG) Kosten übernimmt, hängt von Ihrer individuellen Police ab — bitte klären Sie dies direkt mit Ihrer Krankenkasse.',
      en: 'Basic health insurance (KVG) generally does not cover naturopathic treatment. Whether — and how much — a supplementary plan (VVG) reimburses depends on your individual policy. Please confirm coverage directly with your insurer before your appointment.',
      zh: '瑞士基本医疗保险 (KVG) 通常不涵盖自然疗法。附加医疗保险 (VVG) 是否报销及报销比例取决于您的具体保险方案，就诊前请直接向保险公司确认。',
    },
    steps: [
      {
        de: '<strong>Zusatzversicherung prüfen:</strong> Klären Sie vor Behandlungsbeginn bei Ihrer Kasse ab, welcher Kostenanteil für TCM/Akupunktur übernommen wird.',
        en: '<strong>Check your policy:</strong> Inquire with your health insurer beforehand regarding your annual complementary allowance.',
        zh: '<strong>报销确认：</strong>建议您在就诊前向您的保险公司咨询补充险年度报销额度与比例。',
      },
      {
        de: '<strong>Tarif 590:</strong> Sie erhalten eine detaillierte Rückforderungsrechnung nach dem standardisierten Tarif 590 zur Einreichung bei Ihrer Krankenkasse.',
        en: '<strong>Tariff 590:</strong> You will receive an official claim form (Tarif 590) to submit directly to your insurance company.',
        zh: '<strong>Tarif 590 报销单：</strong>诊所将出具符合瑞士统一标准的退费收据，便于您直接递交报销。',
      },
      {
        de: '<strong>Keine Überweisungs-Pflicht:</strong> Meist ist keine vorgängige ärztliche Überweisung erforderlich (abhängig vom persönlichen Versicherungsmodell).',
        en: '<strong>No GP referral needed:</strong> Most policies allow direct booking without a physician referral.',
        zh: '<strong>无需家庭医生转诊：</strong>多数附加医疗保险允许患者直接预约，无需额外转诊单。',
      },
    ],
    link: {
      de: 'Alle Details zur Krankenkasse lesen',
      en: 'Read full insurance guide',
      zh: '检视医保详细说明',
    },
  },
};

export const PRICES_PAGE = {
  eyebrow: { de: 'Kostentransparenz', en: 'Financial Clarity', zh: '收费透明' },
  title: { de: 'Preise & Krankenkassen', en: 'Prices & Insurance', zh: '收费与医疗保险' },
  lead: {
    de: 'Individuelle Behandlung nach den Grundsätzen der Traditionellen Chinesischen Medizin. Wir nehmen uns Zeit für eine sorgfältige Anamnese und persönliche Betreuung.',
    en: 'Individual treatment based on the principles of Traditional Chinese Medicine. We take time for a careful medical history and personal care.',
    zh: '遵循传统中医诊疗原则，为您提供个性化的治疗。我们会耐心进行细致的问诊与个人化的照护。',
  },
  rev: { zh: ['lead'] },
  pricesH2: { de: 'Unsere Preise', en: 'Our Treatment Prices', zh: '治疗费用' },
  herbsNote: {
    de: 'Chinesische Arzneimittel und allfällige zusätzliche Leistungen werden, sofern anwendbar, separat ausgewiesen. Bitte Kosten vorab erfragen.',
    en: 'Chinese herbal medicines and any additional services are itemised separately where applicable. Please enquire about costs in advance.',
    zh: '中草药及其他可能产生的额外服务费用将另行单独列明，具体费用请提前咨询。',
  },
  herbsRev: { zh: true },
  insurance: {
    h2: { de: 'Krankenkassen & Kostenübernahme', en: 'Health Insurance & Reimbursement', zh: '医疗保险与费用报销' },
    text: {
      de: 'Ob und in welchem Umfang Ihre Krankenkasse die Kosten für eine TCM-Behandlung übernimmt, hängt von Ihrer Zusatzversicherung, der Behandlungsmethode, der Anerkennung der Therapeutin durch die Versicherung sowie den Regeln und Limiten Ihrer Kasse ab. Bitte klären Sie die Kostenübernahme vor Ihrem Termin direkt mit Ihrer Versicherung.',
      en: 'Whether and to what extent your health insurer covers TCM treatment depends on your supplementary insurance policy, the treatment method, the insurer’s recognition of the practitioner, and the insurer’s own rules and limits. Please confirm coverage with your insurer before your appointment.',
      zh: '您的补充医疗保险是否报销以及报销比例，取决于您的保险方案、治疗项目、保险公司对治疗师的认可程度，以及保险公司的具体条款与限额。就诊前请直接向您的保险公司确认。',
    },
    disclaimer: {
      de: 'Eine Kostenübernahme kann nicht zugesichert werden. Die Entscheidung liegt allein bei Ihrer Krankenkasse und Ihrer persönlichen Police.',
      en: 'Reimbursement cannot be guaranteed. The decision rests solely with your insurer and your individual policy.',
      zh: '我们无法保证费用一定获得报销，报销结果完全取决于您的保险公司及个人保单条款。',
    },
    rev: { zh: ['text', 'disclaimer'] },
  },
  insurersExample: {
    label: {
      de: 'Beispiele von Krankenkassen',
      en: 'Examples of Swiss Health Insurers',
      zh: '瑞士保险公司示例',
    },
    note: {
      de: 'Krankenkassen mit Zusatzversicherungen für Komplementärmedizin. Die Auflistung bedeutet weder eine Anerkennung der Praxis noch eine Kostenübernahme-Zusage — massgeblich ist Ihre persönliche Police.',
      en: 'Insurers offering supplementary plans that may cover complementary medicine. Listing does not imply recognition by the practice or guaranteed reimbursement — your individual policy is decisive.',
      zh: '以下为提供补充医疗保险的瑞士保险公司示例，列名不代表诊所已获得其认可或承诺报销，请以您的个人保单条款为准。',
    },
    badge: {
      de: 'Liste zur Freigabe',
      en: 'List pending approval',
      zh: '名单待确认',
    },
    rev: { zh: ['note'] },
  },
  reimburse: {
    h2: {
      de: 'So funktioniert die Rückerstattung',
      en: 'How Reimbursement Works',
      zh: '报销流程',
    },
    steps: [
      {
        title: { de: 'Vorab prüfen', en: 'Check in advance', zh: '提前确认' },
        desc: {
          de: 'Fragen Sie Ihre Zusatzversicherung nach der Kostenübernahme für die gewünschte TCM-Behandlung bei unserer Praxis.',
          en: 'Ask your supplementary insurer about cost coverage for the desired TCM treatment at our practice.',
          zh: '就诊前请向您的补充保险公司咨询所选中医治疗项目的报销事宜。',
        },
        rev: { zh: true },
      },
      {
        title: { de: 'Behandlung', en: 'Treatment', zh: '就诊治疗' },
        desc: {
          de: 'Sie erhalten eine individuelle Behandlung und, sofern von der Praxis bestätigt, eine Rechnung nach dem Schweizer Tarif 590.',
          en: 'You receive an individual treatment and, once confirmed by the practice, an invoice under Swiss Tariff 590.',
          zh: '您将获得个性化治疗；经诊所确认后，可开具符合瑞士 Tarif 590 标准的账单。',
        },
        badge: { de: 'Tarif 590 zur Freigabe', en: 'Tariff 590 pending', zh: 'Tarif 590 待确认' },
        rev: { zh: true },
      },
      {
        title: { de: 'Einreichen', en: 'Submit', zh: '提交报销' },
        desc: {
          de: 'Reichen Sie den Rückforderungsbeleg bei Ihrer Versicherung ein. Die Erstattung richtet sich nach Ihrer Police.',
          en: 'Submit the claim voucher to your insurance company. Reimbursement depends on your policy.',
          zh: '请将报销凭证提交给您的保险公司，实际报销金额以您的保单为准。',
        },
        rev: { zh: true },
      },
    ],
  },
};
