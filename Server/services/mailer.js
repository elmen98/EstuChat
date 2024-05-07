const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "luis.gonzalez7880@alumnos.udg.mx",
    pass: "uebu algg pmbr acjh",
  },
});

transporter.verify().then(()=>{
  console.log("Ready to send email");
});

const sendNodemaile = async ({
  to,
  subject,
  html,
}) => {
  try{
    await transporter.sendMail({
      from: '<luis.gonzalez7880@alumnos.udg.mx>', // sender address
      to: to, // list of receivers
      subject: subject, // Subject line // plain text body
      html: html, // html body
    });
    return;
  } catch(error){
    return console.log(error);
  }
}

exports.sendEmail = async (args) => {
    return sendNodemaile(args);
};