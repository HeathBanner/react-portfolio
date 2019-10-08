const contactController = require('express').Router();
const nodeMailer = require('nodemailer');

const transport = {
    host: process.env.host,
    auth: {
        user: process.env.user,
        pass: process.env.pass,
    },
};

const transporter = nodeMailer.createTransport(transport);

transporter.verify((error) => {
    if (error) { return console.log(error); }
    return console.log('Server is ready to take messages');
});

contactController.post('/newContact', (req, res) => {
    const {
        name,
        email,
        phone,
        message,
    } = req.body;
    transporter.sendMail({
        from: email,
        to: process.env.user,
        subject: name,
        text: `${message} - ${phone}`,
    });
    res.status(200).json({
        error: false,
        message: 'Email has been sent!'
    });
});

module.exports = contactController;
