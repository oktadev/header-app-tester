const express = require('express');
const router = express.Router();
const { header, validationResult } = require('express-validator');

var attributes = [
    {"id":"iv-user","description":"User id sent by WebSeal to backend apps. It can be a generic user id or an email"},
    {"id":"iv-groups","description":"User groups separated by comma (,), typically from an LDAP or AD store"},
  ];

router.get('/',[
    header('iv-user').not().isEmpty(),
    header('iv-groups').not().isEmpty(),
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(JSON.stringify(errors.array()));
    }

    res.render('headerApp', 
     {
        title: 'IBM WebSeal - Index',
        description: 'WebSEAL is a reverse-proxy from IBM that enforces SSO and authorization integrated to IBM Tivoli Access Manager or IBM ISAM. Applications integrated thru WebSeal typically use the same header variables.',
        doc: 'https://www.ibm.com/support/knowledgecenter/en/SSPREK_7.0.0/com.ibm.isam.doc_80/ameb_webplugin_guide/concept/con_sso_plugin_ws.html',
        req: req,
        attributes: attributes,
        errors: { errors: errors.array() },
     }
    );
});

router.get('/public',[
  header('iv-user').not().isEmpty(),
  header('iv-groups').not().isEmpty(),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(JSON.stringify(errors.array()));
  }

  res.render('headerApp', 
   {
      title: 'IBM WebSeal - Public',
      description: 'WebSEAL is a reverse-proxy from IBM that enforces SSO and authorization integrated to IBM Tivoli Access Manager or IBM ISAM. Applications integrated thru WebSeal typically use the same header variables.',
      doc: 'https://www.ibm.com/support/knowledgecenter/en/SSPREK_7.0.0/com.ibm.isam.doc_80/ameb_webplugin_guide/concept/con_sso_plugin_ws.html',
      req: req,
      attributes: attributes,
      errors: { errors: errors.array() },
   }
  );
});

router.get('/private',[
    header('iv-user').not().isEmpty(),
    header('iv-groups').not().isEmpty(),
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(JSON.stringify(errors.array()));
    }
  
    res.render('headerApp', 
     {
        title: 'IBM WebSeal - Private',
        description: 'WebSEAL is a reverse-proxy from IBM that enforces SSO and authorization integrated to IBM Tivoli Access Manager or IBM ISAM. Applications integrated thru WebSeal typically use the same header variables.',
        doc: 'https://www.ibm.com/support/knowledgecenter/en/SSPREK_7.0.0/com.ibm.isam.doc_80/ameb_webplugin_guide/concept/con_sso_plugin_ws.html',
        req: req,
        attributes: attributes,
        errors: { errors: errors.array() },
     }
    );
  });

  router.get('/admin',[
    header('iv-user').not().isEmpty(),
    header('iv-groups').not().isEmpty(),
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(JSON.stringify(errors.array()));
    }
  
    res.render('headerApp', 
     {
        title: 'IBM WebSeal - Admin',
        description: 'WebSEAL is a reverse-proxy from IBM that enforces SSO and authorization integrated to IBM Tivoli Access Manager or IBM ISAM. Applications integrated thru WebSeal typically use the same header variables.',
        doc: 'https://www.ibm.com/support/knowledgecenter/en/SSPREK_7.0.0/com.ibm.isam.doc_80/ameb_webplugin_guide/concept/con_sso_plugin_ws.html',
        req: req,
        attributes: attributes,
        errors: { errors: errors.array() },
     }
    );
  });

module.exports = router;