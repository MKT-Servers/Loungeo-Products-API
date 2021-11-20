const { Pool, Client } = require('pg');

const environment = {
  user: 'abefroman',
  host: 'localhost',
  database: 'loungeo',
  port: 5432,
};

const pool = new Pool(environment);
const client = new Client(environment);

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});

client.connect();
client.query('SELECT * from product limit 5', (err, res) => {
  console.log(err ? err : res) // Hello World!
  client.end();
});