const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
var db = null;


client
    .connect()
    .then(c => db = c.db("wedelve"))
    .catch(console.dir);

async function getUserByName(username) {
    return db.collection("users").findOne({ user: username });
}

async function insertUser(user) {
    return db.collection("users").insertOne(user);
}

exports.close = function() {
    return client.close();
};
