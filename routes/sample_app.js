const express = require('express');
const router = express.Router();
const { header, validationResult } = require('express-validator');

var attributes = [
    {"id":"email","description":"User email"},
    {"id":"first_name","description":"First Name"},
    {"id":"last_name","description":"First Name"},
    {"id":"groups","description":"User groups separated by collon (:), typically taken from the LDAP or AD"},
    {"id":"host","description":"Application Host"},
  ];

router.get('/',[
    header('email').isEmail(),
    header('first_name').not().isEmpty(),
    header('last_name').not().isEmpty(),
    header('groups').not().isEmpty(),
    header('host').not().isEmpty(),
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(JSON.stringify(errors.array()));
    }

    res.render('headerApp', 
     {
        title: 'Sample Application',
        description: 'The Sample Application is from Oracle. It expects a bunch of stuff',
        doc: 'https://www.okta.com',
        req: req,
        attributes: attributes,
        errors: { errors: errors.array() },
     }
    );
});

router.get('/admin',[
    header('email').isEmail(),
    header('first_name').not().isEmpty(),
    header('last_name').not().isEmpty(),
    header('groups').not().isEmpty(),
    header('host').not().isEmpty(),
  ], (req, res) => {
        
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(JSON.stringify(errors.array()));
    }

    res.render('headerApp', 
     {
        title: 'Sample Application - Admin Interface',
        description: 'The Sample Application is from Oracle. It expects a bunch of stuff',
        doc: 'https://www.okta.com',
        req: req,
        attributes: attributes,
        errors: { errors: errors.array() },
     }
    );
});

router.get('/protected',[
    header('email').isEmail(),
    header('first_name').not().isEmpty(),
    header('last_name').not().isEmpty(),
    header('groups').not().isEmpty(),
    header('host').not().isEmpty(),
  ], (req, res) => {
        
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(JSON.stringify(errors.array()));
    }

    res.render('headerApp', 
     {
        title: 'Sample Application - Protected page',
        description: 'The Sample Application is from Oracle. It expects a bunch of stuff',
        doc: 'https://www.okta.com',
        req: req,
        attributes: attributes,
        errors: { errors: errors.array() },
     }
    );
});



module.exports = router;