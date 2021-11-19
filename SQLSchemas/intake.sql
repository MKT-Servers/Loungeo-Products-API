-- Change the path in the next line to relative path before submitting final repo
/* psql -d loungeo -f /Users/abefroman/Documents/HRSF138/SDC/Loungeo/Products/Loungeo-Products-API/SQLSchemas/intake.sql */

\c loungeo;

COPY product(id, name, slogan, description, category, default_price)
FROM '/Users/abefroman/Documents/HRSF138/SDC/Loungeo/product.csv'
DELIMITER ','
CSV HEADER;

COPY features(feature_id, product_id, feature, value)
FROM '/Users/abefroman/Documents/HRSF138/SDC/Loungeo/features.csv'
DELIMITER ','
CSV HEADER;

COPY styles(style_id, product_id, name, sale_price, original_price, default_style)
FROM '/Users/abefroman/Documents/HRSF138/SDC/Loungeo/styles.csv'
DELIMITER ','
CSV HEADER;

COPY photos(photo_id, style_id, url, thumbnail_url)
FROM '/Users/abefroman/Documents/HRSF138/SDC/Loungeo/photosfixed.csv'
DELIMITER ','
CSV HEADER;

COPY skus(sku_id, style_id, size, quantity)
FROM '/Users/abefroman/Documents/HRSF138/SDC/Loungeo/skus.csv'
DELIMITER ','
CSV HEADER;

COPY related(related_item_id, current_product_id, related_product_id)
FROM '/Users/abefroman/Documents/HRSF138/SDC/Loungeo/related.csv'
DELIMITER ','
CSV HEADER;
