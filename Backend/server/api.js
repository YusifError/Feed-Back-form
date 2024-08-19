require("dotenv").config()

const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const { findOne, collection } = require("../models/feedback");
const uri = process.env.URI

const mongoClient = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("FeedBack");
        const collection = db.collection("userfb");
        const count = await collection.countDocuments();
        console.log(`В коллекции ${count} документов`)
        const results = await collection.find().toArray();
        console.log(results);
        const user = {name: "Tom", age:28};
        const result = await collection.insertOne(user)
        module.exports = results;
        console.log(result)
        console.log(user)
    }catch(err) {
        console.log(err);
    }finally {
        await mongoClient.close();
    }
}

run().catch(console.dir);
