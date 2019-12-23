var express = require('express');
router = express.Router();

router.use(express.static('public'));
router.use('/', require('./default'));
router.use('/sample', require('./sample_app'));
router.use('/apex', require('./apex'));
router.use('/weblogic', require('./weblogic'));
router.use('/webseal', require('./webseal'));

module.exports = router