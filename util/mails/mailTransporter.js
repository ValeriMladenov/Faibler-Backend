const nodemailer = require("nodemailer");

module.exports.mailTransporter = () => {
  const transporter = nodemailer.createTransport({
    host: "mini.superhosting.bg",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "diary@brainix.bg",
      pass: "madafaka123",
    },
  });
  return transporter;
};
