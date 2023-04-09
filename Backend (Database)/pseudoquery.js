const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://rhitamdutta1:Fly@2102@cluster1.zv9orap.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function insertData() {
  try {
    await client.connect();

    const db = client.db('database');
    const query = db.collection('query');

    const names = ["Alice", "Bob", "Charlie", "David", "Emily", "Frank", "Grace", "Henry", "Isabelle", "Jack","Rhitam","Pariansh","Adrija","RAghav","Neharika","Suhani","Priyanka","Aman","Jagrit","rohan","Kabir","Mona","Gaurvi","jiya"];
    const areas = ["sector 1","sector 4","sector 8","sector 15","sector 17"];
    const numDocs = 90;

    for (let i = 0; i < numDocs; i++) {
      const name = names[Math.floor(Math.random() * names.length)];
      const area = areas[Math.floor(Math.random() * areas.length)];
      const time = new Date();
      const result = await query.insertOne({ name, area, time });
      console.log(`Inserted document with _id: ${result.insertedId}`);
    }

  } finally {
    await client.close();
  }
}

insertData();
