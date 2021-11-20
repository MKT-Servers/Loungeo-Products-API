const db = require('../db/index.js');

const get = (req, res, callback) => {
  // db.connect();
// console.log("hello server");
  res.send(db.connect(

    (err, client, done) => {
      if (err) throw err;
      client.query('SELECT * FROM product WHERE id = $1', [9], (err, res) => {
        done();
        if (err) {
          console.log(err.stack);
        } else {
          console.log(res.rows[0]);
        }
      });
    })

  );

  // db.query(
  //   `SELECT * FROM groceries`,
  //   (err, groceries) => {
  //     if (err) {
  //       callback(err);
  //     } else {
  //       callback(null, groceries)
  //     }
  //   }
  // )
};

module.exports = { get };
