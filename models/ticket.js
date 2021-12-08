const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({

    productId: {
        type: String,
        required: true
    },
    clientId: {
        type: String,
        required: true
    },
    sellDate: {
        type: Date,
        default: Date.now,
        required: true,
    },
    sellValue: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Ticket',ticketSchema)