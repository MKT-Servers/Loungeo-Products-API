-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Products'
--
-- ---

DROP TABLE IF EXISTS `Products`;

CREATE TABLE `Products` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` CHAR(50) NULL DEFAULT NULL,
  `slogan` CHAR(100) NULL DEFAULT NULL,
  `description` CHAR(200) NULL DEFAULT NULL,
  `category` CHAR(50) NULL DEFAULT NULL,
  `default_price` CHAR(15) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Features'
--
-- ---

DROP TABLE IF EXISTS `Features`;

CREATE TABLE `Features` (
  `feature_id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `feature` CHAR(50) NULL DEFAULT NULL,
  `value` CHAR(50) NULL DEFAULT NULL,
  `product_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`feature_id`)
);

-- ---
-- Table 'Styles'
--
-- ---

DROP TABLE IF EXISTS `Styles`;

CREATE TABLE `Styles` (
  `style_id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` CHAR(50) NULL DEFAULT NULL,
  `original_price` CHAR(15) NULL DEFAULT NULL,
  `sale_price` CHAR(15) NULL DEFAULT NULL,
  `default?` BINARY NULL DEFAULT NULL,
  `product_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`style_id`)
);

-- ---
-- Table 'Photos'
--
-- ---

DROP TABLE IF EXISTS `Photos`;

CREATE TABLE `Photos` (
  `photo_id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `thumbnail_url` CHAR(100) NULL DEFAULT NULL,
  `url` CHAR(100) NULL DEFAULT NULL,
  `style_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`photo_id`)
);

-- ---
-- Table 'SKUs'
--
-- ---

DROP TABLE IF EXISTS `SKUs`;

CREATE TABLE `SKUs` (
  `sku_id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `quantity` INTEGER NULL DEFAULT NULL,
  `size` CHAR(5) NULL DEFAULT NULL,
  `style_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`sku_id`)
);

-- ---
-- Table 'Related'
--
-- ---

DROP TABLE IF EXISTS `Related`;

CREATE TABLE `Related` (
  `related_item_id` INTEGER NULL DEFAULT NULL,
  `product_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`related_item_id`)
);

-- ---
-- Table 'ProductFeatures'
--
-- ---

DROP TABLE IF EXISTS `ProductFeatures`;

CREATE TABLE `ProductFeatures` (
  `product_features_id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `product_id` INTEGER NULL DEFAULT NULL,
  `feature_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`product_features_id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `Products` ADD FOREIGN KEY (id) REFERENCES `Related` (`related_item_id`);
ALTER TABLE `Styles` ADD FOREIGN KEY (product_id) REFERENCES `Products` (`id`);
ALTER TABLE `Photos` ADD FOREIGN KEY (style_id) REFERENCES `Styles` (`style_id`);
ALTER TABLE `SKUs` ADD FOREIGN KEY (style_id) REFERENCES `Styles` (`style_id`);
ALTER TABLE `Related` ADD FOREIGN KEY (product_id) REFERENCES `Products` (`id`);
ALTER TABLE `ProductFeatures` ADD FOREIGN KEY (product_id) REFERENCES `Products` (`id`);
ALTER TABLE `ProductFeatures` ADD FOREIGN KEY (feature_id) REFERENCES `Features` (`feature_id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Products` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Features` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Styles` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `SKUs` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Related` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `ProductFeatures` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Products` (`id`,`name`,`slogan`,`description`,`category`,`default_price`) VALUES
-- ('','','','','','');
-- INSERT INTO `Features` (`feature_id`,`feature`,`value`,`product_id`) VALUES
-- ('','','','');
-- INSERT INTO `Styles` (`style_id`,`name`,`original_price`,`sale_price`,`default?`,`product_id`) VALUES
-- ('','','','','','');
-- INSERT INTO `Photos` (`photo_id`,`thumbnail_url`,`url`,`style_id`) VALUES
-- ('','','','');
-- INSERT INTO `SKUs` (`sku_id`,`quantity`,`size`,`style_id`) VALUES
-- ('','','','');
-- INSERT INTO `Related` (`related_item_id`,`product_id`) VALUES
-- ('','');
-- INSERT INTO `ProductFeatures` (`product_features_id`,`product_id`,`feature_id`) VALUES
-- ('','','');