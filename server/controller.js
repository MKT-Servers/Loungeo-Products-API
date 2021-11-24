const model = require('./model.js');

const getProduct = (req, res, cb) => {
  const callback = (err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result.rows[0]);
    }
  };
  model.getProduct(req, res, callback);
};

const getStyles = (req, res, cb) => {
  const callback = (err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result.rows[0]);
    }
  };
  model.getStyles(req, res, callback);
};

module.exports = { getProduct, getStyles };
