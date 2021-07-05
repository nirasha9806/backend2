const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = mongoose.Schema({
    email: {
        type: String
    },

    name: {
        type: String
    },

    radio1: {
        type: String
    },

    amount: {
        type: String
    },

    number: {
        type: String
    },

    date: {
        type: String
    },

    code: {
        type: String
    }
    
},{ timesamps: true})

const AttendeePayment = mongoose.model('AttendeePayment', paymentSchema);

module.exports = {AttendeePayment}