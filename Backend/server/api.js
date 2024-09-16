const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let receivedData = [];

app.post('/users', (req,res) => {
    receivedData.push(req.body);
    res.json({message: 'Данные успешно сохранены!'})
});


app.get('/users', (req,res) => {
    res.json(receivedData)
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});

