// Long-form legal drafts (privacy + imprint). Draft notices preserved verbatim.
export const LEGAL = {
  privacy: {
    eyebrow: { de: 'Rechtliches', en: 'Legal Notice', zh: '法律合規' },
    title: { de: 'Datenschutzerklärung', en: 'Privacy Policy', zh: '隱私政策' },
    lead: {
      de: 'Stand: 7. November 2026 · Gültig für den Webauftritt tcm-weissenberger-lu.ch',
      en: 'Last updated: November 7, 2026 · Applicable to tcm-weissenberger-lu.ch',
      zh: '最後更新：2026年11月7日 · 適用於 tcm-weissenberger-lu.ch 網站',
    },
    noticeHtml: {
      de: '<strong>Entwurf zur juristischen Freigabe:</strong> Dieser Text stellt einen datenschutzrechtlichen Vorentwurf gemäss Schweizer DSG dar und muss vor dem definitiven Go-Live durch die Praxisinhaberin genehmigt werden.',
      en: '<strong>Draft subject to client legal approval:</strong> This document represents a preliminary privacy policy draft under Swiss FADP and must be approved by the practice owner prior to live launch.',
      zh: '<strong>草案說明（待客戶稽核）：</strong> 本隱私政策為依據瑞士聯邦資料保護法（DSG / FADP）制定的預備草案，須經診所負責人稽核確認後方可正式釋出。',
    },
    sections: [
      {
        h: { de: '1. Verantwortliche Stelle', en: '1. Data Controller', zh: '1. 資料控制方主體' },
        html: {
          de: 'Verantwortlich für die Datenbearbeitungen auf dieser Website im Sinne des Bundesgesetzes über den Datenschutz (DSG) ist:<br /><br /><strong>TCM Praxis Weissenberger-Lu</strong><br />Min Weissenberger-Lu<br />Schaffhauserstrasse 466<br />8052 Zürich, Schweiz<br />E-Mail: <a href="mailto:info@tcm-weissenberger-lu.ch">info@tcm-weissenberger-lu.ch</a><br />Telefon: +41 78 899 92 88 <span class="badge badge-confirm">[CONFIRM]</span>',
          en: 'The responsible entity for data processing on this website under the Swiss Federal Act on Data Protection (FADP) is:<br /><br /><strong>TCM Praxis Weissenberger-Lu</strong><br />Min Weissenberger-Lu<br />Schaffhauserstrasse 466<br />8052 Zurich, Switzerland<br />Email: <a href="mailto:info@tcm-weissenberger-lu.ch">info@tcm-weissenberger-lu.ch</a><br />Phone: +41 78 899 92 88 <span class="badge badge-confirm">[CONFIRM]</span>',
          zh: '根據瑞士《聯邦資料保護法》（DSG），本網站的資料處理責任主體為：<br /><br /><strong>TCM Praxis Weissenberger-Lu</strong><br />Min Weissenberger-Lu<br />Schaffhauserstrasse 466<br />8052 Zürich, Switzerland<br />電子郵箱：<a href="mailto:info@tcm-weissenberger-lu.ch">info@tcm-weissenberger-lu.ch</a><br />聯絡電話：+41 78 899 92 88 <span class="badge badge-confirm">[CONFIRM]</span>',
        },
      },
      {
        h: { de: '2. Erhebung und Bearbeitung von Personendaten', en: '2. Processing of Personal Data', zh: '2. 個人資訊的收集與使用' },
        html: {
          de: 'Wir bearbeiten in erster Linie die Personendaten, die wir im Rahmen unserer Website von Ihnen erhalten (z.B. über das Kontaktformular oder die Terminbuchung). Wir fordern Sie ausdrücklich auf, über allgemeine Webformulare <strong>keine sensiblen Gesundheitsdaten</strong> (Krankengeschichten, Symptome) zu übermitteln. Die eigentliche medizinische Dokumentation erfolgt ausschliesslich persönlich vor Ort in der Praxis.',
          en: 'We process personal data received in connection with this website (e.g. general contact enquiries and appointment booking). We expressly ask that you <strong>do not send sensitive medical health records</strong> or clinical symptom details via open website forms. Detailed medical records are collected exclusively during your in-person consultation at the practice.',
          zh: '我們僅處理您在瀏覽本網站、填寫聯絡表單或預約流程中主動提交的必要資訊（如姓名、聯絡電話、電子郵箱）。我們特別提醒您：<strong>請勿通過公開的網際網路網頁表單傳送敏感的醫療健康資訊與個人既往病史</strong>。正式的醫療病歷將在您親臨診所就診時由醫師當面採集並進行最高級別的保密歸檔。',
        },
      },
      {
        h: { de: '3. Hosting & Server-Logfiles', en: '3. Swiss Hosting & Server Logs', zh: '3. 瑞士境內安全主機託管' },
        html: {
          de: 'Diese Website wird bei einem qualifizierten Schweizer Hosting-Provider (Hostpoint AG, Rapperswil-Jona, Schweiz) gehostet. Beim Aufruf unserer Website erheben die Server automatisch technische Daten (IP-Adresse, Datum/Uhrzeit, Browser-Informationen), die für die Sicherheit und Stabilität des Betriebs unerlässlich sind.',
          en: 'This website is hosted by a qualified Swiss hosting provider (Hostpoint AG, Rapperswil-Jona, Switzerland). The servers automatically log technical metadata (IP address, date/time, user agent) strictly necessary to guarantee network security, performance, and stability.',
          zh: '本網站託管於瑞士境內的專業雲服務提供商（Hostpoint AG）。伺服器僅記錄維護系統網路安全與穩定所必需的常規技術訪問日誌，不記錄任何患者病歷資料。',
        },
      },
      {
        h: { de: '4. Ihre Rechte', en: '4. Your Privacy Rights', zh: '4. 您的法定權利' },
        html: {
          de: 'Sie haben im Rahmen des anwendbaren Datenschutzrechts das Recht auf unentgeltliche Auskunft über Ihre gespeicherten Daten sowie das Recht auf Berichtigung, Sperrung oder Löschung. Wenden Sie sich hierzu bitte an die oben genannte Kontaktadresse.',
          en: 'Under applicable Swiss data protection laws, you have the right to request free information regarding your stored data, as well as the right to correction or deletion. Please reach out to the contact address indicated above.',
          zh: '依據瑞士資料保護法規，您隨時有權免費查詢我們所儲存的有關您的個人資訊，並有權要求更正、阻止或刪除相關資料。若有相關需求，請通過上述方式與我們聯絡。',
        },
      },
    ],
  },
  imprint: {
    eyebrow: { de: 'Rechtliche Angaben', en: 'Legal Information', zh: '法定資訊公示' },
    title: { de: 'Impressum', en: 'Imprint', zh: '網站法律宣告' },
    lead: {
      de: 'Angaben gemäss Schweizer Recht (Bundesgesetz gegen den unlauteren Wettbewerb UWG).',
      en: 'Information in accordance with Swiss legal requirements.',
      zh: '依據瑞士相關商業法規公開之法定經營與監管資訊。',
    },
    noticeHtml: {
      de: '<strong>Entwurf zur juristischen Freigabe:</strong> Die nachfolgenden Pflichtangaben sind vor der Liveschaltung mit den offiziellen Handelsregister- und Berufsdaten abzugleichen.',
      en: '<strong>Draft subject to client approval:</strong> The legal information below must be finalized and confirmed against official Swiss commercial and licensing registries before publication.',
      zh: '<strong>草案說明（待客戶稽核）：</strong> 下列法定宣告內容須在正式上線前對照瑞士商業註冊登記及專業許可憑證核實確認。',
    },
    sections: [
      {
        h: { de: 'Praxisbetreiberin', en: 'Practice Operator', zh: '診所經營主體' },
        html: {
          de: '<strong>TCM Praxis Weissenberger-Lu</strong><br />Min Weissenberger-Lu<br />Schaffhauserstrasse 466<br />8052 Zürich, Schweiz<br />E-Mail: <a href="mailto:info@tcm-weissenberger-lu.ch">info@tcm-weissenberger-lu.ch</a><br />Telefon: +41 78 899 92 88 <span class="badge badge-confirm">[CONFIRM]</span><br />Web: https://www.tcm-weissenberger-lu.ch',
          en: '<strong>TCM Praxis Weissenberger-Lu</strong><br />Min Weissenberger-Lu<br />Schaffhauserstrasse 466<br />8052 Zurich, Switzerland<br />Email: <a href="mailto:info@tcm-weissenberger-lu.ch">info@tcm-weissenberger-lu.ch</a><br />Telephone: +41 78 899 92 88 <span class="badge badge-confirm">[CONFIRM]</span><br />Website: https://www.tcm-weissenberger-lu.ch',
          zh: '<strong>TCM Praxis Weissenberger-Lu</strong><br />負責人：Min Weissenberger-Lu<br />地址：Schaffhauserstrasse 466, 8052 Zürich, Switzerland<br />電子郵箱：<a href="mailto:info@tcm-weissenberger-lu.ch">info@tcm-weissenberger-lu.ch</a><br />聯絡電話：+41 78 899 92 88 <span class="badge badge-confirm">[CONFIRM]</span><br />官方網站：https://www.tcm-weissenberger-lu.ch',
        },
      },
      {
        h: { de: 'Berufsbezeichnung & Aufsichtsbehörde', en: 'Professional Title & Oversight', zh: '執業資質與主管監督機構' },
        html: {
          de: 'Berufsbezeichnung: Diplomierte Naturheilpraktikerin TCM / Akupunkteurin (verliehen in der Schweiz)<br />Zuständige kantonale Behörde: Gesundheitsdirektion des Kantons Zürich<br />Registrierungen: EMR / ASCA / SBO-TCM <span class="badge badge-confirm">[CONFIRM]</span>',
          en: 'Professional title: Certified Naturopathic Practitioner TCM / Acupuncturist (awarded in Switzerland)<br />Supervisory authority: Health Directorate of the Canton of Zurich (Gesundheitsdirektion Kanton Zürich)<br />Professional registries: EMR / ASCA / SBO-TCM <span class="badge badge-confirm">[CONFIRM]</span>',
          zh: '職業名稱：瑞士聯邦認證自然療法中醫師／針灸師（獲授於瑞士聯邦）<br />州主管監督機構：蘇黎世州衛生局（Gesundheitsdirektion des Kantons Zürich）<br />專業認證登記：EMR / ASCA / SBO-TCM <span class="badge badge-confirm">[CONFIRM]</span>',
        },
      },
      {
        h: { de: 'Konzeption & Umsetzung', en: 'Design & Conception', zh: '網站設計與技術實現' },
        html: {
          de: '<strong>Agence 25</strong><br />Webdesign & Prototyping für Schweizer Praxen<br />Website: <a href="https://agence25.ch" target="_blank" rel="noopener noreferrer">agence25.ch</a>',
          en: '<strong>Agence 25</strong><br />Website design and prototyping for Swiss healthcare practices<br />Website: <a href="https://agence25.ch" target="_blank" rel="noopener noreferrer">agence25.ch</a>',
          zh: '<strong>Agence 25</strong><br />專注瑞士醫療健康領域的高品質網站設計與開發<br />官方網站：<a href="https://agence25.ch" target="_blank" rel="noopener noreferrer">agence25.ch</a>',
        },
      },
      {
        h: { de: 'Haftungsausschluss', en: 'Medical Disclaimer', zh: '免責宣告' },
        html: {
          de: 'Die Inhalte dieser Website dienen ausschliesslich allgemeinen Informationszwecken und stellen keine medizinische Beratung oder Heilversprechen dar. Für die Richtigkeit, Genauigkeit und Vollständigkeit der Informationen wird keine Haftung übernommen.',
          en: 'The information provided on this website is for general educational and informational purposes only and does not constitute medical advice, diagnosis, or guarantees of healing.',
          zh: '本網站所刊載之全部圖文內容僅供一般中醫常識普及與就診指引參考，不可替代專業執業醫師的當面臨床診斷或任何針對特定病症的療效承諾。',
        },
      },
    ],
  },
};
