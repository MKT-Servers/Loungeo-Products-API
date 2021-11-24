const db = require('../db/index.js');

const get = (req, res, callback) => {
  const text = 'SELECT * FROM product WHERE id = $1';
  const values = req.params.product_id;
  // console.log('values: ', values);
  db.connect((err, client, done) => {
    if (err) throw err;
    client.query(text, [values], (error, result) => {
      done();
      callback(error, result);
    });
  });
};

module.exports = { get };
