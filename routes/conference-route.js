const express = require('express');
const router = express.Router();
const conferenceController = require('../controllers/conferenceDetails-controller');

router.post('/add', conferenceController.AddDetails);
router.get('/', conferenceController.getDetails);
router.get('/edit/:id', conferenceController.editDetails);
router.post('/update/:id', conferenceController.updateDetails);
router.post('/delete/:id', conferenceController.deleteDetails);
module.exports = router;