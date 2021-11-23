const express = require('express');

const app = express();
const controller = require('./controller.js');

// app.use(express.urlencoded({ extended: true}));

// app.use(express.static('client/dist'));

app.use(express.json());

app.get('/products', (req, res) => {

  controller.get(req, res, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log(result);
      res.status(200).send(result);
    }
  });
  // res.send('Hardcoded response from index');
});

// Make a route for each atelier query

app.listen(3000, () => {
  console.log('App listening at http://localhost:3000');
});
