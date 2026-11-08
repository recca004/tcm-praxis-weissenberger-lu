// Long-form legal drafts (privacy + imprint). Draft notices preserved verbatim.
export const LEGAL = {
  privacy: {
    eyebrow: { de: 'Rechtliches', en: 'Legal Notice', zh: '法律合规' },
    title: { de: 'Datenschutzerklärung', en: 'Privacy Policy', zh: '隐私政策' },
    lead: {
      de: 'Stand: 7. November 2026 · Gültig für den Webauftritt tcm-weissenberger-lu.ch',
      en: 'Last updated: November 7, 2026 · Applicable to tcm-weissenberger-lu.ch',
      zh: '最后更新：2026年11月7日 · 适用于 tcm-weissenberger-lu.ch 网站',
    },
    noticeHtml: {
      de: '<strong>Entwurf zur juristischen Freigabe:</strong> Dieser Text stellt einen datenschutzrechtlichen Vorentwurf gemäss Schweizer DSG dar und muss vor dem definitiven Go-Live durch die Praxisinhaberin genehmigt werden.',
      en: '<strong>Draft subject to client legal approval:</strong> This document represents a preliminary privacy policy draft under Swiss FADP and must be approved by the practice owner prior to live launch.',
      zh: '<strong>草案说明（待客户稽核）：</strong> 本隐私政策为依据瑞士联邦资料保护法（DSG / FADP）制定的预备草案，须经诊所负责人稽核确认后方可正式释出。',
    },
    sections: [
      {
        h: { de: '1. Verantwortliche Stelle', en: '1. Data Controller', zh: '1. 资料控制方主体' },
        html: {
          de: 'Verantwortlich für die Datenbearbeitungen auf dieser Website im Sinne des Bundesgesetzes über den Datenschutz (DSG) ist:<br /><br /><strong>TCM Praxis Weissenberger-Lu</strong><br />Min Weissenberger-Lu<br />Schaffhauserstrasse 466<br />8052 Zürich, Schweiz<br />E-Mail: <a href="mailto:info@tcm-weissenberger-lu.ch">info@tcm-weissenberger-lu.ch</a><br />Telefon: +41 78 899 92 88 <span class="badge badge-confirm">[CONFIRM]</span>',
          en: 'The responsible entity for data processing on this website under the Swiss Federal Act on Data Protection (FADP) is:<br /><br /><strong>TCM Praxis Weissenberger-Lu</strong><br />Min Weissenberger-Lu<br />Schaffhauserstrasse 466<br />8052 Zurich, Switzerland<br />Email: <a href="mailto:info@tcm-weissenberger-lu.ch">info@tcm-weissenberger-lu.ch</a><br />Phone: +41 78 899 92 88 <span class="badge badge-confirm">[CONFIRM]</span>',
          zh: '根据瑞士《联邦资料保护法》（DSG），本网站的资料处理责任主体为：<br /><br /><strong>TCM Praxis Weissenberger-Lu</strong><br />Min Weissenberger-Lu<br />Schaffhauserstrasse 466<br />8052 Zürich, Switzerland<br />电子邮箱：<a href="mailto:info@tcm-weissenberger-lu.ch">info@tcm-weissenberger-lu.ch</a><br />联络电话：+41 78 899 92 88 <span class="badge badge-confirm">[CONFIRM]</span>',
        },
      },
      {
        h: { de: '2. Erhebung und Bearbeitung von Personendaten', en: '2. Processing of Personal Data', zh: '2. 个人资讯的收集与使用' },
        html: {
          de: 'Wir bearbeiten in erster Linie die Personendaten, die wir im Rahmen unserer Website von Ihnen erhalten (z.B. über das Kontaktformular oder die Terminbuchung). Wir fordern Sie ausdrücklich auf, über allgemeine Webformulare <strong>keine sensiblen Gesundheitsdaten</strong> (Krankengeschichten, Symptome) zu übermitteln. Die eigentliche medizinische Dokumentation erfolgt ausschliesslich persönlich vor Ort in der Praxis.',
          en: 'We process personal data received in connection with this website (e.g. general contact enquiries and appointment booking). We expressly ask that you <strong>do not send sensitive medical health records</strong> or clinical symptom details via open website forms. Detailed medical records are collected exclusively during your in-person consultation at the practice.',
          zh: '我们仅处理您在浏览本网站、填写联络表单或预约流程中主动提交的必要资讯（如姓名、联络电话、电子邮箱）。我们特别提醒您：<strong>请勿通过公开的网际网路网页表单传送敏感的医疗健康资讯与个人既往病史</strong>。正式的医疗病历将在您亲临诊所就诊时由医师当面采集并进行最高级别的保密归档。',
        },
      },
      {
        h: { de: '3. Hosting & Server-Logfiles', en: '3. Swiss Hosting & Server Logs', zh: '3. 瑞士境内安全主机托管' },
        html: {
          de: 'Diese Website wird bei einem qualifizierten Schweizer Hosting-Provider (Hostpoint AG, Rapperswil-Jona, Schweiz) gehostet. Beim Aufruf unserer Website erheben die Server automatisch technische Daten (IP-Adresse, Datum/Uhrzeit, Browser-Informationen), die für die Sicherheit und Stabilität des Betriebs unerlässlich sind.',
          en: 'This website is hosted by a qualified Swiss hosting provider (Hostpoint AG, Rapperswil-Jona, Switzerland). The servers automatically log technical metadata (IP address, date/time, user agent) strictly necessary to guarantee network security, performance, and stability.',
          zh: '本网站托管于瑞士境内的专业云服务提供商（Hostpoint AG）。伺服器仅记录维护系统网路安全与稳定所必需的常规技术访问日志，不记录任何患者病历资料。',
        },
      },
      {
        h: { de: '4. Ihre Rechte', en: '4. Your Privacy Rights', zh: '4. 您的法定权利' },
        html: {
          de: 'Sie haben im Rahmen des anwendbaren Datenschutzrechts das Recht auf unentgeltliche Auskunft über Ihre gespeicherten Daten sowie das Recht auf Berichtigung, Sperrung oder Löschung. Wenden Sie sich hierzu bitte an die oben genannte Kontaktadresse.',
          en: 'Under applicable Swiss data protection laws, you have the right to request free information regarding your stored data, as well as the right to correction or deletion. Please reach out to the contact address indicated above.',
          zh: '依据瑞士资料保护法规，您随时有权免费查询我们所储存的有关您的个人资讯，并有权要求更正、阻止或删除相关资料。若有相关需求，请通过上述方式与我们联络。',
        },
      },
    ],
  },
  imprint: {
    eyebrow: { de: 'Rechtliche Angaben', en: 'Legal Information', zh: '法定资讯公示' },
    title: { de: 'Impressum', en: 'Imprint', zh: '网站法律宣告' },
    lead: {
      de: 'Angaben gemäss Schweizer Recht (Bundesgesetz gegen den unlauteren Wettbewerb UWG).',
      en: 'Information in accordance with Swiss legal requirements.',
      zh: '依据瑞士相关商业法规公开之法定经营与监管资讯。',
    },
    noticeHtml: {
      de: '<strong>Entwurf zur juristischen Freigabe:</strong> Die nachfolgenden Pflichtangaben sind vor der Liveschaltung mit den offiziellen Handelsregister- und Berufsdaten abzugleichen.',
      en: '<strong>Draft subject to client approval:</strong> The legal information below must be finalized and confirmed against official Swiss commercial and licensing registries before publication.',
      zh: '<strong>草案说明（待客户稽核）：</strong> 下列法定宣告内容须在正式上线前对照瑞士商业注册登记及专业许可凭证核实确认。',
    },
    sections: [
      {
        h: { de: 'Praxisbetreiberin', en: 'Practice Operator', zh: '诊所经营主体' },
        html: {
          de: '<strong>TCM Praxis Weissenberger-Lu</strong><br />Min Weissenberger-Lu<br />Schaffhauserstrasse 466<br />8052 Zürich, Schweiz<br />E-Mail: <a href="mailto:info@tcm-weissenberger-lu.ch">info@tcm-weissenberger-lu.ch</a><br />Telefon: +41 78 899 92 88 <span class="badge badge-confirm">[CONFIRM]</span><br />Web: https://www.tcm-weissenberger-lu.ch',
          en: '<strong>TCM Praxis Weissenberger-Lu</strong><br />Min Weissenberger-Lu<br />Schaffhauserstrasse 466<br />8052 Zurich, Switzerland<br />Email: <a href="mailto:info@tcm-weissenberger-lu.ch">info@tcm-weissenberger-lu.ch</a><br />Telephone: +41 78 899 92 88 <span class="badge badge-confirm">[CONFIRM]</span><br />Website: https://www.tcm-weissenberger-lu.ch',
          zh: '<strong>TCM Praxis Weissenberger-Lu</strong><br />负责人：Min Weissenberger-Lu<br />地址：Schaffhauserstrasse 466, 8052 Zürich, Switzerland<br />电子邮箱：<a href="mailto:info@tcm-weissenberger-lu.ch">info@tcm-weissenberger-lu.ch</a><br />联络电话：+41 78 899 92 88 <span class="badge badge-confirm">[CONFIRM]</span><br />官方网站：https://www.tcm-weissenberger-lu.ch',
        },
      },
      {
        h: { de: 'Berufsbezeichnung & Aufsichtsbehörde', en: 'Professional Title & Oversight', zh: '执业资质与主管监督机构' },
        html: {
          de: 'Berufsbezeichnung: Diplomierte Naturheilpraktikerin TCM / Akupunkteurin (verliehen in der Schweiz)<br />Zuständige kantonale Behörde: Gesundheitsdirektion des Kantons Zürich<br />Registrierungen: EMR / ASCA / SBO-TCM <span class="badge badge-confirm">[CONFIRM]</span>',
          en: 'Professional title: Certified Naturopathic Practitioner TCM / Acupuncturist (awarded in Switzerland)<br />Supervisory authority: Health Directorate of the Canton of Zurich (Gesundheitsdirektion Kanton Zürich)<br />Professional registries: EMR / ASCA / SBO-TCM <span class="badge badge-confirm">[CONFIRM]</span>',
          zh: '职业名称：瑞士联邦认证自然疗法中医师／针灸师（获授于瑞士联邦）<br />州主管监督机构：苏黎世州卫生局（Gesundheitsdirektion des Kantons Zürich）<br />专业认证登记：EMR / ASCA / SBO-TCM <span class="badge badge-confirm">[CONFIRM]</span>',
        },
      },
      {
        h: { de: 'Konzeption & Umsetzung', en: 'Design & Conception', zh: '网站设计与技术实现' },
        html: {
          de: '<strong>Agence 25</strong><br />Webdesign & Prototyping für Schweizer Praxen<br />Website: <a href="https://agence25.ch" target="_blank" rel="noopener noreferrer">agence25.ch</a>',
          en: '<strong>Agence 25</strong><br />Website design and prototyping for Swiss healthcare practices<br />Website: <a href="https://agence25.ch" target="_blank" rel="noopener noreferrer">agence25.ch</a>',
          zh: '<strong>Agence 25</strong><br />专注瑞士医疗健康领域的高品质网站设计与开发<br />官方网站：<a href="https://agence25.ch" target="_blank" rel="noopener noreferrer">agence25.ch</a>',
        },
      },
      {
        h: { de: 'Haftungsausschluss', en: 'Medical Disclaimer', zh: '免责宣告' },
        html: {
          de: 'Die Inhalte dieser Website dienen ausschliesslich allgemeinen Informationszwecken und stellen keine medizinische Beratung oder Heilversprechen dar. Für die Richtigkeit, Genauigkeit und Vollständigkeit der Informationen wird keine Haftung übernommen.',
          en: 'The information provided on this website is for general educational and informational purposes only and does not constitute medical advice, diagnosis, or guarantees of healing.',
          zh: '本网站所刊载之全部图文内容仅供一般中医常识普及与就诊指引参考，不可替代专业执业医师的当面临床诊断或任何针对特定病症的疗效承诺。',
        },
      },
    ],
  },
};
