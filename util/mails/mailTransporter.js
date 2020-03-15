const nodemailer = require("nodemailer");

module.exports.mailTransporter = () => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAILHOST,
    port: process.env.MAILPORT,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.MAILUSER,
      pass: process.env.MAILPASS,
    },
  });
  return transporter;
};
