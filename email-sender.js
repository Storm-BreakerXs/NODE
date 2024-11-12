const nodemailer = require("nodemailer");

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail", // You can change the service based on your email provider
  auth: {
    user: "wifeanyi532@gmail.com", // Replace with your email
    pass: "Fuck you for trying to check my password", // Replace with your email password or use App Password
  },
});

// Email options
const mailOptions = {
  from: "wifeanyi532@gmail.com", // Replace with your email
  to: "diamond144444@gmail.com", // Replace with the recipient's email
  subject: "TEST EMAIL",
  text: "This is a test email sent from Node.js i am happy it worked!",
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Email sent: " + info.response);
});
