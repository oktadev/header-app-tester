var express = require('express');
router = express.Router();

router.use('/', require('./default'));
router.use('/sample', require('./sample_app'));

module.exports = router