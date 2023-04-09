const { MongoClient } = require('mongodb');
const { URL } = require('url');
const https = require('https');

const uri = 'mongodb+srv://<username>:<password>@cluster1.zv9orap.mongodb.net/<database>?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  tlsCAFile: https.globalAgent.options.ca[0].context.context
});

const db = client.db('<database>');
const query = db.collection('query');

const name = ''; // set name here
const aa = prompt('Enter area');
const current_time = new Date();

query.insertOne({ name, area: aa, time: current_time }, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Document inserted');
  }
  
  client.close();
});
