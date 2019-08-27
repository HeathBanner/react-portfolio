const mongoose = require('mongoose');

const { Schema } = mongoose;

const titleSchema = new Schema({
    isPublished: Boolean,
    text: String,
    bold: Boolean,
    italic: Boolean,
    underline: Boolean,
    color: String,
    highlight: Boolean,
    font: String,
    justify: String,
    textStyle: String,
    marginTop: Number,
    marginBottom: Number,
});

const descriptionSchema = new Schema({
    text: String,
    font: String,
    justify: String,
    textStyle: String,
    color: String,
});

const readLengthSchema = new Schema({
    text: String,
    font: String,
    justify: String,
    color: String,
});

const bodySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text: String,
    font: String,
    justify: String,
    textStyle: String,
    bold: Boolean,
    italic: Boolean,
    underline: Boolean,
    color: String,
    highlight: Boolean,
    isText: Boolean,
    // ===============
    // Images
    // ===============
    isImage: Boolean,
    src: String,
    alt: String,
    height: String,
    width: String,
    marginTop: Number,
    marginBottom: Number,
});

const jumbotronSchema = new Schema({
    isImage: Boolean,
    src: String,
    alt: String,
    height: String,
    width: String,
    justify: String,
    marginTop: Number,
    marginBottom: Number,
});

const dateSchema = new Schema({
    parsedDate: String,
    epoch: Number,
});

const articleSchema = new Schema({
    title: titleSchema,
    description: descriptionSchema,
    readLength: readLengthSchema,
    jumbotron: jumbotronSchema,
    body: [bodySchema],
    date: dateSchema,
}, { collection: 'Articles' });

const Articles = mongoose.model('Articles', articleSchema, 'Articles');

module.exports = Articles;
