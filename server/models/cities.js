const mongoose = require('mongoose');

const { Schema } = mongoose;

const CitySchema = new Schema({
    id: {
        type: String,
        trim: true,
    },
    name: {
        type: String,
        trim: true,
        require: true,
    },
    country: {
        type: String,
        trim: true,
        required: true,
    },
    coord: {
        type: Object,
        required: true,
    },
    langs: {
        type: Array,
        trim: true,
    },
}, { collection: 'cityList' });

const Cities = mongoose.model('Cities', CitySchema);

module.exports = Cities;
