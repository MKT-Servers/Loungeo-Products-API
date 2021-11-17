CREATE TABLE "public.products" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"slogan" varchar(255) NOT NULL,
	"description" TEXT NOT NULL,
	"default_price" varchar(255) NOT NULL,
	"category" varchar(255) NOT NULL,
	CONSTRAINT "products_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.features" (
	"feature_id" serial NOT NULL,
	"feature" varchar(255) NOT NULL,
	"value" varchar(255) NOT NULL,
	CONSTRAINT "features_pk" PRIMARY KEY ("feature_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.styles" (
	"style_id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"original_price" varchar(255) NOT NULL,
	"sale_price" varchar(255) NOT NULL,
	"default?" BOOLEAN NOT NULL,
	"product_id" integer NOT NULL,
	CONSTRAINT "styles_pk" PRIMARY KEY ("style_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.photos" (
	"photo_id" serial NOT NULL,
	"thumbnail_url" TEXT NOT NULL,
	"url" TEXT NOT NULL,
	"style_id" integer NOT NULL,
	CONSTRAINT "photos_pk" PRIMARY KEY ("photo_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.skus" (
	"sku_id" serial NOT NULL,
	"quantity" integer NOT NULL,
	"size" varchar(255) NOT NULL,
	"style_id" integer NOT NULL,
	CONSTRAINT "skus_pk" PRIMARY KEY ("sku_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.related_items" (
	"product_related_id" serial NOT NULL,
	"product_id" integer NOT NULL,
	"related_item_id" integer NOT NULL,
	CONSTRAINT "related_items_pk" PRIMARY KEY ("product_related_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.product_features" (
	"product_features_id" serial NOT NULL,
	"product_id" integer NOT NULL,
	"feature_id" integer NOT NULL,
	CONSTRAINT "product_features_pk" PRIMARY KEY ("product_features_id")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "styles" ADD CONSTRAINT "styles_fk0" FOREIGN KEY ("product_id") REFERENCES "products"("id");

ALTER TABLE "photos" ADD CONSTRAINT "photos_fk0" FOREIGN KEY ("style_id") REFERENCES "styles"("style_id");

ALTER TABLE "skus" ADD CONSTRAINT "skus_fk0" FOREIGN KEY ("style_id") REFERENCES "styles"("style_id");

ALTER TABLE "related_items" ADD CONSTRAINT "related_items_fk0" FOREIGN KEY ("product_id") REFERENCES "products"("id");
ALTER TABLE "related_items" ADD CONSTRAINT "related_items_fk1" FOREIGN KEY ("related_item_id") REFERENCES "products"("id");

ALTER TABLE "product_features" ADD CONSTRAINT "product_features_fk0" FOREIGN KEY ("product_id") REFERENCES "products"("id");
ALTER TABLE "product_features" ADD CONSTRAINT "product_features_fk1" FOREIGN KEY ("feature_id") REFERENCES "features"("feature_id");








