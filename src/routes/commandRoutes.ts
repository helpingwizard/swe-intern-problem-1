const express = require('express');
const { storeCommand, searchCommand } = require('../controllers/commandController');

const router = express.Router();

router.post('/commands', storeCommand);
router.get('/commands', searchCommand);

module.exports = router;
