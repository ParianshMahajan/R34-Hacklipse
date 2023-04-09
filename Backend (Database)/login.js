const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://rhitamdutta1:" + encodeURIComponent("Fly@2102") + "@cluster1.zv9orap.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

client.connect(err => {
    const db = client.db("database");
    const detailsuser = db.collection("detailsuser");

    const user = () => {
        const nn = prompt("Enter UID");
        const que = { "_id": nn };
        const i = detailsuser.findOne(que);
        if (i) {
            const m = i["_id"];
            const p = i["points"];
            const n = i["Name"];
        } else {
            console.log("nonee");
        }
    }

    const contracter = () => {
        console.log("d");
    }

    console.log("Welcome to homeless");
    const inp = prompt("Enter 1 for user\n      2 for contracter");
    if (inp == 1) {
        user();
    } else if (inp == 2) {
        contracter();
    }

    client.close();
});
