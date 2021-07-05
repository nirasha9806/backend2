const {Approvedconferencedetails} = require("../models/inserteditordetails-model");

const AddDetails = async(req,res,next)=>{

    //save data got from the client into the payment collection in the DB
    const approvedconferencedetails = new Approvedconferencedetails(req.body)

    approvedconferencedetails.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
}

exports.AddDetails=AddDetails;