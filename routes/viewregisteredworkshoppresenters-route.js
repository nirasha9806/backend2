const express = require('express');
const router = express.Router();
const ViewWorkshopPresentersController = require('../controllers/viewregisteredworkshoppresenters-controller');

router.get('/',ViewWorkshopPresentersController.GetWorkshopPresentersDetails);




module.exports = router;