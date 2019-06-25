const express = require('express');
const router = express.Router();
const { header, validationResult } = require('express-validator');

var attributes = [
    {"id":"oam_remote_user","description":"User id expected by WebLogic. Typically the LDAP uid, or a primary key on a backend database"},
  ];

router.get('/',[
    header('oam_remote_user').not().isEmpty(),
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(JSON.stringify(errors.array()));
    }

    res.render('headerApp', 
     {
      title: 'Oracle WebLogic',
      description: 'Oracle WebLogic is a J2EE application server. This sample leverages the OAMIdentityAsserter with WebLogic to provide header-based SSO.',
      doc: 'https://docs.oracle.com/middleware/1221/edq/secure/oam.htm#DQSEC936',
      req: req,
      attributes: attributes,
      errors: { errors: errors.array() },
     }
    );
});

module.exports = router;