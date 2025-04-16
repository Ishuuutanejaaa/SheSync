const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbotControllers');

router.post('/chatbot', chatbotController.getAnswer);

module.exports = router;
