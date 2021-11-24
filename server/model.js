/* eslint-disable max-len */
const db = require('../db/index.js');

const getProduct = (req, res, callback) => {
  const text = 'SELECT product.id, product.name, product.slogan, product.description, product.category, product.default_price, features.feature, features.value FROM product, features WHERE product.id = $1 AND features.product_id = $1';
  const values = req.params.product_id;
  db.connect((err, client, done) => {
    if (err) throw err;
    client.query(text, [values], (error, result) => {
      done();
      const reformattedFeatures = result.rows.map((obj) => {
        const rObj = {};
        rObj.feature = obj.feature;
        rObj.value = obj.value;
        return rObj;
      });
      const singleProduct = result.rows[0];
      delete singleProduct.feature;
      delete singleProduct.value;
      singleProduct.features = reformattedFeatures;
      callback(error, singleProduct);
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
