const express = require('express');
const router = express.Router();
const { header, validationResult } = require('express-validator');

const attributes = [
    {"id":"iv-user","description":"User id sent by WebSeal to backend apps. It can be a generic user id or an email"},
    {"id":"iv-groups","description":"User groups separated by comma (,) and quoted )(i.e. \"admin\",\"end-user\").  typically from an LDAP or AD store"},
  ];

const title = 'IBM WebSeal';
const description = 'WebSEAL is a reverse-proxy from IBM that enforces SSO and authorization integrated to IBM Tivoli Access Manager or IBM ISAM. Applications integrated thru WebSeal typically use the same header variables.';
const doc = 'https://www.ibm.com/support/knowledgecenter/en/SSPREK_7.0.0/com.ibm.isam.doc_80/ameb_webplugin_guide/concept/con_sso_plugin_ws.html';

const urls = new Map([['/', 'Index'],['/public', 'Public'],['/private', 'Private'],['/admin', 'Admin']]);

router.get(Array.from(urls.keys()),[
    header('iv-user').not().isEmpty(),
    header('iv-groups').not().isEmpty(),
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