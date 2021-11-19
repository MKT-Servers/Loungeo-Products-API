-- Change the path in the next line to relative path before submitting final repo
/* psql -d loungeo -f /Users/abefroman/Documents/HRSF138/SDC/Loungeo/Products/Loungeo-Products-API/SQLSchemas/intake.sql */

\c loungeo;

COPY product(id, name, slogan, description, category, default_price)
FROM '/Users/abefroman/Documents/HRSF138/SDC/Loungeo/Products/Loungeo-Products-API/RawData/product.csv'
DELIMITER ','
CSV HEADER;

COPY features(feature_id, product_id, feature, value)
FROM '/Users/abefroman/Documents/HRSF138/SDC/Loungeo/Products/Loungeo-Products-API/RawData/features.csv'
DELIMITER ','
CSV HEADER;

COPY styles(style_id, product_id, name, sale_price, original_price, default_style)
FROM '/Users/abefroman/Documents/HRSF138/SDC/Loungeo/Products/Loungeo-Products-API/RawData/styles.csv'
DELIMITER ','
CSV HEADER;

COPY photos(photo_id, style_id, url, thumbnail_url)
FROM '/Users/abefroman/Documents/HRSF138/SDC/Loungeo/Products/Loungeo-Products-API/RawData/photosfixed.csv'
DELIMITER ','
CSV HEADER;

COPY skus(sku_id, style_id, size, quantity)
FROM '/Users/abefroman/Documents/HRSF138/SDC/Loungeo/Products/Loungeo-Products-API/RawData/skus.csv'
DELIMITER ','
CSV HEADER;

COPY related(related_item_id, current_product_id, related_product_id)
FROM '/Users/abefroman/Documents/HRSF138/SDC/Loungeo/Products/Loungeo-Products-API/RawData/related.csv'
DELIMITER ','
CSV HEADER;
