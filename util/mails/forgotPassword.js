/* eslint-disable no-console */
const nodemailer = require("nodemailer");
const { mailTransporter } = require("./mailTransporter");

module.exports.forgotPassword = (code, email) => {
  const transporter = mailTransporter();

  const mailOptions = {
    from: '"Diary 👻" <diary@brainix.bg>', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  };

  // eslint-disable-next-line consistent-return
  transporter.sendMail(mailOptions, (error, info) => {
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
};
