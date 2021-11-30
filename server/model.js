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

      // for (let i = 0; i < formattedReturn.results.length; i++) {
      //   for (let j = 0; j < result.rows.length; j++) {
      //     if (formattedReturn.results[i].style_id === result.rows[j].style_id) {
      //       formattedReturn.results[i].skus[result.rows[j].sku_id] = result.rows[j].sku_id;
      //       formattedReturn.results[i].skus[result.rows[j].sku_id]
      //     }
      //   }
      // }

//       const numberOfStyles = formattedReturn.results.length;
//       const styleBlockSize = result.rows.length / numberOfStyles;
//       console.log('# of styles: ', numberOfStyles);
//       console.log('Block size: ', styleBlockSize);

//       const singleStyleBatch = result.rows.slice(0, styleBlockSize);
//       console.log('Length of Batch:', singleStyleBatch.length);

// const skuRegistered = {};

//       singleStyleBatch.forEach((element) => {
//         if(!skuRegistered[element.sku_id]) {
//           formattedReturn
//         }
//       })

      // These lines make an array that will serve as the 'results' of the styles object
      // const reformattedStyles = result.rows.map((obj) => {
      //   const rObj = {};
      //   rObj.style_id = obj.style_id;
      //   rObj.name = obj.name;
      //   rObj.original_price = obj.original_price;
      //   rObj.sale_price = obj.sale_price;
      //   rObj['default?'] = obj.default_style;
      //   return rObj;
      // });
      // console.log('Number of hits: ', result.rows.length);
      // console.log('Raw Returns: ', result.rows);
      // console.log('Result: ', reformattedStyles);
      console.log('result.rows: ', result.rows);
      // console.log('Formatted return: ', formattedReturn);
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
