const model = require('./model.js');

const get = (req, res) => {
  const callback = (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows[0]);
    }
  };
  model.get(req, res, callback);
};

module.exports = { get };
