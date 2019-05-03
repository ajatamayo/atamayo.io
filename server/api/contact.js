const express = require('express');
const sendInquiryCopy = require('../services/emails/sendInquiryCopy');

const router = express.Router();

const submitInquiry = async (req, res) => {
  const { name, email, goal, existing, timeline } = req.body;

  if (!name || !email || !goal || !existing || !timeline) {
    return res.status(422).json({ success: false, message: 'All fields are required.' });
  }

  const info = await sendInquiryCopy({ name, email, goal, existing, timeline });

  return res.status(200).json({ success: true, message: 'Message sent!' });
};

router.post('/', submitInquiry);

module.exports = router;
