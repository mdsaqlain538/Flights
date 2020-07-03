const express = require('express');
var router = express.Router();
const {apicall} = require('../controllers/Flights');

router.get('/request',apicall);


module.exports = router;