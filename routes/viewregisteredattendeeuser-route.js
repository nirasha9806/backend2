const express = require('express');
const router = express.Router();
const ViewAttendeeController = require('../controllers/viewregisteredattendeeuser-contoller');

router.get('/',ViewAttendeeController.GetattendeeDetails);




module.exports = router;