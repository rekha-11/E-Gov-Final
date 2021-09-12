const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(morgan("dev"));

app.post("/send-mail", async (req, res) => {
  try {
    let testAccount = await nodemailer.createTestAccount();

    const { name, email, msg, subject } = req.body;

    console.log(testAccount);

    const smtpTransport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.user,
        pass: process.env.pw,
      },
    });

    const mailOpts = {
      from: "amrcdrc@gmail.com",
      to: "rekhabhandaree77@gmail.com",
      subject: subject,
      html: `<h1>${name} (${email}) has tried to connect with you.</h1><br /><p> ${name} has said, "${msg}"</p>`,
    };

    smtpTransport.sendMail(mailOpts, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });

    res.status(200).json({
      msg: "Message Sent!",
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
