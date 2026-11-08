// First-visit content: home preview steps + full first-visit page.

export const FIRST_VISIT_HOME = {
  eyebrow: { de: 'Ablauf & Orientierung', en: 'New Patients', zh: '初次就诊' },
  title: {
    de: 'Ihr erster Termin bei uns',
    en: 'Your First Visit: What to Expect',
    zh: '首次就诊三部曲',
  },
  lead: {
    de: 'Wir legen grossen Wert auf eine ruhige, vertrauensvolle Atmosphäre ohne Hektik. So verläuft Ihr erster Besuch:',
    en: 'A calm, unhurried process designed to provide clarity and personalized care from day one.',
    zh: '流程简明清晰，环境安静私密，让您安心开启健康调理。',
  },
  steps: [
    {
      title: { de: 'Termin vereinbaren', en: 'Book an Appointment', zh: '预约就诊时间' },
      desc: {
        de: 'Wählen Sie online oder telefonisch einen passenden Wunschtermin. Sie erhalten zeitnah eine Bestätigung mit allen wichtigen Hinweisen zur Anreise.',
        en: 'Select a convenient date and time online or by phone. You will receive prompt confirmation with arrival directions.',
        zh: '线上或通过电话选择适合您的时间。您将及时收到就诊确认及前往诊所的详细路线指南。',
      },
      rev: {},
    },
    {
      title: { de: 'Ausführliche Erstkonsultation', en: 'Initial Consultation', zh: '全面初诊辨证' },
      desc: {
        de: 'Wir besprechen Ihre gesundheitliche Vorgeschichte, aktuelle Beschwerden sowie Lebensgewohnheiten. Ergänzt wird das Gespräch durch die traditionelle Zungen- und Pulsdiagnose.',
        en: 'We discuss your medical history, current symptoms, and lifestyle. This includes traditional tongue and pulse assessment.',
        zh: '详细了解您的健康背景、主要不适与生活规律，并进行专业的中医舌象观察与双手寸口脉诊。',
      },
      rev: { zh: true },
    },
    {
      title: { de: 'Erste Behandlung & Folgeschritte', en: 'First Treatment & Plan', zh: '首次治疗与方案' },
      desc: {
        de: 'Direkt im Anschluss erfolgt die erste gezielte Behandlung (z.B. Akupunktur). Gemeinsam besprechen wir den vorgeschlagenen Behandlungsverlauf und das weitere Vorgehen.',
        en: 'Your first targeted treatment (e.g. gentle acupuncture) takes place during this initial visit, followed by discussing the next steps.',
        zh: '首次就诊即包含针对性的中医疗法（如温和针灸），并为您制定后续的随访安排与注意事项。',
      },
      rev: { zh: true },
    },
  ],
  link: {
    de: 'Detaillierte Informationen zum Erstbesuch lesen',
    en: 'Detailed guide for your first appointment',
    zh: '检视初次就诊准备详情',
  },
};

export const FIRST_VISIT_PAGE = {
  eyebrow: { de: 'Erstkonsultation', en: 'First Appointment', zh: '初诊指南' },
  title: {
    de: 'Ihr erster Besuch in der Praxis',
    en: 'Your First Visit: What to Expect',
    zh: '首次中医就诊流程与准备',
  },
  lead: {
    de: 'Hier erfahren Sie Schritt für Schritt, was Sie beim ersten Termin erwartet und wie Sie sich optimal vorbereiten können.',
    en: 'Step-by-step guidance to ensure your first TCM consultation is comfortable, clear, and reassuring.',
    zh: '了解完整的初诊步骤与行前准备，让您的首次中医诊疗更加从容、舒心。',
  },
  rev: { zh: ['lead'] },
  steps: [
    {
      title: { de: '1. Vorbereitung & Ankunft', en: '1. Scheduling & Arrival', zh: '1. 预约与行前准备' },
      desc: {
        de: 'Kommen Sie bitte einige Minuten vor Ihrem Termin an. Tragen Sie lockere, bequeme Kleidung, bei der sich Ärmel und Hosenbeine leicht hochrollen lassen.',
        en: 'Book your appointment online or by phone. Please arrive about 5–10 minutes early so you can settle in comfortably.',
        zh: '线上或电话预约适合的时间。建议就诊当天著宽松衣物，并提前5至10分钟到达诊所静心候诊。',
      },
      rev: {},
    },
    {
      title: { de: '2. Anamnese & TCM-Diagnose', en: '2. Medical Intake & Assessment', zh: '2. 四诊辨析与沟通' },
      desc: {
        de: 'In einem ausführlichen Gespräch (ca. 30–45 Minuten) beleuchten wir Ihre Vorgeschichte, Beschwerden und Gewohnheiten. Ergänzt durch Zungen- und Pulsdiagnose.',
        en: 'We spend 30–45 minutes exploring your health history, current complaints, and lifestyle. This includes tongue and pulse diagnostics.',
        zh: '与医师进行约30至45分钟的深入问诊，包括既往病史、作息、生活习惯，并进行舌苔望诊与双手脉象切按。',
      },
      rev: {},
    },
    {
      title: { de: '3. Erste Behandlung & Besprechung', en: '3. Treatment & Planning', zh: '3. 首次治疗与调养建议' },
      desc: {
        de: 'Anschliessend folgt Ihre erste Behandlung (z.B. sanfte Akupunktur). Wir besprechen gemeinsam das empfohlene Vorgehen und beantworten all Ihre Fragen.',
        en: 'You receive your first targeted therapy (such as gentle acupuncture) and discuss the proposed follow-up schedule and recommendations.',
        zh: '初诊当日即进行首次对症治疗（如温和针灸），并为您说明后续调理周期安排与日常注意事项。',
      },
      rev: { zh: true },
    },
  ],
  boxes: [
    {
      icon: 'clipboard-list',
      title: { de: 'Was Sie mitbringen sollten', en: 'What to Bring With You', zh: '就诊时请携带' },
      items: [
        {
          de: '<strong>Krankenkassenkarte:</strong> Für Ihre administrativen Patientendaten.',
          en: '<strong>Health insurance card:</strong> Required for administrative patient onboarding.',
          zh: '<strong>瑞士医疗保险卡：</strong>便于登记您的基本医保资讯。',
        },
        {
          de: '<strong>Aktuelle Befunde / Medikamente:</strong> Falls vorhanden, bringen Sie ärztliche Berichte oder eine Medikamentenliste mit.',
          en: '<strong>Recent medical reports:</strong> If relevant, bring medication lists, lab results, or imaging summaries.',
          zh: '<strong>近期医疗检查报告：</strong>如有既往化验单、影像资料或正在服用的西药清单，欢迎一并携带参考。',
        },
        {
          de: '<strong>Bequeme Kleidung:</strong> Lockere Hosen und Oberteile erleichtern das Freimachen der Akupunkturpunkte an Beinen und Armen.',
          en: '<strong>Comfortable clothing:</strong> Loose pants and tops allow easy access to acupuncture points on arms and legs.',
          zh: '<strong>宽松舒适衣物：</strong>建议著便于卷起袖口与裤腿的衣服，以便暴露肘膝以下的针灸穴位。',
        },
      ],
      rev: {},
    },
    {
      icon: 'info',
      title: { de: 'Wichtige Hinweise vor dem Termin', en: 'Helpful Tips Before Your Visit', zh: '行前特别注意事项' },
      items: [
        {
          de: '<strong>Leichte Mahlzeit:</strong> Kommen Sie weder mit völlig leerem Magen noch unmittelbar nach einem sehr üppigen Essen.',
          en: '<strong>Have a light meal:</strong> Do not arrive on an entirely empty stomach or immediately after a heavy banquet.',
          zh: '<strong>适量进餐：</strong>切勿空腹施针，亦避免就诊前暴饮暴食。',
        },
        {
          de: '<strong>Zungenbelag nicht bürsten:</strong> Bitte reinigen Sie vor dem Termin die Zunge nicht extra und vermeiden Sie färbende Bonbons oder Kaffee kurz davor, um das Zungenbild nicht zu verfälschen.',
          en: '<strong>Avoid brushing the tongue:</strong> Please refrain from scraping your tongue coating or drinking coffee right before the appointment, as this alters the diagnostic tongue picture.',
          zh: '<strong>保持舌苔自然：</strong>就诊前请勿刮刷舌苔，且避免饮用咖啡、浓茶或食用容易给舌面染色的糖果食品。',
        },
        {
          de: '<strong>Stornierung (24h):</strong> Sollte Ihnen etwas dazwischenkommen, bitten wir um eine Absage mindestens 24 Stunden im Voraus.',
          en: '<strong>24-hour cancellation rule:</strong> Please give at least 24 hours notice if you need to reschedule.',
          zh: '<strong>提前24小时改约：</strong>若临时行程有变，请至少提前24小时通知诊所，感谢您的理解与配合。',
        },
      ],
      rev: {},
    },
  ],
};
