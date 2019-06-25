const express = require('express')
const app = express();
const path = require('path');
const routes = require('./routes/index');


app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'pug');

app.use(routes);

module.exports = app;