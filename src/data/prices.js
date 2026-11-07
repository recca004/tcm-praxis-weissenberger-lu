// Pricing & insurance content. All CHF values are draft markers — [CONFIRM] preserved.

export const PRICES_HOME = {
  eyebrow: { de: 'Transparenz & Kosten', en: 'Fair & Transparent', zh: '透明收費' },
  title: {
    de: 'Preise & Krankenkasse',
    en: 'Prices & Supplementary Insurance',
    zh: '收費標準與醫療保險',
  },
  text: {
    de: 'Die Abrechnung erfolgt in der Regel nach dem schweizerischen Tarif 590 für komplementärmedizinische Leistungen.',
    en: 'Treatments are billed according to Swiss Tariff 590 for complementary medicine.',
    zh: '各項中醫診療費用均依據瑞士 Tarif 590 標準計費，明細清晰透明。',
  },
  rev: { zh: ['text'] },
  tableHead: {
    de: ['Leistung', 'Dauer', 'Ansatz (CHF)'],
    en: ['Service', 'Duration', 'Fee (CHF)'],
    zh: ['診療項目', '就診時長', '費用參考 (CHF)'],
  },
  rows: [
    {
      title: { de: 'Erstkonsultation & Behandlung', en: 'Initial Consultation & Treatment', zh: '首次辨證問診與針灸治療' },
      desc: {
        de: 'Ausführliche Anamnese, Zungen-/Pulsdiagnose & Akupunktur',
        en: 'Complete intake, tongue/pulse diagnosis & acupuncture',
        zh: '包含詳盡健康檔案、舌脈診斷及首次治療',
      },
      duration: { de: 'ca. 75–90 Min.', en: 'approx. 75–90 min', zh: '約 75–90 分鐘' },
      price: { de: '[CHF zur Freigabe durch Min]', en: '[CHF awaiting approval · Guideline 150–180]', zh: '[價格待確認 · 參考值 150–180 CHF]' },
      rev: { zh: true },
    },
    {
      title: { de: 'Folgebehandlung TCM', en: 'Follow-up TCM Session', zh: '複診針灸 / 中醫綜合治療' },
      desc: {
        de: 'Akupunktur, Moxibustion oder Schröpfen nach Befund',
        en: 'Acupuncture, moxibustion, or cupping based on progress',
        zh: '根據病情隨訪進展進行針灸、艾灸或拔罐',
      },
      duration: { de: 'ca. 60 Min.', en: 'approx. 60 min', zh: '約 60 分鐘' },
      price: { de: '[CHF zur Freigabe durch Min]', en: '[CHF awaiting approval · Guideline 140–160]', zh: '[價格待確認 · 參考值 140–160 CHF]' },
      rev: { zh: true },
    },
    {
      title: { de: 'Kräuterberatung / Rezeptur', en: 'Herbal Consultation', zh: '中醫辨證與中藥方配製' },
      desc: {
        de: 'Individuelle Rezepturanpassung (exkl. Kräuterkosten der Apotheke)',
        en: 'Custom recipe formulation (herbs billed separately by pharmacy)',
        zh: '定製藥方（中草藥顆粒費用由瑞士藥房另計）',
      },
      duration: { de: 'ca. 30 Min.', en: 'approx. 30 min', zh: '約 30 分鐘' },
      price: { de: '[CHF zur Freigabe durch Min]', en: '[CHF awaiting approval]', zh: '[價格待確認]' },
      rev: { zh: true },
    },
  ],
  insurance: {
    eyebrow: { de: 'Krankenkassen-Deckung', en: 'Swiss Health Insurance', zh: '瑞士醫保報銷說明' },
    title: { de: 'Zusatzversicherung (VVG)', en: 'Supplementary Coverage (VVG)', zh: '補充醫療保險 (VVG)' },
    text: {
      de: 'Die obligatorische Grundversicherung übernimmt komplementärmedizinische Behandlungen von Naturheilpraktikern in der Regel nicht. Viele Schweizer Krankenkassen beteiligen sich jedoch über die freiwillige Zusatzversicherung.',
      en: 'Basic health insurance (KVG) generally does not cover natural healthcare. However, most Swiss supplementary insurance plans (VVG) reimburse a substantial portion of TCM treatments.',
      zh: '瑞士基本醫療保險 (KVG) 通常不涵蓋自然療法，但絕大多數瑞士保險公司的附加險 (VVG) 均可報銷很大比例的中醫治療費用。',
    },
    steps: [
      {
        de: '<strong>Zusatzversicherung prüfen:</strong> Klären Sie vor Behandlungsbeginn bei Ihrer Kasse ab, welcher Kostenanteil für TCM/Akupunktur übernommen wird.',
        en: '<strong>Check your policy:</strong> Inquire with your health insurer beforehand regarding your annual complementary allowance.',
        zh: '<strong>報銷確認：</strong>建議您在就診前向您的保險公司諮詢補充險年度報銷額度與比例。',
      },
      {
        de: '<strong>Tarif 590:</strong> Sie erhalten eine detaillierte Rückforderungsrechnung nach dem standardisierten Tarif 590 zur Einreichung bei Ihrer Krankenkasse.',
        en: '<strong>Tariff 590:</strong> You will receive an official claim form (Tarif 590) to submit directly to your insurance company.',
        zh: '<strong>Tarif 590 報銷單：</strong>診所將出具符合瑞士統一標準的退費收據，便於您直接遞交報銷。',
      },
      {
        de: '<strong>Keine Überweisungs-Pflicht:</strong> Meist ist keine vorgängige ärztliche Überweisung erforderlich (abhängig vom persönlichen Versicherungsmodell).',
        en: '<strong>No GP referral needed:</strong> Most policies allow direct booking without a physician referral.',
        zh: '<strong>無需家庭醫生轉診：</strong>多數附加醫療保險允許患者直接預約，無需額外轉診單。',
      },
    ],
    link: {
      de: 'Alle Details zur Krankenkasse lesen',
      en: 'Read full insurance guide',
      zh: '檢視醫保詳細說明',
    },
  },
};

export const PRICES_PAGE = {
  eyebrow: { de: 'Kostentransparenz', en: 'Financial Clarity', zh: '明細與報銷' },
  title: { de: 'Preise & Krankenkasse', en: 'Prices & Insurance Coverage', zh: '收費標準與瑞士醫保報銷' },
  lead: {
    de: 'Transparente Honorare und Abrechnung komplementärmedizinischer Leistungen nach dem schweizerischen Tarif 590.',
    en: 'Transparent treatment pricing and Swiss Tariff 590 billing guidelines for complementary medicine.',
    zh: '各項中醫診療均採用瑞士統一補充醫學計費體系（Tarif 590）規範核算，賬目透明清晰。',
  },
  rev: { zh: ['lead'] },
  tableHead: {
    de: ['Leistung / Konsultation', 'Dauer', 'Honorar (CHF)', 'Abrechnung'],
    en: ['Service / Consultation', 'Duration', 'Fee (CHF)', 'Billing Standard'],
    zh: ['治療與諮詢項目', '建議時長', '費用參考 (CHF)', '計費規範'],
  },
  rows: [
    {
      title: { de: 'Erstkonsultation inkl. Befunderhebung & Behandlung', en: 'Initial Consultation & Treatment', zh: '初診詳查與首次針灸治療' },
      desc: {
        de: 'Umfassende Anamnese, Zungen- und Pulsdiagnose, Besprechung der Behandlungsstrategie sowie erste Akupunkturbehandlung.',
        en: 'Complete diagnostic interview, tongue and pulse evaluation, and first acupuncture treatment.',
        zh: '全面病史採集、舌苔脈象四診辨證、調理方案擬定及首次針灸治療。',
      },
      duration: { de: 'ca. 75–90 Min.', en: 'approx. 75–90 min', zh: '約 75–90 分鐘' },
      price: { de: '[CHF zur Freigabe durch Min · Richtwert ca. 150–180]', en: '[CHF awaiting client approval · Guideline 150–180]', zh: '[價格待確認 · 參考值 150–180 CHF]' },
      rev: { zh: true },
    },
    {
      title: { de: 'Folgebehandlung Akupunktur / TCM', en: 'Follow-up TCM Session', zh: '中醫複診治療（針灸／艾灸／拔罐）' },
      desc: {
        de: 'Kurzes Verlaufsgespräch, Kontrolle von Zunge und Puls, gezielte Akupunktur, Moxibustion oder Schröpfen je nach individuellem Therapiefortschritt.',
        en: 'Progress review, tongue/pulse check, and targeted acupuncture, moxibustion, or cupping.',
        zh: '脈舌複查、階段調理評估，以及針對當前病機的針灸施術或拔罐艾灸。',
      },
      duration: { de: 'ca. 60 Min.', en: 'approx. 60 min', zh: '約 60 分鐘' },
      price: { de: '[CHF zur Freigabe durch Min · Richtwert ca. 140–160]', en: '[CHF awaiting client approval · Guideline 140–160]', zh: '[價格待確認 · 參考值 140–160 CHF]' },
      rev: { zh: true },
    },
    {
      title: { de: 'Tuina-Massage (Medizinische Massage)', en: 'Medical Tuina Massage', zh: '中醫經絡推拿理療' },
      desc: {
        de: 'Manuelle Meridiantherapie und Mobilisation zur Lösung von Verspannungen und Schmerzzuständen.',
        en: 'Manual meridian bodywork and joint mobilization for pain relief and tension release.',
        zh: '循經揉捏、點穴鬆解與關節活動，舒經活絡，改善慢性勞損與肌筋痠痛。',
      },
      duration: { de: 'ca. 60 Min.', en: 'approx. 60 min', zh: '約 60 分鐘' },
      price: { de: '[CHF zur Freigabe durch Min · Richtwert ca. 140–160]', en: '[CHF awaiting client approval · Guideline 140–160]', zh: '[價格待確認 · 參考值 140–160 CHF]' },
      rev: { zh: true },
    },
    {
      title: { de: 'Kräuterberatung & Rezepturerstellung', en: 'Herbal Prescription Formulation', zh: '中藥處方諮詢與調配' },
      desc: {
        de: 'Individuelle Zusammenstellung traditioneller Rezepturen. Die eigentlichen Kräuter werden von der Partner-Fachapotheke separat verrechnet.',
        en: 'Personalized botanical recipe. (Herbal granulate costs billed directly by the pharmacy.)',
        zh: '辨證擬定中草藥經方。（藥材及顆粒製品由瑞士合作藥房單獨結算出具發票。）',
      },
      duration: { de: 'ca. 30 Min.', en: 'approx. 30 min', zh: '約 30 分鐘' },
      price: { de: '[CHF zur Freigabe durch Min]', en: '[CHF awaiting client approval]', zh: '[價格待確認]' },
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
        zh: '瑞士補充醫療保險 (VVG) 報銷政策',
      },
      textHtml: {
        de: 'In der Schweiz werden Behandlungen der Traditionellen Chinesischen Medizin bei Naturheilpraktikern von der <strong>freiwilligen Zusatzversicherung (VVG)</strong> übernommen.',
        en: 'In Switzerland, basic mandatory health insurance (KVG) does not cover naturopathic practitioners. However, if you hold <strong>supplementary insurance for complementary medicine (VVG)</strong>, the insurer typically covers 70% to 90% of treatment costs.',
        zh: '在瑞士，由自然療法師開展的中醫療法主要通過<strong>商業附加醫療保險（VVG）</strong>進行報銷。通常報銷比例在70%至90%之間。',
      },
      itemsHtml: [
        {
          de: '<strong>Qualitätslabels:</strong> Min Weissenberger-Lu verfügt über die erforderlichen Registrierungen (EMR / ASCA / SBO-TCM) <span class="badge badge-confirm">[CONFIRM]</span>.',
          en: '<strong>Accreditations:</strong> Min Weissenberger-Lu holds the necessary Swiss recognitions (EMR / ASCA / SBO-TCM) <span class="badge badge-confirm">[CONFIRM]</span>.',
          zh: '<strong>執業資質認證：</strong>中醫師 Min Weissenberger-Lu 具備瑞士經驗醫學登記機構（EMR / ASCA / SBO-TCM）的合規註冊資格 <span class="badge badge-confirm">[CONFIRM]</span>。',
        },
        {
          de: '<strong>Abrechnung:</strong> Sie erhalten einen standardisierten Rückforderungsbeleg nach Tarif 590, den Sie einfach bei Ihrer Krankenkasse zur Rückvergütung einreichen.',
          en: '<strong>Reimbursement receipt:</strong> You will receive a standard Tariff 590 invoice with claim voucher to submit to your insurer.',
          zh: '<strong>正規報銷單據：</strong>診所出具標準 Tarif 590 退費證明（Rückforderungsbeleg），您直接拍照或郵寄至保險公司即可。',
        },
      ],
      rev: {},
    },
    {
      icon: 'credit-card',
      title: {
        de: 'Zahlung & Stornierungsregelung',
        en: 'Payment & Cancellation Terms',
        zh: '支付方式與預約守則',
      },
      textHtml: {
        de: 'Transparenz und Verlässlichkeit für beide Seiten:',
        en: 'Simple, transparent administrative processes:',
        zh: '便捷規範的結算與守約機制：',
      },
      itemsHtml: [
        {
          de: '<strong>Zahlungsarten:</strong> Bezahlung per Rechnung, TWINT oder Barzahlung nach Vereinbarung <span class="badge badge-confirm">[CONFIRM]</span>.',
          en: '<strong>Payment methods:</strong> Bank transfer invoice, TWINT, or cash payment upon agreement <span class="badge badge-confirm">[CONFIRM]</span>.',
          zh: '<strong>支付途徑：</strong>支援銀行賬單轉賬、TWINT 快捷支付或現金結算 <span class="badge badge-confirm">[CONFIRM]</span>。',
        },
        {
          de: '<strong>Absagefrist (24 Stunden):</strong> Bitte sagen Sie Termine mindestens 24 Stunden im Voraus ab, damit wir den Zeitraum anderen Patienten zur Verfügung stellen können.',
          en: '<strong>24-hour notice:</strong> Please provide at least 24 hours notice for cancellations to avoid being billed for the reserved slot.',
          zh: '<strong>提前24小時取消制度：</strong>如需改約或取消，請至少提前24小時通知，未按時取消的預約可能產生相應費用。',
        },
      ],
      rev: {},
    },
  ],
};
