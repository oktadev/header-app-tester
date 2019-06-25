const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('headerApp', 
     {
        title: 'Index',
        description: 'Welcome to the app validation',
        doc: 'https://www.okta.com',
        req: req,
     }
    );
});

module.exports = router;