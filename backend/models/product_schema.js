
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    ratings: {
        type: Number,
        min: 0,
        max: 5
    },
    reviews: [{
        user: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            min: 0,
            max: 5,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
    discount: {
        type: Number,
        min: 0,
        max: 100
    },
    specifications: {
        type: Map,
        of: String
    }
});

module.exports = mongoose.model('Product', productSchema);