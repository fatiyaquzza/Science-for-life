const express = require('express');
const router = express.Router();
const { submitFeedback } = require('../controllers/contactController');

router.post('/feedback', submitFeedback);

module.exports = router;
