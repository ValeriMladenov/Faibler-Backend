/* eslint-disable no-console */
const nodemailer = require("nodemailer");
const { mailTransporter } = require("./mailTransporter");

module.exports.sendReport = (
  firstName,
  lastName,
  phone,
  email,
  description,
  name,
  address,
  photo
) => {
  const transporter = mailTransporter();

  const mailOptions = {
    from: '"Система за подаване на сигнали" <no-reply@faibler.com>', // sender address
    to: email, // list of receivers
    subject:
      "Нов сигнал от гражданин относо нарушаване на Заповед №РД-01-124/13.03.2020", // Subject line
    text: "Hello world", // plain text body
    html: "<b>Hello world?</b>", // html body
  };

  // eslint-disable-next-line consistent-return
  transporter.sendMail(mailOptions, (error, info) => {
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
};
