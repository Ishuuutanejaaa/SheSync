const express = require('express');
const router = express.Router();
const { savePeriodData, predictPeriod } = require('../controllers/trackerController');

router.post('/save', savePeriodData);
router.post('/predict', predictPeriod);

module.exports = router;
