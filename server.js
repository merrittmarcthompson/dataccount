const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello there World!');
});

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('myapp listening on port ' + port);
});