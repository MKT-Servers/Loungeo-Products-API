const model = require('./model.js');

const get = (req, res) => {
  const callback = (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows[0]);
      // res.send('Response from controller');
      console.log('Properties of res: ', Object.keys(res));
    }
  };
  model.get(req, res, callback);
};

module.exports = { get };
