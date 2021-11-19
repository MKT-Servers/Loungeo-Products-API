-- Change the path in the next line to relative path before submitting final repo
/* psql -d loungeo -f /Users/abefroman/Documents/HRSF138/SDC/Loungeo/Products/Loungeo-Products-API/SQLSchemas/postgresqlschema.sql */

\c loungeo;

DROP DATABASE IF EXISTS loungeo;
CREATE DATABASE loungeo;

DROP TABLE IF EXISTS product;
CREATE TABLE product (
  id integer NOT NULL,
  name varchar(255) NOT NULL,
  slogan varchar(255) NOT NULL,
  description TEXT NOT NULL,
  category varchar(255) NOT NULL,
  default_price varchar(255) NOT NULL,
  CONSTRAINT product_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);

DROP TABLE IF EXISTS features;
CREATE TABLE features (
  feature_id integer NOT NULL,
  product_id integer NOT NULL,
  feature varchar(255) NOT NULL,
  value varchar(255) NOT NULL,
  CONSTRAINT features_pk PRIMARY KEY (feature_id)
) WITH (
  OIDS=FALSE
);

DROP TABLE IF EXISTS styles;
CREATE TABLE styles (
  style_id integer NOT NULL,
  product_id integer NOT NULL,
  name varchar(255) NOT NULL,
  sale_price varchar(255) NOT NULL,
  original_price varchar(255) NOT NULL,
  default_style BOOLEAN NOT NULL,
  CONSTRAINT styles_pk PRIMARY KEY (style_id)
) WITH (
  OIDS=FALSE
);

DROP TABLE IF EXISTS photos;
CREATE TABLE photos (
  photo_id integer NOT NULL,
  style_id integer NOT NULL,
  url TEXT NOT NULL,
  thumbnail_url TEXT NOT NULL,
  CONSTRAINT photos_pk PRIMARY KEY (photo_id)
) WITH (
  OIDS=FALSE
);

DROP TABLE IF EXISTS skus;
CREATE TABLE skus (
  sku_id integer NOT NULL,
  style_id integer NOT NULL,
  size varchar(255) NOT NULL,
  quantity integer NOT NULL,
  CONSTRAINT skus_pk PRIMARY KEY (sku_id)
) WITH (
  OIDS=FALSE
);

DROP TABLE IF EXISTS related;
CREATE TABLE related (
  related_item_id integer NOT NULL,
  current_product_id integer NOT NULL,
  related_product_id integer NOT NULL,
  CONSTRAINT related_pk PRIMARY KEY (related_item_id)
) WITH (
  OIDS=FALSE
);

DROP TABLE IF EXISTS product_features;
CREATE TABLE product_features (
  product_features_id integer NOT NULL,
  product_id integer NOT NULL,
  feature_id integer NOT NULL,
  CONSTRAINT product_features_pk PRIMARY KEY (product_features_id)
) WITH (
  OIDS=FALSE
);

-- ALTER TABLE styles ADD CONSTRAINT styles_fk0 FOREIGN KEY (product_id) REFERENCES products(id);

-- ALTER TABLE photos ADD CONSTRAINT photos_fk0 FOREIGN KEY (style_id) REFERENCES styles(style_id);

-- ALTER TABLE skus ADD CONSTRAINT skus_fk0 FOREIGN KEY (style_id) REFERENCES styles(style_id);

-- ALTER TABLE related ADD CONSTRAINT related_fk0 FOREIGN KEY (product_id) REFERENCES products(id);
-- ALTER TABLE related ADD CONSTRAINT related_fk1 FOREIGN KEY (related_item_id) REFERENCES products(id);

-- ALTER TABLE product_features ADD CONSTRAINT product_features_fk0 FOREIGN KEY (product_id) REFERENCES products(id);
-- ALTER TABLE product_features ADD CONSTRAINT product_features_fk1 FOREIGN KEY (feature_id) REFERENCES features(feature_id);
