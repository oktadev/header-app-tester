# header-app-tester

For testing apps protected with header-based authentication

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Samples currently supported

- Header-Based App
- Oracle Application Express (APEX)
- Oracle WebLogic Server
- Oracle PeopleSoft CRM
- Oracle PeopleSoft HCM
- Oracle PeopleSoft Enterprise Learning Management
- Oracle PeopleSoft Financial
- Oracle PeopleSoft Campus
- IBM WebSeal

## How to extend the tester with more samples

Extend `routes/index.js` with a new route for your app:

```
router.use('/webseal', require('./webseal'));
```

Create a file for your route by copying the sample file to `webseal.js` :

```
cd routes
cp sample_app.js webseal.js
```

Edit your route (i.e. `routes/webseal.js`) file on the following sections:

**Headers**: Update the `attributes` constant with each header name and description expected by the sample app. For example:
```
const attributes = [
  {"id":"iv-user","description":"User id sent by WebSeal to backend apps. It can be a generic user id or an email"},
  {"id":"iv-groups","description":"User groups separated by comma (,) and quoted )(i.e. \"admin\",\"end-user\").  typically from an LDAP or AD store"},
];
```

**Metadata**: Update the `title`, `description`, and `doc` constant with the application metadata. For example:
```
const title = 'IBM WebSeal';
const description = 'WebSEAL is a reverse-proxy from IBM that enforces SSO and authorization integrated to IBM Tivoli Access Manager or IBM ISAM. Applications integrated thru WebSeal typically use the same header variables.';
const doc = 'https://www.ibm.com/support/knowledgecenter/en/SSPREK_7.0.0/com.ibm.isam.doc_80/ameb_webplugin_guide/concept/con_sso_plugin_ws.html';
```

**URLs**: Update the `urls` constant with each uri and description expected by the sample app. For example:
```
const urls = new Map([['/', 'Index'],['/public', 'Public'],['/private', 'Private'],['/admin', 'Admin']]);
```

**Header validation**: Update the router path with the header validations to be executed. The header validation (i.e. `header('oam_remote_user').not().isEmpty().isEmail(),`) is executed using `express-validator` (examples of validation and sanitization here: https://express-validator.github.io/docs/sanitization.html).

```
router.get(Array.from(urls.keys()),[
    header('iv-user').not().isEmpty(),
    header('iv-groups').not().isEmpty(),
```
