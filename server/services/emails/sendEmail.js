const mailgunjs = require('mailgun-js');
const path = require('path');
const stripHtml = require('string-strip-html');

const config = require('../../config');
const { getHtml } = require('./templates');

const mailgun = mailgunjs({ apiKey: config.mailgun.apikey, domain: config.mailgun.domain });

function sendMail(options) {
  const logoPath = path.join(__dirname, 'logo.png');

  const defaults = {
    from: '"AJ Tamayo" <aj@atamayo.io>',
    subject: 'Hey!',
    message: '<b>What\'s up?</b>',
    inline: logoPath,
  };

  const mailOpts = Object.assign({}, defaults, options);
  mailOpts.html = getHtml(mailOpts.message);
  mailOpts.text = stripHtml(mailOpts.message);

  return new Promise(((resolve, reject) => {
    mailgun.messages()
      .send(mailOpts)
      .then((info) => {
        // eslint-disable-next-line no-console
        console.log(info);
        return resolve(true);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        return reject(false); // eslint-disable-line
      });
  }));
}

module.exports = sendMail;
