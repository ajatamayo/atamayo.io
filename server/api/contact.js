const express = require('express');
const transporter = require('./mailService');

const router = express.Router();

const submitInquiry = async (req, res, next) => {
  const info = await transporter.sendMail({
    from: '"AJ Tamayo" <aj@atamayo.io>',
    to: `"${req.body.name}" <${req.body.email}>`,
    subject: "Hey! Thanks for reaching out.",
    text: req.body.goal,
    html: `<b>${req.body.goal}</b>`,
  });

  return res.status(200).json({ data: info });
};

router.post('/', submitInquiry);

module.exports = router;
