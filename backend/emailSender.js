const nodemailer = require("nodemailer");

async function sendBillEmail(userEmail, filePath) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yourgmail@gmail.com",     // replace with your Gmail
      pass: "your-app-password",       // use Google App Password
    },
  });

  await transporter.sendMail({
    from: '"RentXCarz" <yourgmail@gmail.com>',
    to: userEmail,
    subject: "Your RentXCarz Bill",
    text: "Dear Customer, please find attached your rental bill.",
    attachments: [
      {
        filename: "RentXCarz_Invoice.pdf",
        path: filePath,
      },
    ],
  });

  console.log("✅ Bill sent successfully to " + userEmail);
}

module.exports = sendBillEmail;