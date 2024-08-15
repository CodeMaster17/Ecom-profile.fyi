const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    logo: {
        type: String
    },
    website: {
        type: String
    }
});

module.exports = mongoose.model('Brand', brandSchema);
