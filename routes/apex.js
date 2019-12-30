const express = require('express');
const router = express.Router();
const { header, validationResult } = require('express-validator');

var attributes = [
    {"id":"oam_remote_user","description":"User id expected from APEX. Typically a database user id, like SYS"},
    {"id":"oam_remote_user_email","description":"User email expected from APEX."},
    {"id":"oam_remote_user_groups","description":"User groups separated by collon (:), typically taken from the LDAP or AD"},
  ];

router.get('/',[
  header('oam_remote_user').not().isEmpty(),
  header('oam_remote_user_email').isEmail(),
  header('oam_remote_user_groups').not().isEmpty(),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(JSON.stringify(errors.array()));
  }

  res.render('headerApp', 
   {
      title: 'Oracle Application Express (APEX)',
      description: 'Oracle APEX is an application provided with the Oracle Database Enterprise Edition to create application from Database tables.',
      doc: 'https://onlineappsdba.com/index.php/2012/01/12/oracle-apex-41-integration-with-oracle-access-manager-oam-11g-for-single-sign-on-sso/',
      req: req,
      attributes: attributes,
      errors: { errors: errors.array() },
   }
  );
});

module.exports = router;