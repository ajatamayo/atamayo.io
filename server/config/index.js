require('dotenv').config();

module.exports = {
  app: {
    port: process.env.PORT || 5000,
  },
  emails: {
    bcc: process.env.EMAIL_BCC || '',
  },
  mailgun: {
    apikey: process.env.MAILGUN_API_KEY || '',
    domain: process.env.MAILGUN_DOMAIN || '',
  },
  db: {
    uri: process.env.MONGODB_URI,
  },
};
