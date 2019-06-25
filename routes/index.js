var express = require('express');
router = express.Router();

router.use('/', require('./default'));
router.use('/sample', require('./sample_app'));
router.use('/apex', require('./apex'));
router.use('/weblogic', require('./weblogic'));

module.exports = router