const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    purchaseDate: {
        type: Date,
        default: Date.now,
        required: true,
    },
    purchaseValue: {
        type: Number,
        required: true,
    },
    sellValue: {
        type: Number,
        required: true,
    },
    position: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Product',productSchema)