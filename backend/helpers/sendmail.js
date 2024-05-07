const nodemailer = require("nodemailer");
const user = (process.env.MAIL_USER)
const pass = (process.env.MAIL_PASSWORD)


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: user,
        pass: pass
    }
})

module.exports = transporter;