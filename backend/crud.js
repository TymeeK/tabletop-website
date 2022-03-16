const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
var db = null;


client
    .connect()
    .then(c => db = c.db("wedelve"))
    .then(_ => console.log("Connected to database."))
    .catch(console.dir);

exports.getUserByName = async function(username) {
    return db.collection("users").findOne({ user: username });
}

exports.insertUser = async function(user) {
    return db.collection("users").insertOne(user);
}

exports.close = function() {
    return client.close();
};
