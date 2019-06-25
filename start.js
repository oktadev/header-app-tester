const app = require('./app');

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
const server = app.listen(port, () => {
  console.log(`Express is running on port ${server.address().port}`);
});