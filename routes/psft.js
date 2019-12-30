const express = require('express');
const router = express.Router();
const { header, validationResult } = require('express-validator');

var title = 'Oracle Peoplesoft';
var description = 'Oracle Peopleosft provides a suite of Enterprise Apps. This sample leverages the Signon Peoplecode provided with PeopleSoft to deliver header-based SSO. This is the same integration standard used by multiple PeopleSoft applications, including: HCM, CRM, Financial, E-Learning, and a Campus Platform (for the Education sector).';
var doc = 'https://docs.oracle.com/cd/E91187_01/pt855pbr2/eng/pt/tsec/task_ImplementingOracleAccessManagerasthePeopleSoftSingleSignonSolution-b0787e.html?pli=ul_d169e130_tsec';

let urls = new Map([['/crm', 'CRM'],['/hcm', 'HR'],['/elm', 'Learning'],['/fscm', 'Financials'],['/camp','Campus']]);

var attributes = [
    {"id":"ps_user","description":"User id expected by PeopleSoft. Typically first initial + last name"},
  ];

router.get(Array.from(urls.keys()),[
    header('ps_user').not().isEmpty(),
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(JSON.stringify(errors.array()));
    }

    res.render('headerApp', 
     {
      title: title +' - '+ urls.get(req.url),
      description: description,
      doc: doc,
      req: req,
      attributes: attributes,
      errors: { errors: errors.array() },
     }
    );
});

module.exports = router;