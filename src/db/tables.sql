-- This creates the cursuum database --
CREATE DATABASE cursuum;

-- This creates the Users table --
CREATE TABLE Users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(255),
  lastName VARCHAR (255),
  email VARCHAR (255),
  password VARCHAR(255)
);

-- This creates the Events table --
CREATE TABLE Events (
  id PRIMARY KEY AUTO_INCREMENT,
  startDate DATE,
  endDate DATE,
  title VARCHAR(255),
  description TEXT,
  categoryId INT,
  userId INT,
  locationLat INT,
  locationLng INT,
  FOREIGN KEY (userId) REFERENCES Users(id)
);

-- This creates the Requests table --
CREATE TABLE Requests (
  id INT PRIMARY KEY AUTO_INCREMENT,
  requestId INT,
  targetId INT,
  createdAt DATE
);

-- This creates the Friends table --
CREATE TABLE Friends (
  id INT PRIMARY KEY AUTO_INCREMENT,
  friend1Id INT,
  friend2Id INT
);

-- This creates the Attendences table
CREATE TABLE Attendences (
  id INT PRIMARY KEY AUTO_INCREMENT,
  userId INT,
  eventId INT,
  attendance INT,
  FOREIGN KEY (userId) REFERENCES Users(id)
);
