const express = require('express');

const app = express();
// const pgp = require('pg-promise')(/* options */);

// const connection = {
//   host: 'localhost',
//   port: 3000,
//   database: 'loungeo',
//   user: 'postgres',
// };

// const db = pgp(connection);

// app.use(express.urlencoded({ extended: true}));

// app.use(express.static('client/dist'));

app.use(express.json());

// const modelGet = (callback) => {
//   db.one('SELECT * FROM product LIMIT 5')
//     .then(callback);
// };

// const controllerGet = (req, res) => {
//   const callback = (err, results) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(results);
//     }
//   };
//   modelGet(callback);
// };

app.get('/', (req, res) => {
  res.send('Hello World!');
  // Replace Hello World with code to query the database
  // controllerGet(req, res);
});

app.listen(3000, () => {
  console.log('Example app listening at http://localhost:3000');
});
