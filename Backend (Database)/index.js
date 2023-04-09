const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017/database'; 
MongoClient.connect(url, function(err, client) {
    if (err) throw err;
  
    console.log("Connected to MongoDB!");
  
    // Do something with the database here
  
    client.close();
  });
  