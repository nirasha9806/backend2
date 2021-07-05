const { Router } = require("express");

const express = require('express');
const router = express.Router();
const {AttendeePayment} = require("../models/payment-model");

//post method to save data
router.post("/insertPayment", (req, res) => {

    //save data got from the client into the payment collection in the DB
    const payment = new AttendeePayment(req.body)

        payment.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
});

module.exports = router;