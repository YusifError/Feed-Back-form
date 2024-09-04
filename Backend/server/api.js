const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json()); // чтобы сервер мог обрабатывать JSON данные

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/users', (req, res) => {
  // Обработка полученных данных
  const userData = req.body;
  console.log('Received data:', userData)
  res.status(200).json({message: 'Данные успешно перенаправлены'});
  res.send('Данные успешно получены!');
});

app.enable({
  origin: [
    'http://127.0.0.1:5173',
    'http://127.0.0.1:5000',
    'http://localhost:5173',
    'http://localhost:5000',
    'http://client:5000',
    'http://client'
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});