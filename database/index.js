const { Pool} = require('pg');
const environment = require('./environment.js');

const pool = new Pool(environment);
// const client = new Client(environment);

pool.connect((err, client, done) => {
  if (err) throw err
  client.query('SELECT * FROM product WHERE id = $1', [5], (err, res) => {
    done()
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res.rows[0])
    }
  })
});