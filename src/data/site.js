// Central practice information — single source of truth for contact details.
export const SITE_URL = 'https://www.tcm-weissenberger-lu.ch';

export const PRACTICE = {
  name: 'TCM Praxis Weissenberger-Lu',
  practitioner: 'Min Weissenberger-Lu',
  street: 'Schaffhauserstrasse 466',
  city: '8052 Zürich',
  // Mobile — confirmed by the client business card (078 790 88 69).
  phone: '+41 78 790 88 69',
  phoneHref: 'tel:+41787908869',
  // Landline — confirmed by the official EMR profile (emr.ch/de/therapeut/min.weissenberger-lu).
  landline: '043 300 99 32',
  landlineIntl: '+41 43 300 99 32',
  landlineHref: 'tel:+41433009932',
  email: 'info@tcm-weissenberger-lu.ch',
  mapsUrl: 'https://maps.google.com/?q=Schaffhauserstrasse+466,+8052+Zürich',
  zsr: 'N675463',
  whatsappUrl: 'https://wa.me/41787908869',
};

// Social + external profiles. Empty string = icon stays hidden until the
// client confirms the URL. WhatsApp is confirmed (business card number).
export const SOCIAL = {
  instagram: '',
  facebook: '',
  linkedin: '',
  whatsapp: 'https://wa.me/41787908869',
};

// Google reviews — link to the practice listing. Verify against the live
// Google Business Profile before launch.
export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/search/?api=1&query=TCM+Praxis+Weissenberger-Lu+Schaffhauserstrasse+466+8052+Z%C3%BCrich';

// [CONFIRM] phone number — requires client approval before launch.
export const CONFIRM = '[CONFIRM]';
