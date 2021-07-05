const {Approvedconferencedetails}= require('../models/inserteditordetails-model');


const GetDetails = async(req,res,next)=>{

    Approvedconferencedetails.find(function(err,approvedconferencedetails){
        if(err)
         console.log(err);
        else{
            res.json(approvedconferencedetails);
        } 
    });

}

//delete
const DeleteDetails = async(req,res,next)=>{
    Approvedconferencedetails.deleteOne({ _id: req.params.id }, function (err, approvedconferencedetails) {
      if (err) res.json(err);
      else res.json('successfully removed');
    });

}   
 
exports.GetDetails=GetDetails;
exports.DeleteDetails=DeleteDetails;