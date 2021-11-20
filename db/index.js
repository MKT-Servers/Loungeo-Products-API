const { Pool } = require('pg');
const config = require('./config.js');

const pool = {};

pool.connect = () => {
  console.log('Hello from db');
};

// const pool = new Pool(config);

// pool.connect ((err, client, done) => {
//   if (err) throw err;
//   client.query('SELECT * FROM product WHERE id = $1', [9], (err, res) => {
//     done();
//     if (err) {
//       console.log(err.stack);
//     } else {
//       console.log(res.rows[0]);
//     }
//   });
// });

module.exports = pool;
