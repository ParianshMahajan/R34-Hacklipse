const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://rhitam:Fly1234@cluster0.dolupyw.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB Atlas:', err);
    return;
  }

  console.log('Connected to MongoDB Atlas');

  // do something with the connected client, such as accessing a database or collection
});
