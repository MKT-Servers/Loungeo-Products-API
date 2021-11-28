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

  // Lines for querying styles table:
  const text = 'SELECT styles.style_id, styles.name, styles.sale_price, styles.original_price, styles.default_style FROM styles WHERE styles.product_id = $1';
  const values = req.params.product_id;

  // Lines for querying photos table:
  // const text = 'SELECT * FROM photos WHERE product_id = $1';
  // const values = req.params.product_id;

  db.connect((err, client, done) => {
    if (err) throw err;
    client.query(text, [values], (error, result) => {
      done();

      // These lines make an array that will serve as the 'results' of the styles object
      const reformattedStyles = result.rows.map((obj) => {
        const rObj = {};
        rObj.style_id = obj.style_id;
        rObj.name = obj.name;
        rObj.original_price = obj.original_price;
        rObj.sale_price = obj.sale_price;
        rObj['default?'] = obj.default_style;
        return rObj;
      });

      console.log('Result: ', reformattedStyles);
      callback(error, 'Here is what you want to send to client');
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
