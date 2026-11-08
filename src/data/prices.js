// Pricing & insurance content. All CHF values are draft markers — [CONFIRM] preserved.

export const PRICES_HOME = {
  eyebrow: { de: 'Transparenz & Kosten', en: 'Fair & Transparent', zh: '透明收费' },
  title: {
    de: 'Preise & Krankenkasse',
    en: 'Prices & Supplementary Insurance',
    zh: '收费标准与医疗保险',
  },
  text: {
    de: 'Die Abrechnung erfolgt in der Regel nach dem schweizerischen Tarif 590 für komplementärmedizinische Leistungen.',
    en: 'Treatments are billed according to Swiss Tariff 590 for complementary medicine.',
    zh: '各项中医诊疗费用均依据瑞士 Tarif 590 标准计费，明细清晰透明。',
  },
  rev: { zh: ['text'] },
  tableHead: {
    de: ['Leistung', 'Dauer', 'Ansatz (CHF)'],
    en: ['Service', 'Duration', 'Fee (CHF)'],
    zh: ['诊疗项目', '就诊时长', '费用参考 (CHF)'],
  },
  rows: [
    {
      title: { de: 'Erstkonsultation & Behandlung', en: 'Initial Consultation & Treatment', zh: '首次辨证问诊与针灸治疗' },
      desc: {
        de: 'Ausführliche Anamnese, Zungen-/Pulsdiagnose & Akupunktur',
        en: 'Complete intake, tongue/pulse diagnosis & acupuncture',
        zh: '包含详尽健康档案、舌脉诊断及首次治疗',
      },
      duration: { de: 'ca. 75–90 Min.', en: 'approx. 75–90 min', zh: '约 75–90 分钟' },
      price: { de: '[CHF zur Freigabe durch Min]', en: '[CHF awaiting approval · Guideline 150–180]', zh: '[价格待确认 · 参考值 150–180 CHF]' },
      rev: { zh: true },
    },
    {
      title: { de: 'Folgebehandlung TCM', en: 'Follow-up TCM Session', zh: '复诊针灸 / 中医综合治疗' },
      desc: {
        de: 'Akupunktur, Moxibustion oder Schröpfen nach Befund',
        en: 'Acupuncture, moxibustion, or cupping based on progress',
        zh: '根据病情随访进展进行针灸、艾灸或拔罐',
      },
      duration: { de: 'ca. 60 Min.', en: 'approx. 60 min', zh: '约 60 分钟' },
      price: { de: '[CHF zur Freigabe durch Min]', en: '[CHF awaiting approval · Guideline 140–160]', zh: '[价格待确认 · 参考值 140–160 CHF]' },
      rev: { zh: true },
    },
    {
      title: { de: 'Kräuterberatung / Rezeptur', en: 'Herbal Consultation', zh: '中医辨证与中药方配制' },
      desc: {
        de: 'Individuelle Rezepturanpassung (exkl. Kräuterkosten der Apotheke)',
        en: 'Custom recipe formulation (herbs billed separately by pharmacy)',
        zh: '定制药方（中草药颗粒费用由瑞士药房另计）',
      },
      duration: { de: 'ca. 30 Min.', en: 'approx. 30 min', zh: '约 30 分钟' },
      price: { de: '[CHF zur Freigabe durch Min]', en: '[CHF awaiting approval]', zh: '[价格待确认]' },
      rev: { zh: true },
    },
  ],
  insurance: {
    eyebrow: { de: 'Krankenkassen-Deckung', en: 'Swiss Health Insurance', zh: '瑞士医保报销说明' },
    title: { de: 'Zusatzversicherung (VVG)', en: 'Supplementary Coverage (VVG)', zh: '补充医疗保险 (VVG)' },
    text: {
      de: 'Die obligatorische Grundversicherung übernimmt komplementärmedizinische Behandlungen von Naturheilpraktikern in der Regel nicht. Viele Schweizer Krankenkassen beteiligen sich jedoch über die freiwillige Zusatzversicherung.',
      en: 'Basic health insurance (KVG) generally does not cover natural healthcare. However, most Swiss supplementary insurance plans (VVG) reimburse a substantial portion of TCM treatments.',
      zh: '瑞士基本医疗保险 (KVG) 通常不涵盖自然疗法，但绝大多数瑞士保险公司的附加险 (VVG) 均可报销很大比例的中医治疗费用。',
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
  eyebrow: { de: 'Kostentransparenz', en: 'Financial Clarity', zh: '明细与报销' },
  title: { de: 'Preise & Krankenkasse', en: 'Prices & Insurance Coverage', zh: '收费标准与瑞士医保报销' },
  lead: {
    de: 'Transparente Honorare und Abrechnung komplementärmedizinischer Leistungen nach dem schweizerischen Tarif 590.',
    en: 'Transparent treatment pricing and Swiss Tariff 590 billing guidelines for complementary medicine.',
    zh: '各项中医诊疗均采用瑞士统一补充医学计费体系（Tarif 590）规范核算，账目透明清晰。',
  },
  rev: { zh: ['lead'] },
  tableHead: {
    de: ['Leistung / Konsultation', 'Dauer', 'Honorar (CHF)', 'Abrechnung'],
    en: ['Service / Consultation', 'Duration', 'Fee (CHF)', 'Billing Standard'],
    zh: ['治疗与咨询项目', '建议时长', '费用参考 (CHF)', '计费规范'],
  },
  rows: [
    {
      title: { de: 'Erstkonsultation inkl. Befunderhebung & Behandlung', en: 'Initial Consultation & Treatment', zh: '初诊详查与首次针灸治疗' },
      desc: {
        de: 'Umfassende Anamnese, Zungen- und Pulsdiagnose, Besprechung der Behandlungsstrategie sowie erste Akupunkturbehandlung.',
        en: 'Complete diagnostic interview, tongue and pulse evaluation, and first acupuncture treatment.',
        zh: '全面病史采集、舌苔脉象四诊辨证、调理方案拟定及首次针灸治疗。',
      },
      duration: { de: 'ca. 75–90 Min.', en: 'approx. 75–90 min', zh: '约 75–90 分钟' },
      price: { de: '[CHF zur Freigabe durch Min · Richtwert ca. 150–180]', en: '[CHF awaiting client approval · Guideline 150–180]', zh: '[价格待确认 · 参考值 150–180 CHF]' },
      rev: { zh: true },
    },
    {
      title: { de: 'Folgebehandlung Akupunktur / TCM', en: 'Follow-up TCM Session', zh: '中医复诊治疗（针灸／艾灸／拔罐）' },
      desc: {
        de: 'Kurzes Verlaufsgespräch, Kontrolle von Zunge und Puls, gezielte Akupunktur, Moxibustion oder Schröpfen je nach individuellem Therapiefortschritt.',
        en: 'Progress review, tongue/pulse check, and targeted acupuncture, moxibustion, or cupping.',
        zh: '脉舌复查、阶段调理评估，以及针对当前病机的针灸施术或拔罐艾灸。',
      },
      duration: { de: 'ca. 60 Min.', en: 'approx. 60 min', zh: '约 60 分钟' },
      price: { de: '[CHF zur Freigabe durch Min · Richtwert ca. 140–160]', en: '[CHF awaiting client approval · Guideline 140–160]', zh: '[价格待确认 · 参考值 140–160 CHF]' },
      rev: { zh: true },
    },
    {
      title: { de: 'Tuina-Massage (Medizinische Massage)', en: 'Medical Tuina Massage', zh: '中医经络推拿理疗' },
      desc: {
        de: 'Manuelle Meridiantherapie und Mobilisation zur Lösung von Verspannungen und Schmerzzuständen.',
        en: 'Manual meridian bodywork and joint mobilization for pain relief and tension release.',
        zh: '循经揉捏、点穴松解与关节活动，舒经活络，改善慢性劳损与肌筋酸痛。',
      },
      duration: { de: 'ca. 60 Min.', en: 'approx. 60 min', zh: '约 60 分钟' },
      price: { de: '[CHF zur Freigabe durch Min · Richtwert ca. 140–160]', en: '[CHF awaiting client approval · Guideline 140–160]', zh: '[价格待确认 · 参考值 140–160 CHF]' },
      rev: { zh: true },
    },
    {
      title: { de: 'Kräuterberatung & Rezepturerstellung', en: 'Herbal Prescription Formulation', zh: '中药处方咨询与调配' },
      desc: {
        de: 'Individuelle Zusammenstellung traditioneller Rezepturen. Die eigentlichen Kräuter werden von der Partner-Fachapotheke separat verrechnet.',
        en: 'Personalized botanical recipe. (Herbal granulate costs billed directly by the pharmacy.)',
        zh: '辨证拟定中草药经方。（药材及颗粒制品由瑞士合作药房单独结算出具发票。）',
      },
      duration: { de: 'ca. 30 Min.', en: 'approx. 30 min', zh: '约 30 分钟' },
      price: { de: '[CHF zur Freigabe durch Min]', en: '[CHF awaiting client approval]', zh: '[价格待确认]' },
      rev: { zh: true },
    },
  ],
  billingBadge: 'Tarif 590',
  cards: [
    {
      icon: 'shield-check',
      title: {
        de: 'Kostenübernahme durch die Krankenkasse',
        en: 'Swiss Supplementary Health Insurance (VVG)',
        zh: '瑞士补充医疗保险 (VVG) 报销政策',
      },
      textHtml: {
        de: 'In der Schweiz werden Behandlungen der Traditionellen Chinesischen Medizin bei Naturheilpraktikern von der <strong>freiwilligen Zusatzversicherung (VVG)</strong> übernommen.',
        en: 'In Switzerland, basic mandatory health insurance (KVG) does not cover naturopathic practitioners. However, if you hold <strong>supplementary insurance for complementary medicine (VVG)</strong>, the insurer typically covers 70% to 90% of treatment costs.',
        zh: '在瑞士，由自然疗法师开展的中医疗法主要通过<strong>商业附加医疗保险（VVG）</strong>进行报销。通常报销比例在70%至90%之间。',
      },
      itemsHtml: [
        {
          de: '<strong>Qualitätslabels:</strong> Min Weissenberger-Lu verfügt über die erforderlichen Registrierungen (EMR / ASCA / SBO-TCM) <span class="badge badge-confirm">[CONFIRM]</span>.',
          en: '<strong>Accreditations:</strong> Min Weissenberger-Lu holds the necessary Swiss recognitions (EMR / ASCA / SBO-TCM) <span class="badge badge-confirm">[CONFIRM]</span>.',
          zh: '<strong>执业资质认证：</strong>中医师 Min Weissenberger-Lu 具备瑞士经验医学登记机构（EMR / ASCA / SBO-TCM）的合规注册资格 <span class="badge badge-confirm">[CONFIRM]</span>。',
        },
        {
          de: '<strong>Abrechnung:</strong> Sie erhalten einen standardisierten Rückforderungsbeleg nach Tarif 590, den Sie einfach bei Ihrer Krankenkasse zur Rückvergütung einreichen.',
          en: '<strong>Reimbursement receipt:</strong> You will receive a standard Tariff 590 invoice with claim voucher to submit to your insurer.',
          zh: '<strong>正规报销单据：</strong>诊所出具标准 Tarif 590 退费证明（Rückforderungsbeleg），您直接拍照或邮寄至保险公司即可。',
        },
      ],
      rev: {},
    },
    {
      icon: 'credit-card',
      title: {
        de: 'Zahlung & Stornierungsregelung',
        en: 'Payment & Cancellation Terms',
        zh: '支付方式与预约守则',
      },
      textHtml: {
        de: 'Transparenz und Verlässlichkeit für beide Seiten:',
        en: 'Simple, transparent administrative processes:',
        zh: '便捷规范的结算与守约机制：',
      },
      itemsHtml: [
        {
          de: '<strong>Zahlungsarten:</strong> Bezahlung per Rechnung, TWINT oder Barzahlung nach Vereinbarung <span class="badge badge-confirm">[CONFIRM]</span>.',
          en: '<strong>Payment methods:</strong> Bank transfer invoice, TWINT, or cash payment upon agreement <span class="badge badge-confirm">[CONFIRM]</span>.',
          zh: '<strong>支付途径：</strong>支援银行账单转账、TWINT 快捷支付或现金结算 <span class="badge badge-confirm">[CONFIRM]</span>。',
        },
        {
          de: '<strong>Absagefrist (24 Stunden):</strong> Bitte sagen Sie Termine mindestens 24 Stunden im Voraus ab, damit wir den Zeitraum anderen Patienten zur Verfügung stellen können.',
          en: '<strong>24-hour notice:</strong> Please provide at least 24 hours notice for cancellations to avoid being billed for the reserved slot.',
          zh: '<strong>提前24小时取消制度：</strong>如需改约或取消，请至少提前24小时通知，未按时取消的预约可能产生相应费用。',
        },
      ],
      rev: {},
    },
  ],
};
