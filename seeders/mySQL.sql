-- MySQL dump 10.13  Distrib 8.0.17, for macos10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: hpoc-users
-- ------------------------------------------------------
-- Server version	8.0.18

DROP DATABASE IF EXISTS accounts;
CREATE DATABASE accounts;
USE accounts;


/*Table structure for table users*/
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  email varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  hpoc_username varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  hpoc_password varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id)
);

/*Dumping data into table users*/
INSERT INTO users (email,hpoc_username,hpoc_password) VALUES ('unassigned','test1@ntnx.local','nutanix/4u');
INSERT INTO users (email,hpoc_username,hpoc_password) VALUES ('unassigned','test2@ntnx.local','nutanix/4u');
INSERT INTO users (email,hpoc_username,hpoc_password) VALUES ('unassigned','test3@ntnx.local','nutanix/4u');
INSERT INTO users (email,hpoc_username,hpoc_password) VALUES ('unassigned','test4@ntnx.local','nutanix/4u');
