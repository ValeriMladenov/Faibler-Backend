const { mailTransporter } = require("./mailTransporter");

const DateObj = new Date();
const DateNow = DateObj.toLocaleDateString("bg-BG");

const sendReportWithPhoto = (ReportData, Region) => {
  const transporter = mailTransporter();
  const mailOptions = {
    from: '"Система за подаване на сигнали" <no-reply@faibler.com>',
    to: Region.email,
    subject:
      "Нов сигнал от гражданин относо нарушаване на Заповед №РД-01-124/13.03.2020",
    text: `До Директора на Регионална Здравна Инспекция ${Region.name}
    Сигнал от ${ReportData.reporter.firstName} ${ReportData.reporter.lastName} телефон: ${ReportData.reporter.phone} имейл: ${ReportData.reporter.email}
    
    Във връзка с изпълнението на Заповед №РД-01-124/13.03.2020 на Министъра на Здравеопазването. Желая да подам сигнал за извършено нарушение на заповедта. На ${DateNow}, установих, че на адрес: ${ReportData.address} се намира обект с име ${ReportData.name}, което извършва дейност въпреки забраните в заповедта. Прилагам и снимка
    С уважение ${ReportData.reporter.firstName} ${ReportData.reporter.lastName}
 Това е автоматично генерирано съобщение чрез Faibler.com`,
    html: `<h3 style="text-align:  right;">До Директора на <br>Регионална Здравна Инспекция<br>${Region.name}</h3>
    <h2 style="text-align: center;">Сигнал</h2>
    <p style="text-align: center;">от ${ReportData.reporter.firstName} ${ReportData.reporter.lastName} <br>телефон: ${ReportData.reporter.phone} имейл: ${ReportData.reporter.email} </h3>

    <p style="text-align: left;">Във връзка с изпълнението на Заповед №РД-01-124/13.03.2020 на Министъра на Здравеопазването. Желая да подам сигнал за извършено нарушение на заповедта. На ${DateNow}, установих, че на адрес: ${ReportData.address} се намира обект с име ${ReportData.name}, което извършва дейност въпреки забраните в заповедта.</p>
    
    <p style="text-align: right;">С уважение ${ReportData.reporter.firstName} ${ReportData.reporter.lastName}</p>
<p style="text-align: center;">Това е автоматично генерирано съобщение чрез Faibler.com</p>`,
    attachments: [{ filename: "report_photo.jpg", path: ReportData.photo }],
  };

  // eslint-disable-next-line consistent-return
  transporter.sendMail(mailOptions);
};
const sendReportWithoutPhoto = (ReportData, Region) => {
  const transporter = mailTransporter();
  const mailOptions = {
    from: '"Система за подаване на сигнали" <no-reply@faibler.com>',
    to: Region.email,
    subject:
      "Нов сигнал от гражданин относо нарушаване на Заповед №РД-01-124/13.03.2020",
    text: `До Директора на Регионална Здравна Инспекция ${Region.name}
    Сигнал от ${ReportData.reporter.firstName} ${ReportData.reporter.lastName} телефон: ${ReportData.reporter.phone} имейл: ${ReportData.reporter.email}
    
    Във връзка с изпълнението на Заповед №РД-01-124/13.03.2020 на Министъра на Здравеопазването. Желая да подам сигнал за извършено нарушение на заповедта. На ${DateNow}, установих, че на адрес: ${ReportData.address} се намира обект с име ${ReportData.name}, което извършва дейност въпреки забраните в заповедта. Прилагам и снимка
    С уважение ${ReportData.reporter.firstName} ${ReportData.reporter.lastName}
 Това е автоматично генерирано съобщение чрез Faibler.com`,
    html: `<h3 style="text-align:  right;">До Директора на <br>Регионална Здравна Инспекция<br>${Region.name}</h3>
    <h2 style="text-align: center;">Сигнал</h2>
    <p style="text-align: center;">от ${ReportData.reporter.firstName} ${ReportData.reporter.lastName} <br>телефон: ${ReportData.reporter.phone} имейл: ${ReportData.reporter.email} </h3>

    <p style="text-align: left;">Във връзка с изпълнението на Заповед №РД-01-124/13.03.2020 на Министъра на Здравеопазването. Желая да подам сигнал за извършено нарушение на заповедта. На ${DateNow}, установих, че на адрес: ${ReportData.address} се намира обект с име ${ReportData.name}, което извършва дейност въпреки забраните в заповедта.</p>
    
    <p style="text-align: right;">С уважение ${ReportData.reporter.firstName} ${ReportData.reporter.lastName}</p>
<p style="text-align: center;">Това е автоматично генерирано съобщение чрез Faibler.com</p>`,
  };

  // eslint-disable-next-line consistent-return
  transporter.sendMail(mailOptions);
};
module.exports = {
  sendReportWithoutPhoto,
  sendReportWithPhoto,
};
