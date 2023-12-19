
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!


DROP TABLE IF EXISTS "user";

DROP TABLE IF EXISTS "beers";

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (50) NOT NULL
);

INSERT INTO "user" (
	"username", "password", "email")
	VALUES ('testName', '1234', 'test.com');
	
CREATE TABLE "beers" (
    "id" SERIAL PRIMARY KEY,
    "beer_name" VARCHAR (80) UNIQUE NOT NULL,
    "notes" TEXT,
    "is_tapped" BOOLEAN DEFAULT false,
    "image" TEXT,
    "user_id" INTEGER
);

INSERT INTO "beers" (
	"beer_name", "notes",  "image")
	VALUES ('test beer', 'a beer brewed by imagination', 'a beautiful picture');