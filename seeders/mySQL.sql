-- MySQL dump 10.13  Distrib 8.0.17, for macos10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: hpoc-users
-- ------------------------------------------------------
-- Server version	8.0.18

DROP DATABASE IF EXISTS accounts;
CREATE DATABASE accounts;
USE accounts;


/*Table structure for table Products*/
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  first_name varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  last_name varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  email varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  hpoc_username varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  hpoc_password varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
/*Dumping data into table Products*/
INSERT INTO users (first_name,last_name,email,hpoc_username,hpoc_password) VALUES ('sharon','santana','sharon@nutanix.com','test@ntnx.local','nutanix/4u');
