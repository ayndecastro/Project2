DROP DATABASE IF EXISTS bagDB;
CREATE DATABASE bagDB;
USE bagDB;

CREATE TABLE bag (
    id INT(50) AUTO_INCREMENT NOT NULL,
    item VARCHAR(50),
    quantity INTEGER(50),
    PRIMARY KEY (id)
);

-- Dummy data
INSERT INTO bag (item, quantity) VALUES ("plane ticket", "1");
INSERT INTO bag (item, quantity) VALUES ("passport", "1");
INSERT INTO bag (item, quantity) VALUES ("wallet", "1");
INSERT INTO bag (item, quantity) VALUES ("camera", "1");
INSERT INTO bag (item, quantity) VALUES ("laptop", "1");
INSERT INTO bag (item, quantity) VALUES ("cell phone", "1");
INSERT INTO bag (item, quantity) VALUES ("chargers", "4");
INSERT INTO bag (item, quantity) VALUES ("tooth brush", "1");
INSERT INTO bag (item, quantity) VALUES ("deodorant", "1");
INSERT INTO bag (item, quantity) VALUES ("soap", "1");
INSERT INTO bag (item, quantity) VALUES ("casual clothes", "10");
INSERT INTO bag (item, quantity) VALUES ("dress clothes", "2");
INSERT INTO bag (item, quantity) VALUES ("underwear", "10");
INSERT INTO bag (item, quantity) VALUES ("socks", "10");
INSERT INTO bag (item, quantity) VALUES ("casual shoes", "2");
INSERT INTO bag (item, quantity) VALUES ("dress shoes", "1");
INSERT INTO bag (item, quantity) VALUES ("kindle", "1");
INSERT INTO bag (item, quantity) VALUES ("intenerary", "1");
INSERT INTO bag (item, quantity) VALUES ("backpack", "1");


