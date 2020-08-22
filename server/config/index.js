require('dotenv').config();

module.exports = {
  app: {
    port: process.env.PORT || 5000,
  },
  emails: {
    bcc: process.env.EMAIL_BCC || '',
    dkim: {
      domainName: process.env.EMAIL_DOMAIN_NAME || '',
      keySelector: process.env.EMAIL_DKIM_KEY_SELECTOR || '',
      privateKey: process.env.EMAIL_DKIM_PRIVATE_KEY || '',
    },
  },
  mailgun: {
    apikey: process.env.MAILGUN_API_KEY || '',
    domain: process.env.MAILGUN_DOMAIN || '',
  },
  db: {
    uri: process.env.MONGODB_URI,
  },
};
