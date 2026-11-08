// FAQ items — stable IDs across locales; de has an extra "what to bring" item.
export const FAQ_SECTION = {
  eyebrow: { de: 'Wissenswertes', en: 'Common Questions', zh: '常见问题解答' },
  title: { de: 'Häufig gestellte Fragen', en: 'Frequently Asked Questions', zh: '患者常问疑问' },
  lead: {
    de: 'Antworten auf die wichtigsten Fragen vor Ihrer ersten Konsultation.',
    en: 'Helpful answers before scheduling your first session.',
    zh: '就诊前的常见疑问与实用建议。',
  },
};

export const FAQ_ITEMS = [
  {
    id: 'first-visit',
    q: {
      de: 'Wie läuft die erste Behandlung genau ab?',
      en: 'What happens during the first consultation?',
      zh: '首次就诊具体包括哪些内容？',
    },
    a: {
      de: 'Beim ersten Termin nehmen wir uns ausreichend Zeit (ca. 75–90 Minuten). Wir besprechen Ihre Beschwerden, führen die traditionelle Zungen- und Pulsdiagnose durch und beginnen in derselben Sitzung mit der ersten Behandlung.',
      en: 'We allow 75–90 minutes for the initial visit. We review your medical background, conduct tongue and pulse diagnostics, and perform your first treatment during the same appointment.',
      zh: '首次就诊时长约为75至90分钟，包含详细的问诊与体质辨析、舌苔脉象观察，并在初诊当天进行首次对症治疗。',
    },
    locales: ['de', 'en', 'zh'],
  },
  {
    id: 'what-to-bring',
    q: { de: 'Was soll ich zum ersten Termin mitbringen?' },
    a: {
      de: 'Bringen Sie bitte Ihre Krankenkassenkarte sowie eventuell vorhandene aktuelle ärztliche Befunde oder Medikamentenlisten mit. Tragen Sie bequeme, lockere Kleidung, die sich leicht bis zu den Knien und Ellbogen hochschieben lässt.',
    },
    locales: ['de'],
  },
  {
    id: 'pain',
    q: {
      de: 'Tut Akupunktur weh?',
      en: 'Does acupuncture hurt?',
      zh: '针灸会感到疼痛吗？',
    },
    a: {
      de: 'Akupunkturnadeln sind extrem fein – viel dünner als Injektionsnadeln. Beim Einstich spürt man meist nur einen kurzen Pikser oder ein leichtes Wärme- bzw. Kribbelgefühl (das sogenannte «De-Qi»-Gefühl), das viele Patienten als tief entspannend empfinden.',
      en: 'Acupuncture needles are hair-thin. You may feel a tiny momentary sensation or a subtle warm tingling called "De-Qi", which many patients find deeply relaxing.',
      zh: '针灸针极其纤细。进针时仅有微弱接触感，随后常伴随酸、麻、胀、重的温和“得气”感，多数患者在留针期间会进入深度的放松与休息状态。',
    },
    locales: ['de', 'en', 'zh'],
    rev: { zh: true },
  },
  {
    id: 'insurance',
    q: {
      de: 'Übernimmt meine Krankenkasse die Kosten?',
      en: 'Will my health insurance reimburse the visit?',
      zh: '瑞士医疗保险如何报销？',
    },
    a: {
      de: 'Bei vorhandener Zusatzversicherung für Komplementärmedizin (VVG) übernehmen die meisten Schweizer Kassen einen grossen Teil der Kosten. Wir empfehlen, die genaue Kostenübernahme vorab direkt mit Ihrer Versicherung zu klären.',
      en: 'With Swiss supplementary health insurance (VVG), most insurers cover 70–90% of the cost. We recommend contacting your insurer prior to your visit to confirm exact coverage.',
      zh: '若您购买了涵盖替代医疗的补充险（VVG），保险公司通常报销70%至90%的费用。诊所会为您出具瑞士统一规范的 Tarif 590 账单供您报销。',
    },
    locales: ['de', 'en', 'zh'],
  },
  {
    id: 'cancellation',
    q: {
      de: 'Wie lauten die Stornierungsbedingungen?',
      en: 'What is the cancellation policy?',
      zh: '如需更改或取消预约该如何操作？',
    },
    a: {
      de: 'Falls Sie einen vereinbarten Termin nicht wahrnehmen können, bitten wir Sie, sich mindestens 24 Stunden vorher abzumelden. Bei kurzfristiger Absage müssen wir den Termin leider in Rechnung stellen.',
      en: 'Please notify us at least 24 hours in advance if you cannot attend your appointment so that the time slot can be offered to another patient.',
      zh: '如遇特殊情况无法按时就诊，请至少提前24小时通知诊所，以便将时间段安排给其他急需调理的患者。',
    },
    locales: ['de', 'en', 'zh'],
  },
  {
    id: 'location',
    q: {
      de: 'Wie finde ich zur Praxis in Zürich-Seebach?',
      en: 'How do I reach the practice in Zurich-Seebach?',
      zh: '诊所具体位置在哪里？交通方便吗？',
    },
    a: {
      de: 'Die Praxis befindet sich an der Schaffhauserstrasse 466 in 8052 Zürich. Sie erreichen uns bequem mit dem Tram 14 (Haltestelle Seebacherplatz oder Felsenrainstrasse) oder mit dem Bus 768 ab Bahnhof Oerlikon. Parkmöglichkeiten finden sich in der blauen Zone im Quartier.',
      en: 'The clinic is located at Schaffhauserstrasse 466 in 8052 Zurich. Accessible by Tram 14 (Seebacherplatz or Felsenrainstrasse) or Bus 768 from Oerlikon station. Blue zone public parking is available nearby.',
      zh: '诊所位于苏黎世北部 Seebach（Schaffhauserstrasse 466）。乘坐14路有轨电车在 Seebacherplatz 或 Felsenrainstrasse 站下车步行2分钟即达，亦可从 Oerlikon 火车站乘坐768路公交车直达。',
    },
    locales: ['de', 'en', 'zh'],
  },
];
