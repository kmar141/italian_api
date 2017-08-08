var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(require('./controllers/index'));


app.listen(3000, function () {
  console.log('App running on port ' + this.address().port);
});