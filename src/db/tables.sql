-- This creates the cursuum database --
CREATE DATABASE cursuum;

-- This creates the Users table --
CREATE TABLE users (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(255) NOT NULL,
  `lastName` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(60) NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- This creates the Events table --
CREATE TABLE events (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  --`startDate` TIMESTAMP NOT NULL,--
  --`endDate` TIMESTAMP NOT NULL,--
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `categoryId` INT NOT NULL,
  `userId` INT NOT NULL,
  `locationLat` INT NOT NULL,
  `locationLng` INT NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id)
);

-- This creates the Dates table --
CREATE TABLE dates (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `eventId` TIMESTAMP NOT NULL,
  `startDate` TIMESTAMP NOT NULL,
  `endDate` TIMESTAMP NOT NULL,
  FOREIGN KEY (eventId) REFERENCES events(id)
);

-- This creates the Requests table --
CREATE TABLE requests (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `fromId` INT NOT NULL,
  `toId` INT NOT NULL,
  `eventId` INT NOT NULL,
  `requestType` VARCHAR(100),
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
  attendance INT,
  FOREIGN KEY (userId) REFERENCES Users(id)
);
