const express = require('express');
const router = express.Router();
const RegisteredresearcherController = require('../controllers/viewregisteredresearcher-controller');

router.get('/',RegisteredresearcherController.GetResearcherDetails);




module.exports = router;