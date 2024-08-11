const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const Feedback = require('../models/feedback')

const port = 3000;
//const uri = "mongodb+srv://yusifgurbanov:fkKghqg5Xjk7XaNR@profilefaces.lgnco8f.mongodb.net/?appName=ProfileFaces";
const uri = "mongodb+srv://yusifgurbanov:fkKghqg5Xjk7XaNRprofilefaces.mongodb.net/?appName=ProfileFaces?authSource=admin&compressors=zlib&retryWrites=true&w=majority&ssl=true"

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect(
            process.env.MONGO_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            });
        await client.db("admin").command({ ping: 1 });
        console.log("База данных успешно подключена!");
    } finally {
        await client.close();
    }
}

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.post('/feedback', (req, res) => {
    const { name, email, message } = req.body;
    const feedback = new Feedback({ name, email, message });
    feedback
        .save()
        .then((result) => res.send(result))
        .catch((error) => {
            console.log(error);
        })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

run().catch(console.dir);