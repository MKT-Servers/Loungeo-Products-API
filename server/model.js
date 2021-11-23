const db = require('../db/index.js');

const get = (req, res, callback) => {
  const text = 'SELECT * FROM product WHERE id = $1';
  const values = [867530];
  db.connect((err, client, done) => {
    if (err) throw err;
    client.query(text, values, (error, result) => {
      done();
      callback(error, result);
    });
  });
};

// const get = callback => {
// const text = 'SELECT * FROM product WHERE id = $1';
// const value = [867530];
// db.connect((err, client, done) => {
//   if (err) throw err;
//   client.query(text, value, )
// })
// }

module.exports = { get };
