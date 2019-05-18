const express = require('express');
const sendInquiryCopy = require('../services/emails/sendInquiryCopy');
const Inquiry = require('../models/inquiryModel');

const router = express.Router();

const submitInquiry = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(422).json({ success: false, message: 'All fields are required.' });
  }

  await Inquiry.create({ name, email, message });
  await sendInquiryCopy({ name, email, message });

  return res.status(200).json({ success: true, message: 'Message sent!' });
};

router.post('/', submitInquiry);

module.exports = router;
