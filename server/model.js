/* eslint-disable max-len */
const db = require('../db/index.js');

const getProduct = (req, res, callback) => {
  // const text = 'SELECT * FROM product WHERE id = $1';
  // const text = 'SELECT product.id, product.name, product.slogan, product.description, product.category, product.default_price  FROM product WHERE product.id = $1';
  const text = 'SELECT * FROM features WHERE product_id = $1';
  const values = req.params.product_id;
  db.connect((err, client, done) => {
    if (err) throw err;
    client.query(text, [values], (error, result) => {
      done();
      // console.log('Result in model: ', result.rows);

      const reformattedArray = result.rows.map((obj) => {
        const rObj = {};
        rObj.feature = obj.feature;
        rObj.value = obj.value;
        return rObj;
      });

      console.log(reformattedArray);

      // console.log('Result in model: ', result.rows.map((item) => item.value));
      callback(error, 'Put what you want to send client here');
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
