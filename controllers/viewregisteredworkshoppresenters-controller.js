const {WorkshopPresenter}= require('../models/workshopPresenter-model');


const GetWorkshopPresentersDetails = async(req,res,next)=>{

    WorkshopPresenter.find(function(err,workshopPresenter){
        if(err)
         console.log(err);
        else{
            res.json(workshopPresenter);
        } 
    });

}

exports.GetWorkshopPresentersDetails=GetWorkshopPresentersDetails;