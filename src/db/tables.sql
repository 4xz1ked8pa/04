-- This creates the cursuum database --
CREATE DATABASE cursuum;

-- This creates tge Sessions table --
CREATE TABLE sessions (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `token` DECIMAL(40,40) NOT NULL
);

-- This creates the Users table --
CREATE TABLE users (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(60) NOT NULL,
  `network` VARCHAR(255) NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- This creates the Events table --
CREATE TABLE events (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `category` INT NOT NULL,
  `userId` INT NOT NULL,
  `location` VARCHAR(255),
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id)
);

-- This creates the Dates table --
CREATE TABLE dates (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `eventId` INT NOT NULL,
  `startDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `endDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  FOREIGN KEY (eventId) REFERENCES events(id)
);

-- This creates the Event Requests table --
CREATE TABLE eventRequests (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `fromId` INT NOT NULL,
  `toId` INT NOT NULL,
  `eventId` INT NOT NULL,
  FOREIGN KEY (fromId) REFERENCES users(id),
  FOREIGN KEY (toId) REFERENCES users(id)
);

-- This creates the Friends table --
CREATE TABLE friends (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `friend1Id` INT NOT NULL,
  `friend2Id` INT NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (friend1Id) REFERENCES users(id),
  FOREIGN KEY (friend2Id) REFERENCES users(id)
);

-- This creates the Attendences table
CREATE TABLE attendances (
  id INT PRIMARY KEY AUTO_INCREMENT,
  userId INT,
  eventId INT,
  attendance BOOLEAN,
  FOREIGN KEY (userId) REFERENCES Users(id)
);
