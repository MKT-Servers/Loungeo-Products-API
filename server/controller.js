const model = require('./model.js');

const getProduct = (req, res, cb) => {
  const callback = (err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result);
    }
  };
  model.getProduct(req, res, callback);
};

const getStyles = (req, res, cb) => {
  const callback = (err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result);
    }
  };
  model.getStyles(req, res, callback);
};

const getRelated = (req, res, cb) => {
  const callback = (err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result);
    }
  };
  model.getRelated(req, res, callback);
};

module.exports = { getProduct, getStyles, getRelated };
