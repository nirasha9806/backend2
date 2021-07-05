const {Researcher}= require('../models/researcher-model');


const GetResearcherDetails = async(req,res,next)=>{

    Researcher.find(function(err,researcher){
        if(err)
         console.log(err);
        else{
            res.json(researcher);
        } 
    });

}

exports.GetResearcherDetails=GetResearcherDetails;