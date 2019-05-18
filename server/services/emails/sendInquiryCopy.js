const { compose } = require('lodash/fp');
const config = require('../../config');
const sendEmail = require('./sendEmail');

function getOptions(data) {
  const { name, email, message } = data;
  const content = `
    <p style="color: #4a4a4a;"><strong style="font-size: 26px;">Hi ${name},</strong></p>
    <p style="color: #4a4a4a;">Thanks for your interest in working with me. I should get back to you within 2 days.</p>
    <p style="color: #4a4a4a;">Here's a copy of your response:</p>
    <pre style="padding: 16px 24px; border: 1px solid #eeeeee; background-color: #f4f4f4; border-radius: 3px; font-family: monospace; margin-bottom: 24px">${message}</pre>
    <p style="color: #4a4a4a;">Thanks!</p>
    <p style="color: #aaaaaa;">(If you didn't try to reach out to me, you can safely ignore this email.)</p>
`;

  return {
    to: `${name} <${email}>`,
    subject: 'Hey! Thanks for reaching out.',
    message: content,
    bcc: config.emails.bcc,
  };
}

const sendInquiryCopy = compose(sendEmail, getOptions);

module.exports = sendInquiryCopy;
