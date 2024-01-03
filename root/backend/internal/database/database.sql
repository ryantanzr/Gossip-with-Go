CREATE DATABASE GossipWithGo;

CREATE TABLE users(
    userID SERIAL PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255)
);