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

module.exports = { get };
