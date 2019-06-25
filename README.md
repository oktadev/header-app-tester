# header-app-tester

For testing apps protected with header-based authentication

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Samples currently supported

- Header-Based App
- Oracle Application Express (APEX)
- Oracle WebLogic Server

## How to extend the tester with more samples

For example: with WebLogic:

Extend `routes/index.js` with a new route for your app:

```
router.use('/weblogic', require('./weblogic'));
```

Create a file for your route by copying the sample file to `weblogic.js` :

```
cd routes
cp sample_app.js weblogic.js
```

Edit your route (i.e. `routes/weblogic.js`) file on the following sections:

**Attributes variable**: Provides a description for the header variables expected by the app. For example:
```
var attributes = [
    {"id":"oam_remote_user","description":"Login expected by WebLogic when the OAMIdentityAsserter is userd"},
  ];
```

**Router path and Header validation**: The router path (for example '/') is the url where the headers are expected. The header validation (i.e. `header('oam_remote_user').not().isEmpty().isEmail(),`) is executed using `express-validator` (examples of validation and sanitization here: https://express-validator.github.io/docs/sanitization.html).

```
router.get('/',[
    header('oam_remote_user').not().isEmpty().isEmail(),
  ], (req, res) => {
```

**Metadata**: Provide a meta description for the app. For example:

```
     {
        title: 'Oracle WebLogic',
        description: 'Oracle WebLogic is a J2EE application server. This sample leverages the OAMIdentityAsserter with WebLogic to provide header-based SSO.',
        doc: 'https://docs.oracle.com/middleware/1221/edq/secure/oam.htm#DQSEC936', <==== THIS ATTRIBUTE IS OPTIONAL
        req: req,
        attributes: attributes,
        errors: { errors: errors.array() },
     }
```

**Additional routes**: If your application expects URL authorization from Okta or different headers per url, you can create additional routes such as /admin. For example:

```
router.get('/admin',[ 
    ...
]);
```

If additional routes are not required, delete the previous ones.
