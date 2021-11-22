const db = require('../db/index.js');

const get = (req, res, callback) => {
  // console.log('req.query in model.js: ', req.query);

  const text = 'SELECT * FROM product WHERE id = $1';
  const values = [867530];

  db.connect((err, client, done) => {
    if (err) throw err;
    client.query(text, values, (err, res) => {
      done();
      callback(err, res);
    });
  });
};

module.exports = { get };
