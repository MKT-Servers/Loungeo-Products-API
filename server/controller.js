const model = require('./model.js');

const get = (req, res) => {


  const callback = () => {};
  model.get(req, res, callback);
  // res.send('Hello from server/controller');
};

// const get = (req, res) => {
//   const callback = (err, results) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(results);
//     }
//   };
//   modelGet(callback);
// };

module.exports = { get };
