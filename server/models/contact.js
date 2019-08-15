const mongoose = require('mongoose');

const { Schema } = mongoose;

const ContactSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    message: {
        type: String,
    },
}, { collection: 'Contact' });

const Contact = mongoose.model('Contact', ContactSchema, 'Contact');

module.exports = Contact;
