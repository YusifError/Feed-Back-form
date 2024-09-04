require("dotenv").config()

const Results = require('./api.js')
const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');
const Feedback = require('../models/feedback')

const uri = "mongodb+srv://yusifgurbanov:2CV6BHOKlzMtsASr@profilefaces.lgnco8f.mongodb.net/?retryWrites=true&w=majority&appName=ProfileFaces";
const port = 3000;
const app = express();

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("База данных успешно подключена!");
  } finally {
    await client.close();
  }
}

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(Results)
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

export default client;