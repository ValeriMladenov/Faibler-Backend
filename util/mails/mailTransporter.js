const nodemailer = require("nodemailer");

module.exports.mailTransporter = () => {
  const transporter = nodemailer.createTransport({
    host: process.env.MailHost,
    port: process.env.MailPort,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.MailUser,
      pass: process.env.MailPass,
    },
  });
  return transporter;
};
