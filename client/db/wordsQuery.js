var MongoClient = require('mongodb').MongoClient;

var WordsQuery = function(){
  // hit database
  this.url = "mongodb://localhost:27017/italian";
};

WordsQuery.prototype = {
  // get all whiskies(docs)out of DB
  all: function(callback){
    MongoClient.connect(this.url, function(err, db){
      var collection = db.collection('words');
      collection.find().toArray(function(err, result){
        callback(result);
      });
    });
  },

// callback is function we want to be executed once whisky has been added
  add: function(filmToAdd, callback){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('words');
        collection.insert(wordToAdd);
        // return all whiskies
        collection.find().toArray(function(err, results){
          callback(results);
        });
      };
    });
  }

}



module.exports = WordsQuery;