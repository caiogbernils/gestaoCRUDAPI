const mongoose = require('mongoose')


const clientSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    CPF: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    complement: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Client',clientSchema)