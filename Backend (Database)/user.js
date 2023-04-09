const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://rhitamdutta1:' + encodeURIComponent('Fly@2102') + '@cluster1.zv9orap.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { tlsCAFile: certifi.where() });
const db = client.database;
const query = db.collection('query');
const detailsuser = db.collection('userdetails');

const myquery = { _id: m };
const newvalues = { $set: { points: p + 1 } };
detailsuser.updateOne(myquery, newvalues);

const aa = prompt("Enter area");
const current_time = new Date();
query.insertOne({ name: n, area: aa, time: current_time });
