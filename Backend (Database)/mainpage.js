const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://rhitamdutta1:' + encodeURIComponent('Fly@2102') + 
    '@cluster1.zv9orap.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    const database = client.db('database');
    const detailsagent = database.collection('detailsagent');

    for (let i = 0; i < 20; i++) {
      const names = ["Alice", "Bob", "Charlie", "David", "Emily", "Frank", "Grace", "Henry", "Isabelle", "Jack","Rhitam","Pariansh","Adrija","RAghav","Neharika","Suhani","Priyanka","Aman","Jagrit","rohan","Kabir","Mona","Gaurvi","jiya"];
      const nn = names[Math.floor(Math.random() * names.length)];
      const mm = Math.floor(Math.random() * (99999 - 90000 + 1)) + 90000;
      const areas = ["sector 1","sector 4","sector 8","sector 15","sector 17"];
      const aa = areas[Math.floor(Math.random() * areas.length)];
      const score = Math.floor(Math.random() * (20 - (-10) + 1)) + (-10);
      await detailsagent.insertOne({'_id': i, 'Name': nn, 'Number': mm, 'Area': aa, 'points': score});
    }
  } finally {
    await client.close();
  }
}

console.log("Welcome to homeless");
const inp = prompt("Enter 1 for user\nEnter 2 for contractor");
if (inp === "1") {
  user();
} else if (inp === "2") {
  contractor();
}
