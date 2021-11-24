const express = require('express');

const app = express();
const controller = require('./controller.js');

// app.use(express.urlencoded({ extended: true}));

// app.use(express.static('client/dist'));

app.use(express.json());

app.get('/products/:product_id', (req, res) => {
  controller.get(req, res, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.get('/products/:product_id/styles', (req, res) => {
  controller.get(req, res, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send('Heard it on styles');
      // res.status(200).send(result);
    }
  });
});

// Make a route for each atelier query

app.listen(3000, () => {
  console.log('App listening at http://localhost:3000');
});
