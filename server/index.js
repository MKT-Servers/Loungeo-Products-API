const express = require('express');
const app = express();
const controller = require('./controller.js');

// app.use(express.urlencoded({ extended: true}));

// app.use(express.static('client/dist'));

app.use(express.json());

// const modelGet = (callback) => {
//   db.one('SELECT * FROM product LIMIT 5')
//     .then(callback);
// };



app.get('/', (req, res) => {
  controller.get(req, res);
  // res.send('Hello from server/index.js');
  // Replace Hello World with code to query the database
  // controllerGet(req, res);
});

app.listen(3000, () => {
  console.log('Example app listening at http://localhost:3000');
});
