// First-visit content: home preview steps + full first-visit page.

export const FIRST_VISIT_HOME = {
  eyebrow: { de: 'Ablauf & Orientierung', en: 'New Patients', zh: '初次就診' },
  title: {
    de: 'Ihr erster Termin bei uns',
    en: 'Your First Visit: What to Expect',
    zh: '首次就診三部曲',
  },
  lead: {
    de: 'Wir legen grossen Wert auf eine ruhige, vertrauensvolle Atmosphäre ohne Hektik. So verläuft Ihr erster Besuch:',
    en: 'A calm, unhurried process designed to provide clarity and personalized care from day one.',
    zh: '流程簡明清晰，環境安靜私密，讓您安心開啟健康調理。',
  },
  steps: [
    {
      title: { de: 'Termin vereinbaren', en: 'Book an Appointment', zh: '預約就診時間' },
      desc: {
        de: 'Wählen Sie online oder telefonisch einen passenden Wunschtermin. Sie erhalten zeitnah eine Bestätigung mit allen wichtigen Hinweisen zur Anreise.',
        en: 'Select a convenient date and time online or by phone. You will receive prompt confirmation with arrival directions.',
        zh: '線上或通過電話選擇適合您的時間。您將及時收到就診確認及前往診所的詳細路線指南。',
      },
      rev: {},
    },
    {
      title: { de: 'Ausführliche Erstkonsultation', en: 'Initial Consultation', zh: '全面初診辨證' },
      desc: {
        de: 'Wir besprechen Ihre gesundheitliche Vorgeschichte, aktuelle Beschwerden sowie Lebensgewohnheiten. Ergänzt wird das Gespräch durch die traditionelle Zungen- und Pulsdiagnose.',
        en: 'We discuss your medical history, current symptoms, and lifestyle. This includes traditional tongue and pulse assessment.',
        zh: '詳細瞭解您的健康背景、主要不適與生活規律，並進行專業的中醫舌象觀察與雙手寸口脈診。',
      },
      rev: { zh: true },
    },
    {
      title: { de: 'Erste Behandlung & Folgeschritte', en: 'First Treatment & Plan', zh: '首次治療與方案' },
      desc: {
        de: 'Direkt im Anschluss erfolgt die erste gezielte Behandlung (z.B. Akupunktur). Gemeinsam besprechen wir den vorgeschlagenen Behandlungsverlauf und das weitere Vorgehen.',
        en: 'Your first targeted treatment (e.g. gentle acupuncture) takes place during this initial visit, followed by discussing the next steps.',
        zh: '首次就診即包含針對性的中醫療法（如溫和針灸），併為您制定後續的隨訪安排與注意事項。',
      },
      rev: { zh: true },
    },
  ],
  link: {
    de: 'Detaillierte Informationen zum Erstbesuch lesen',
    en: 'Detailed guide for your first appointment',
    zh: '檢視初次就診準備詳情',
  },
};

export const FIRST_VISIT_PAGE = {
  eyebrow: { de: 'Erstkonsultation', en: 'First Appointment', zh: '初診指南' },
  title: {
    de: 'Ihr erster Besuch in der Praxis',
    en: 'Your First Visit: What to Expect',
    zh: '首次中醫就診流程與準備',
  },
  lead: {
    de: 'Hier erfahren Sie Schritt für Schritt, was Sie beim ersten Termin erwartet und wie Sie sich optimal vorbereiten können.',
    en: 'Step-by-step guidance to ensure your first TCM consultation is comfortable, clear, and reassuring.',
    zh: '瞭解完整的初診步驟與行前準備，讓您的首次中醫診療更加從容、舒心。',
  },
  rev: { zh: ['lead'] },
  steps: [
    {
      title: { de: '1. Vorbereitung & Ankunft', en: '1. Scheduling & Arrival', zh: '1. 預約與行前準備' },
      desc: {
        de: 'Kommen Sie bitte einige Minuten vor Ihrem Termin an. Tragen Sie lockere, bequeme Kleidung, bei der sich Ärmel und Hosenbeine leicht hochrollen lassen.',
        en: 'Book your appointment online or by phone. Please arrive about 5–10 minutes early so you can settle in comfortably.',
        zh: '線上或電話預約適合的時間。建議就診當天著寬鬆衣物，並提前5至10分鐘到達診所靜心候診。',
      },
      rev: {},
    },
    {
      title: { de: '2. Anamnese & TCM-Diagnose', en: '2. Medical Intake & Assessment', zh: '2. 四診辨析與溝通' },
      desc: {
        de: 'In einem ausführlichen Gespräch (ca. 30–45 Minuten) beleuchten wir Ihre Vorgeschichte, Beschwerden und Gewohnheiten. Ergänzt durch Zungen- und Pulsdiagnose.',
        en: 'We spend 30–45 minutes exploring your health history, current complaints, and lifestyle. This includes tongue and pulse diagnostics.',
        zh: '與醫師進行約30至45分鐘的深入問診，包括既往病史、作息、生活習慣，並進行舌苔望診與雙手脈象切按。',
      },
      rev: {},
    },
    {
      title: { de: '3. Erste Behandlung & Besprechung', en: '3. Treatment & Planning', zh: '3. 首次治療與調養建議' },
      desc: {
        de: 'Anschliessend folgt Ihre erste Behandlung (z.B. sanfte Akupunktur). Wir besprechen gemeinsam das empfohlene Vorgehen und beantworten all Ihre Fragen.',
        en: 'You receive your first targeted therapy (such as gentle acupuncture) and discuss the proposed follow-up schedule and recommendations.',
        zh: '初診當日即進行首次對症治療（如溫和針灸），併為您說明後續調理週期安排與日常注意事項。',
      },
      rev: { zh: true },
    },
  ],
  boxes: [
    {
      icon: 'clipboard-list',
      title: { de: 'Was Sie mitbringen sollten', en: 'What to Bring With You', zh: '就診時請攜帶' },
      items: [
        {
          de: '<strong>Krankenkassenkarte:</strong> Für Ihre administrativen Patientendaten.',
          en: '<strong>Health insurance card:</strong> Required for administrative patient onboarding.',
          zh: '<strong>瑞士醫療保險卡：</strong>便於登記您的基本醫保資訊。',
        },
        {
          de: '<strong>Aktuelle Befunde / Medikamente:</strong> Falls vorhanden, bringen Sie ärztliche Berichte oder eine Medikamentenliste mit.',
          en: '<strong>Recent medical reports:</strong> If relevant, bring medication lists, lab results, or imaging summaries.',
          zh: '<strong>近期醫療檢查報告：</strong>如有既往化驗單、影像資料或正在服用的西藥清單，歡迎一併攜帶參考。',
        },
        {
          de: '<strong>Bequeme Kleidung:</strong> Lockere Hosen und Oberteile erleichtern das Freimachen der Akupunkturpunkte an Beinen und Armen.',
          en: '<strong>Comfortable clothing:</strong> Loose pants and tops allow easy access to acupuncture points on arms and legs.',
          zh: '<strong>寬鬆舒適衣物：</strong>建議著便於捲起袖口與褲腿的衣服，以便暴露肘膝以下的針灸穴位。',
        },
      ],
      rev: {},
    },
    {
      icon: 'info',
      title: { de: 'Wichtige Hinweise vor dem Termin', en: 'Helpful Tips Before Your Visit', zh: '行前特別注意事項' },
      items: [
        {
          de: '<strong>Leichte Mahlzeit:</strong> Kommen Sie weder mit völlig leerem Magen noch unmittelbar nach einem sehr üppigen Essen.',
          en: '<strong>Have a light meal:</strong> Do not arrive on an entirely empty stomach or immediately after a heavy banquet.',
          zh: '<strong>適量進餐：</strong>切勿空腹施針，亦避免就診前暴飲暴食。',
        },
        {
          de: '<strong>Zungenbelag nicht bürsten:</strong> Bitte reinigen Sie vor dem Termin die Zunge nicht extra und vermeiden Sie färbende Bonbons oder Kaffee kurz davor, um das Zungenbild nicht zu verfälschen.',
          en: '<strong>Avoid brushing the tongue:</strong> Please refrain from scraping your tongue coating or drinking coffee right before the appointment, as this alters the diagnostic tongue picture.',
          zh: '<strong>保持舌苔自然：</strong>就診前請勿刮刷舌苔，且避免飲用咖啡、濃茶或食用容易給舌面染色的糖果食品。',
        },
        {
          de: '<strong>Stornierung (24h):</strong> Sollte Ihnen etwas dazwischenkommen, bitten wir um eine Absage mindestens 24 Stunden im Voraus.',
          en: '<strong>24-hour cancellation rule:</strong> Please give at least 24 hours notice if you need to reschedule.',
          zh: '<strong>提前24小時改約：</strong>若臨時行程有變，請至少提前24小時通知診所，感謝您的理解與配合。',
        },
      ],
      rev: {},
    },
  ],
};
