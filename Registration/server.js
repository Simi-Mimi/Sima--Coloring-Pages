const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const app = express();

// Load environment variables from .env file
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files (e.g., HTML, CSS)

app.post('/send-email', (req, res) => {
  const { firstname, lastname, email, subject } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: 'New Form Submission',
    text: `Name: ${firstname} ${lastname}\nEmail: ${email}\nMessage: ${subject}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.redirect('/thank_you.html');
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});

