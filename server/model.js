// const db = require('../../db/index.js');

const get = (req, res, callback) => {

  res.send('Hello from server/modell');

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
