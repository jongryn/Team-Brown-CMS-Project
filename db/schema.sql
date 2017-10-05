

/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE task_saver_db;
USE task_saver_db;

-- Create the table tasks.
CREATE TABLE tasks
(
    id int NOT NULL AUTO_INCREMENT,
    task varchar(255) NOT NULL,
    year INT NOT NULL,
    month INT NOT NULL,
    day INT NOT NULL,
    timeOfDay NOT NULL,
    note varchar(255),
    location varchar(255),
    urgency decimal(3,1) NULL,
    PRIMARY KEY (id)
);


-- Insert a set of records.
-- INSERT INTO tasks (task) VALUES ('Pick up milk.');
-- INSERT INTO tasks (task) VALUES ('Mow the law.');
-- INSERT INTO tasks (task) VALUES ('Call Shannon back.');

SELECT * FROM tasks

-- /*
--
-- To run this file, we do the following in our Terminal:
-- 
-- 1. Go to the directory of this sql file.
--
-- 2. Get into our mysql console.
--
-- 3. Run "source schema.sql"
--
-- */
--
-- -- Create the database day_planner_db and specified it for use.
-- CREATE DATABASE day_planner_db;
-- USE day_planner_db;
--
-- -- Create the table plans.
-- CREATE TABLE plans
-- (
-- id int NOT NULL AUTO_INCREMENT,
-- plan varchar(255) NOT NULL,
-- PRIMARY KEY (id)
-- );
--
-- -- Insert a set of records.
-- INSERT INTO plans (plan) VALUES ('Plan to fight a ninja.');
--
-- select * from plans;
