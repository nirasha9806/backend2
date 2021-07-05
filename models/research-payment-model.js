const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let accountSchema = new Schema({

    card_number : {

        type : Number
    },

    card_holder : {

        type : String
    },

    date : {

        type : Date
    },

    CVC : {
        type : Number
    },
    amount : {
        type : String
    }

},{
    timestamps:true
});

const ResearcherPayment = mongoose.model('ResearcherPayment',accountSchema);
module.exports ={ResearcherPayment}