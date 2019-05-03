const { compose } = require('lodash/fp');
const sendEmail = require('./sendEmail');

function getOptions(data) {
  const { name, email, goal, existing, timeline } = data;
  const q1 = '1. What do you want your website or app to accomplish?';
  const q2 = '2. What\'s your current website or app? What do you love/hate about it? Or if you don\'t have a website or app, what 3 websites do you love?';
  const q3 = '3. What\'s your timeline?';
  const responses = `${q1}\n\n\n${goal}\n\n\n${q2}\n\n\n${existing}\n\n\n${q3}\n\n\n${timeline}`;
  const content = `
    <p style="color: #4a4a4a;"><strong style="font-size: 26px;">Hi ${name},</strong></p>
    <p style="color: #4a4a4a;">Thanks for your interest in working with me. I should get back to you within 2 days.</p>
    <p style="color: #4a4a4a;">Here's a copy of your responses:</p>
    <pre style="padding: 16px 24px; border: 1px solid #eeeeee; background-color: #f4f4f4; border-radius: 3px; font-family: monospace; margin-bottom: 24px">${responses}</pre>
    <p style="color: #4a4a4a;">Thanks!</p>
    <p style="color: #aaaaaa;">(If you didn't try to reach out to me, you can safely ignore this email.)</p>
`;

  return {
    to: `${name} <${email}>`,
    subject: 'Hey! Thanks for reaching out.',
    message: content,
    bcc: 'aj@atamayo.io',
  };
}

const sendInquiryCopy = compose(sendEmail, getOptions);

module.exports = sendInquiryCopy;
