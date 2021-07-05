const {Attendee}= require('../models/attendee-model');


const GetattendeeDetails = async(req,res,next)=>{

    Attendee.find(function(err,attendee){
        if(err)
         console.log(err);
        else{
            res.json(attendee);
        } 
    });

}

exports.GetattendeeDetails=GetattendeeDetails;