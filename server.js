const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

require('dotenv').config();
app.use(cors());

//BodyParser Middleware
app.use(bodyParser.json());

//sanduni
// conference route
app.use('/conference',require('./routes/conference-route'));
app.use('/template', require('./routes/fileUpload-route'));
app.use('/uploads', express.static('uploads'));


//kaveena
app.use('/api/payment',require('./routes/payment-route'));
app.use('/api/workshopProposal',require('./routes/workshopProposal-route'));
app.use('/api/researchPaper',require('./routes/researchPaper-route'));
app.use('/api/ApprovedResearcher',require('./routes/approvedResearches-route'));
app.use('/api/ApprovedProposals',require('./routes/approvedProposals-route'));

//nethmi
app.use('/api/researchpayment', require('./routes/research-payment-route'));
app.use('/api/retrieve', require('./routes/viewconferencedetails-route'));
app.use('/api/inserteditordetails', require('./routes/inserteditordetails-route'));
app.use('/api/getinserteditordetails', require('./routes/approved-conferencedetails-route'));
app.use('/api/viewapprovedresearchpaper', require('./routes/viewresearchpaper-route'));
app.use('/api/viewapprovedproposal', require('./routes/viewproposal-route'));
app.use('/api/viewregisteredusers', require('./routes/viewregisteredattendeeuser-route'));
app.use('/api/viewregisteredresearcherusers', require('./routes/viewregisteredresearcher-route'));
app.use('/api/viewregisteredworkshoppresenters', require('./routes/viewregisteredworkshoppresenters-route'));


//nirasha
app.use('/api/researcher', require('./routes/researcher-route'));
app.use('/api/workshop', require('./routes/WorkshopPresenter-route'));
app.use('/api/attendee', require('./routes/attendee-route'));
app.use('/api/login', require('./routes/login-route'));


//DB config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
    .connect(db, {
        useCreateIndex: true,
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false
      })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
    
    const port  = process.env.PORT || 5000;


    app.listen(port, () => console.log('Server started on port ' +port));
