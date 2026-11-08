// Health-concerns page (Beschwerden / Symptoms / 常见健康问题) — restores the
// four topic areas of the legacy site (old /de/symptoms): back pain, migraine,
// stress & sleep, digestion. The old site only provided topic labels; the
// descriptions and consultation notes below are NEW DRAFTS and are all marked
// for Min's medical review (REVIEW-MIN-TC markers, rev flags on every locale).
// No cure promises, no clinical evidence claims.

export const SYMPTOMS_PAGE = {
  eyebrow: { de: 'Anliegen & Beschwerden', en: 'Health Concerns', zh: '常见健康问题' },
  title: {
    de: 'Häufige Anliegen in der TCM-Beratung',
    en: 'Common Health Concerns',
    zh: '常见健康困扰与中医调理',
  },
  lead: {
    de: 'Viele Menschen kommen mit einem konkreten Anliegen zu uns. Hier stellen wir vier häufige Beschwerden vor und erklären, wie eine TCM-Beratung damit umgeht.',
    en: 'Many people visit us with a specific concern. Here we introduce four common issues and explain how a TCM consultation approaches them.',
    zh: '许多来访者带着具体的身体不适前来就诊。这里介绍四类常见健康问题，以及中医问诊如何为您梳理与应对。',
  },
  approachLabel: {
    de: 'In der TCM-Beratung:',
    en: 'In a TCM consultation:',
    zh: '中医问诊思路：',
  },
  concerns: [
    {
      icon: 'stretch-horizontal',
      title: { de: 'Rückenschmerzen', en: 'Back Pain', zh: '背部疼痛' },
      desc: {
        de: 'Verspannung im Nacken, Ziehen im unteren Rücken oder wiederkehrende Schmerzen nach langem Sitzen — Rückenbeschwerden zeigen sich sehr unterschiedlich.',
        en: 'Tension in the neck and shoulders, a dull ache in the lower back, or recurring pain after long hours of sitting — back problems show up in many ways.',
        zh: '颈肩紧绷、腰背酸痛或久坐后反复发作的疼痛，表现形式因人而异。',
      },
      approach: {
        de: 'Wir sprechen über Verlauf, Auslöser und Belastungen im Alltag. Anhand von Zungen- und Pulsbefund ordnen wir die Beschwerden in ein TCM-Muster ein und besprechen, ob Akupunktur, Tuina oder Schröpfen für Sie infrage kommt.',
        en: 'We discuss the course of your pain, its triggers, and daily strain. Using tongue and pulse assessment, we place it within a TCM pattern and talk through whether acupuncture, Tuina, or cupping might suit you.',
        zh: '我们会详细了解疼痛的发展过程、诱发因素与日常劳损情况，结合舌脉诊察归纳证型，再与您讨论针灸、推拿或拔罐等疗法是否合适。',
      },
      rev: { de: true, en: true, zh: true },
    },
    {
      icon: 'brain',
      title: { de: 'Migräne', en: 'Migraine', zh: '偏头痛' },
      desc: {
        de: 'Wiederkehrende Kopfschmerzattacken, oft mit Lichtempfindlichkeit oder Übelkeit, können den Alltag stark einschränken.',
        en: 'Recurring headache attacks — often with light sensitivity or nausea — can interrupt everyday life.',
        zh: '反复发作的头痛，常伴畏光或恶心，严重影响日常生活。',
      },
      approach: {
        de: 'Wir erfassen Häufigkeit, Auslöser und Begleiterscheinungen. Aus TCM-Sicht schauen wir, welches Muster hinter den Beschwerden stehen könnte, und besprechen Behandlungsformen wie Akupunktur.',
        en: 'We record how often attacks occur, what triggers them, and what accompanies them. From a TCM perspective, we look at the pattern behind the pain and discuss options such as acupuncture.',
        zh: '我们会记录发作频率、诱因及伴随症状，从中医整体观分析可能的原因，并与您讨论针灸等治疗方案。',
      },
      rev: { de: true, en: true, zh: true },
    },
    {
      icon: 'moon',
      title: { de: 'Stress & Schlaf', en: 'Stress & Sleep', zh: '压力与睡眠' },
      desc: {
        de: 'Anhaltende Anspannung, Gedankenkreisen am Abend oder unruhiger Schlaf hängen aus TCM-Sicht eng zusammen.',
        en: 'Ongoing tension, a racing mind at night, and restless sleep are closely linked in the TCM view.',
        zh: '长期精神紧张、夜间思绪不断或睡眠不安，在中医看来往往互相关联。',
      },
      approach: {
        de: 'Wir besprechen Ihre Belastung, Ihren Schlafrhythmus und Ihre Energiereserven. Daraus leitet sich ein Vorschlag ab — etwa Akupunktur zur Beruhigung oder unterstützende Kräuter.',
        en: 'We talk through your daily load, sleep rhythm, and energy. From there we suggest an approach — calming acupuncture, for example, or supportive herbal prescriptions.',
        zh: '我们会了解您的压力来源、睡眠规律与精力状态，据此建议调理方向，例如安神针灸或配合中药调理。',
      },
      rev: { de: true, en: true, zh: true },
    },
    {
      icon: 'salad',
      title: { de: 'Verdauungsbeschwerden', en: 'Digestion', zh: '消化问题' },
      desc: {
        de: 'Völlegefühl, Blähungen oder ein unregelmässiger Stuhlgang beeinträchtigen das Wohlbefinden im Alltag spürbar.',
        en: 'Bloating, a feeling of fullness, or irregular digestion can noticeably affect daily wellbeing.',
        zh: '腹胀、消化不良或排便不规律，都会明显影响日常舒适感。',
      },
      approach: {
        de: 'Wir gehen Essgewohnheiten, Tagesrhythmus und Belastungen gemeinsam durch und besprechen, ob Tuina, eine Kräuterrezeptur oder Akupunktur zu Ihrem Anliegen passt.',
        en: 'We review eating habits, daily rhythm, and stress together, then discuss whether Tuina, a herbal prescription, or acupuncture fits your concern.',
        zh: '我们会与您一起回顾饮食习惯、作息规律与情绪压力，再讨论推拿、中药方剂或针灸是否适合您的情况。',
      },
      rev: { de: true, en: true, zh: true },
    },
  ],
  consultLink: {
    de: 'Beratungstermin vereinbaren',
    en: 'Book a consultation',
    zh: '预约咨询',
  },
  methods: {
    text: {
      de: 'Mit welchen Methoden wir behandeln, erfahren Sie auf der Therapieübersicht.',
      en: 'Learn about the methods we work with on the treatments overview.',
      zh: '了解诊所采用的各项中医疗法，请查看治疗项目页面。',
    },
    link: {
      de: 'Die neun Behandlungsmethoden im Überblick',
      en: 'The nine treatment methods at a glance',
      zh: '查看九种中医疗法',
    },
  },
  // Extended topics (Helsana acupuncture overview + NCCIH safety review,
  // paraphrased). Neutral wording only — these are topics people sometimes
  // raise in consultations, not promised treatments. All locales flagged
  // for Min's clinical review.
  extra: {
    heading: {
      de: 'Weitere Anliegen rund um Akupunktur',
      en: 'Other Concerns Discussed in Acupuncture Consultations',
      zh: '针灸咨询中的其他常见问题',
    },
    groups: [
      {
        icon: 'activity',
        title: { de: 'Schmerz & Bewegung', en: 'Pain & Movement', zh: '疼痛与活动' },
        items: {
          de: ['Kopfschmerzen', 'Gelenkschmerzen', 'Nacken- & Wirbelsäulenbeschwerden', 'Bewegungsapparat-Beschwerden', 'Verstauchungen', 'Muskel- & Sehnenverletzungen', 'Sehnenscheidenentzündung', 'Schleimbeutelentzündung'],
          en: ['Headaches', 'Joint pain', 'Neck & spinal complaints', 'Musculoskeletal concerns', 'Sprains', 'Muscle & tendon injuries', 'Tendinitis', 'Bursitis'],
          zh: ['头痛', '关节疼痛', '颈肩与脊柱不适', '运动系统不适', '扭伤', '肌肉与肌腱损伤', '肌腱炎', '滑囊炎'],
        },
      },
      {
        icon: 'moon',
        title: { de: 'Schlaf, Energie & Wohlbefinden', en: 'Sleep, Energy & Wellbeing', zh: '睡眠、精力与情绪' },
        items: {
          de: ['Schlafprobleme', 'Stress', 'Burnout', 'Müdigkeit am Tag', 'Erschöpfung & Schwäche', 'Konzentrationsschwierigkeiten', 'Stimmungsbezogene Anliegen'],
          en: ['Sleep problems', 'Stress', 'Burnout', 'Daytime sleepiness', 'Fatigue & weakness', 'Difficulty concentrating', 'Mood-related concerns'],
          zh: ['睡眠问题', '压力', '倦怠', '日间嗜睡', '疲劳乏力', '注意力难集中', '情绪相关困扰'],
        },
      },
      {
        icon: 'leaf',
        title: { de: 'Allergie & Atmung', en: 'Allergies & Breathing', zh: '过敏与呼吸' },
        items: {
          de: ['Allergische Beschwerden', 'Asthma (begleitend — ersetzt keine ärztliche Behandlung)'],
          en: ['Allergic conditions', 'Asthma (complementary — never a substitute for medical care)'],
          zh: ['过敏性不适', '哮喘（仅作辅助调理——不能替代正规医疗）'],
        },
      },
      {
        icon: 'clipboard-list',
        title: { de: 'Weitere Beratungsthemen', en: 'Further Consultation Topics', zh: '其他咨询主题' },
        items: {
          de: ['Neurologische Anliegen (nur ärztlich abgeklärt)', 'Psychosomatische Beschwerden', 'Raucherentwöhnung (begleitend)', 'Geburtsvorbereitung (nur nach Rücksprache)'],
          en: ['Neurological concerns (medically assessed only)', 'Psychosomatic concerns', 'Smoking cessation (supportive)', 'Childbirth preparation (by arrangement only)'],
          zh: ['神经系统相关问题（需经医生评估）', '心身相关不适', '戒烟（辅助调理）', '孕前调理（需另行沟通）'],
        },
      },
    ],
    note: {
      de: 'Diese Themen werden in der Akupunktur-Beratung gelegentlich besprochen. Ob eine Behandlung für Sie infrage kommt, wird individuell abgeklärt — Akupunktur ersetzt keine ärztliche Abklärung oder Behandlung.',
      en: 'These topics are sometimes discussed during an acupuncture consultation. Suitability is assessed individually — acupuncture does not replace medical assessment or treatment.',
      zh: '以上主题偶尔会在针灸咨询中提及。是否适合接受治疗须个案评估——针灸不能替代正规医学诊断与治疗。',
    },
    link: {
      de: 'Mehr zur Akupunktur-Behandlung',
      en: 'About acupuncture treatment',
      zh: '了解针灸治疗',
    },
    sourceLabel: {
      de: 'Quellen: Helsana · NCCIH',
      en: 'Sources: Helsana · NCCIH',
      zh: '参考来源：Helsana · NCCIH',
    },
  },
};