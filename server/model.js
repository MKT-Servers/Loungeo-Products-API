const db = require('../db/index.js');

const getProduct = (req, res, callback) => {
  const text = 'SELECT * FROM product WHERE id = $1';
  const values = req.params.product_id;
  db.connect((err, client, done) => {
    if (err) throw err;
    client.query(text, [values], (error, result) => {
      done();
      callback(error, result);
    });
  });
};

const getStyles = (req, res, callback) => {
  const text = 'SELECT * FROM styles WHERE product_id = $1';
  const values = req.params.product_id;
  db.connect((err, client, done) => {
    if (err) throw err;
    client.query(text, [values], (error, result) => {
      done();
      callback(error, result);
    });
  });
};

const getRelated = (req, res, callback) => {
  const text = 'SELECT * FROM related WHERE current_product_id = $1';
  const values = req.params.product_id;
  db.connect((err, client, done) => {
    if (err) throw err;
    client.query(text, [values], (error, result) => {
      done();
      const relateds = result.rows.map((item) => item.related_item_id);
      callback(error, relateds);
    });
  });
};

module.exports = { getProduct, getStyles, getRelated };
