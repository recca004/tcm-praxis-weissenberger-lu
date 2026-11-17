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

// Google reviews — client-supplied Google Maps link (maps.app.goo.gl short
// URL). It opens the practice's business listing; whether it lands directly
// on the reviews tab depends on Google's handling of the link.
export const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/MCH8zCGXR1MdGL4k9';
