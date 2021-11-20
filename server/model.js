const db = require('../db/index.js');

const get = (req, res, callback) => {
  // db.connect();
// console.log("hello server");
  res.send(db.connect());

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
