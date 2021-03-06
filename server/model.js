/* eslint-disable max-len */
const db = require('../db/index.js');

const getProduct = (req, res, callback) => {
  const text = `SELECT product.id, product.name,
  product.slogan, product.description,
  product.category, product.default_price,
  features.feature, features.value
  FROM product, features
  WHERE product.id = $1
  AND features.product_id = $1`;
  const values = req.params.product_id;
  db.connect((err, client, done) => {
    if (err) throw err;
    client.query(text, [values], (error, result) => {
      if (error) {
        console.log(error);
        callback(error);
      } else {
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
      }
    });
  });
};

const getStyles = (req, res, callback) => {
  const text = `SELECT styles.style_id, styles.name,
  styles.sale_price, styles.original_price,
  styles.default_style,
  photos.photo_id, photos.url, photos.thumbnail_url,
  skus.sku_id, skus.size, skus.quantity
  FROM styles, photos, skus
  WHERE styles.product_id = $1
  AND photos.style_id = styles.style_id
  AND skus.style_id = styles.style_id`;
  const values = req.params.product_id;

  db.connect((err, client, done) => {
    if (err) throw err;
    client.query(text, [values], (error, result) => {
      done();

      const formattedReturn = {};
      formattedReturn.product_id = values;
      formattedReturn.results = [];
      const stylesRegistered = {};

      result.rows.forEach((element) => {
        if (!stylesRegistered[element.style_id]) {
          formattedReturn.results.push({
            style_id: element.style_id,
            name: element.name,
            original_price: element.original_price,
            sale_price: element.sale_price,
            'default?': element.default_style,
            photos: [],
            skus: {},
          });
          stylesRegistered[element.style_id] = true;
        }
      });
      callback(error, formattedReturn);
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
