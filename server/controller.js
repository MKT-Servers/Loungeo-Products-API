const model = require('./model.js');

const get = (req, res, cb) => {
  const callback = (err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result.rows[0]);
    }
  };
  model.get(req, res, callback);
};

// const get = (req, res) => {
//   model.get((err, data) => {
//     if (err) {
//       res.status(400).send();
//     } else {
//       res.status(200).send(data);
//     }
//   });
// };

module.exports = { get };
