// FAQ items — stable IDs across locales; de has an extra "what to bring" item.
export const FAQ_SECTION = {
  eyebrow: { de: 'Wissenswertes', en: 'Common Questions', zh: '常見問題解答' },
  title: { de: 'Häufig gestellte Fragen', en: 'Frequently Asked Questions', zh: '患者常問疑問' },
  lead: {
    de: 'Antworten auf die wichtigsten Fragen vor Ihrer ersten Konsultation.',
    en: 'Helpful answers before scheduling your first session.',
    zh: '就診前的常見疑問與實用建議。',
  },
};

export const FAQ_ITEMS = [
  {
    id: 'first-visit',
    q: {
      de: 'Wie läuft die erste Behandlung genau ab?',
      en: 'What happens during the first consultation?',
      zh: '首次就診具體包括哪些內容？',
    },
    a: {
      de: 'Beim ersten Termin nehmen wir uns ausreichend Zeit (ca. 75–90 Minuten). Wir besprechen Ihre Beschwerden, führen die traditionelle Zungen- und Pulsdiagnose durch und beginnen in derselben Sitzung mit der ersten Behandlung.',
      en: 'We allow 75–90 minutes for the initial visit. We review your medical background, conduct tongue and pulse diagnostics, and perform your first treatment during the same appointment.',
      zh: '首次就診時長約為75至90分鐘，包含詳細的問診與體質辨析、舌苔脈象觀察，並在初診當天進行首次對症治療。',
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
      zh: '針灸會感到疼痛嗎？',
    },
    a: {
      de: 'Akupunkturnadeln sind extrem fein – viel dünner als Injektionsnadeln. Beim Einstich spürt man meist nur einen kurzen Pikser oder ein leichtes Wärme- bzw. Kribbelgefühl (das sogenannte «De-Qi»-Gefühl), das viele Patienten als tief entspannend empfinden.',
      en: 'Acupuncture needles are hair-thin. You may feel a tiny momentary sensation or a subtle warm tingling called "De-Qi", which many patients find deeply relaxing.',
      zh: '針灸針極其纖細。進針時僅有微弱接觸感，隨後常伴隨酸、麻、脹、重的溫和“得氣”感，多數患者在留針期間會進入深度的放鬆與休息狀態。',
    },
    locales: ['de', 'en', 'zh'],
    rev: { zh: true },
  },
  {
    id: 'insurance',
    q: {
      de: 'Übernimmt meine Krankenkasse die Kosten?',
      en: 'Will my health insurance reimburse the visit?',
      zh: '瑞士醫療保險如何報銷？',
    },
    a: {
      de: 'Bei vorhandener Zusatzversicherung für Komplementärmedizin (VVG) übernehmen die meisten Schweizer Kassen einen grossen Teil der Kosten. Wir empfehlen, die genaue Kostenübernahme vorab direkt mit Ihrer Versicherung zu klären.',
      en: 'With Swiss supplementary health insurance (VVG), most insurers cover 70–90% of the cost. We recommend contacting your insurer prior to your visit to confirm exact coverage.',
      zh: '若您購買了涵蓋替代醫療的補充險（VVG），保險公司通常報銷70%至90%的費用。診所會為您出具瑞士統一規範的 Tarif 590 賬單供您報銷。',
    },
    locales: ['de', 'en', 'zh'],
  },
  {
    id: 'cancellation',
    q: {
      de: 'Wie lauten die Stornierungsbedingungen?',
      en: 'What is the cancellation policy?',
      zh: '如需更改或取消預約該如何操作？',
    },
    a: {
      de: 'Falls Sie einen vereinbarten Termin nicht wahrnehmen können, bitten wir Sie, sich mindestens 24 Stunden vorher abzumelden. Bei kurzfristiger Absage müssen wir den Termin leider in Rechnung stellen.',
      en: 'Please notify us at least 24 hours in advance if you cannot attend your appointment so that the time slot can be offered to another patient.',
      zh: '如遇特殊情況無法按時就診，請至少提前24小時通知診所，以便將時間段安排給其他急需調理的患者。',
    },
    locales: ['de', 'en', 'zh'],
  },
  {
    id: 'location',
    q: {
      de: 'Wie finde ich zur Praxis in Zürich-Seebach?',
      en: 'How do I reach the practice in Zurich-Seebach?',
      zh: '診所具體位置在哪裡？交通方便嗎？',
    },
    a: {
      de: 'Die Praxis befindet sich an der Schaffhauserstrasse 466 in 8052 Zürich. Sie erreichen uns bequem mit dem Tram 14 (Haltestelle Seebacherplatz oder Felsenrainstrasse) oder mit dem Bus 768 ab Bahnhof Oerlikon. Parkmöglichkeiten finden sich in der blauen Zone im Quartier.',
      en: 'The clinic is located at Schaffhauserstrasse 466 in 8052 Zurich. Accessible by Tram 14 (Seebacherplatz or Felsenrainstrasse) or Bus 768 from Oerlikon station. Blue zone public parking is available nearby.',
      zh: '診所位於蘇黎世北部 Seebach（Schaffhauserstrasse 466）。乘坐14路有軌電車在 Seebacherplatz 或 Felsenrainstrasse 站下車步行2分鐘即達，亦可從 Oerlikon 火車站乘坐768路公交車直達。',
    },
    locales: ['de', 'en', 'zh'],
  },
];
