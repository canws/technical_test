const express = require('express');
const router = express.Router();

const { submitApplication, list, averageLoanAmount } = require('../../controllers/ApplicationController');

router.get('/', list);
router.get('/average-loan-amount', averageLoanAmount);
router.post('/submit', submitApplication);

module.exports = router;