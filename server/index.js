const express = require('express');
const app = express();
const controller = require('./controller.js');

// app.use(express.urlencoded({ extended: true}));

// app.use(express.static('client/dist'));

app.use(express.json());

app.get('/', (req, res) => {
  controller.get(req, res);
  // res.send()
});

// Make a route for each atelier

app.listen(3000, () => {
  console.log('Example app listening at http://localhost:3000');
});
