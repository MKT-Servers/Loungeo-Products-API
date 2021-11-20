const db = require('../db/index.js');

const get = (req, res, callback) => {
  res.send(db.connect(
    (err, client, done) => {
      if (err) throw err;
      client.query('SELECT * FROM product WHERE id = $1', [9], (err, res) => {
        done();
        callback(err, res);
      });
    },
  ));
};

module.exports = { get };
