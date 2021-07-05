const {ResearcherPayment} = require ('../models/research-payment-model');

const AddPayment = async(req,res,next)=>{

    //save data got from the client into the payment collection in the DB
    //const account = new Account(req.body)

        //await account.save((err) => {
            //if(err) return res.status(400).json({ success: false, err})
            //return res.status(200).json({ success: true})
        //})

    let researcherPayment = new ResearcherPayment(req.body);
    researcherPayment.save()
            .then(researcherPayment=>{
                res.status(200).json({'researcherPayment':'ResearcherPayment details are added successfully'});

            })
            .catch(err=>{
                res.status(400).send("Unable to save to database");
            });
}

exports.AddPayment=AddPayment;