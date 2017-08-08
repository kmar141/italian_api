var express = require('express');
var app = express();
var wordsRouter = express.Router();



var Words = require('../client/db/wordsQuery');
var query = new Words;

wordsRouter.get('/', function(req, res) {
  // 'results' from database and then send to json
  query.all(function(results){
    res.json(results);
  })
});



module.exports = wordsRouter;