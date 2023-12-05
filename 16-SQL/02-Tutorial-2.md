
# SQL queries

## 1. Basic SQL Syntax

Certainly! Below are examples of SQL queries using SELECT, FROM, WHERE, GROUP BY, HAVING, and ORDER BY clauses:

1. **SELECT:**
   - Retrieves data from one or more columns in a table.

   ```sql
   SELECT column1, column2 FROM tableName;
   ```

2. **FROM:**
   - Specifies the table from which to retrieve the data.

   ```sql
   SELECT column1, column2 FROM tableName;
   ```

3. **WHERE:**
   - Filters data based on a condition.

   ```sql
   SELECT column1, column2 FROM tableName WHERE condition;
   ```

4. **GROUP BY:**
   - Groups rows that have the same values in specified columns into summary rows.

   ```sql
   SELECT column1, COUNT(*) FROM tableName GROUP BY column1;
   ```

5. **HAVING:**
   - Filters the results of a GROUP BY clause based on a condition.

   ```sql
   SELECT column1, COUNT(*) FROM tableName GROUP BY column1 HAVING COUNT(*) > 1;
   ```

6. **ORDER BY:**
   - Sorts the result set based on one or more columns.

   ```sql
   SELECT column1, column2 FROM tableName ORDER BY column1 ASC, column2 DESC;
   ```

Please replace `tableName`, `column1`, `column2`, and `condition` with the actual table and column names you are working with, and customize the conditions based on your requirements.

---

## 2. Creating database table and perfroming basic queries

Certainly! Let's assume we have a simple table called `employees` with the following structure:

```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(255),
    department VARCHAR(255),
    salary DECIMAL(10, 2)
);
```

And let's populate it with some sample data:

```sql
INSERT INTO employees (employee_id, employee_name, department, salary)
VALUES
    (1, 'Alice', 'HR', 50000.00),
    (2, 'Bob', 'IT', 60000.00),
    (3, 'Charlie', 'Finance', 75000.00),
    (4, 'David', 'IT', 55000.00),
    (5, 'Eva', 'Finance', 70000.00),
    (6, 'Frank', 'HR', 48000.00);
```

Now, let's run the sample queries:

1. **SELECT:**
   ```sql
   SELECT employee_id, employee_name FROM employees;
   ```
   Output:
   ```
   +-------------+---------------+
   | employee_id | employee_name |
   +-------------+---------------+
   | 1           | Alice         |
   | 2           | Bob           |
   | 3           | Charlie       |
   | 4           | David         |
   | 5           | Eva           |
   | 6           | Frank         |
   +-------------+---------------+
   ```

2. **FROM:**
   ```sql
   SELECT employee_id, employee_name FROM employees;
   ```
   Output:
   ```
   +-------------+---------------+
   | employee_id | employee_name |
   +-------------+---------------+
   | 1           | Alice         |
   | 2           | Bob           |
   | 3           | Charlie       |
   | 4           | David         |
   | 5           | Eva           |
   | 6           | Frank         |
   +-------------+---------------+
   ```

3. **WHERE:**
   ```sql
   SELECT employee_id, employee_name FROM employees WHERE department = 'IT';
   ```
   Output:
   ```
   +-------------+---------------+
   | employee_id | employee_name |
   +-------------+---------------+
   | 2           | Bob           |
   | 4           | David         |
   +-------------+---------------+
   ```

4. **GROUP BY:**
   ```sql
   SELECT department, COUNT(*) FROM employees GROUP BY department;
   ```
   Output:
   ```
   +------------+----------+
   | department | COUNT(*) |
   +------------+----------+
   | HR         | 2        |
   | IT         | 2        |
   | Finance    | 2        |
   +------------+----------+
   ```

5. **HAVING:**
   ```sql
   SELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 1;
   ```
   Output:
   ```
   +------------+----------+
   | department | COUNT(*) |
   +------------+----------+
   | HR         | 2        |
   | IT         | 2        |
   | Finance    | 2        |
   +------------+----------+
   ```

6. **ORDER BY:**
   ```sql
   SELECT employee_name, salary FROM employees ORDER BY salary DESC;
   ```
   Output:
   ```
   +---------------+--------+
   | employee_name | salary |
   +---------------+--------+
   | Charlie       | 75000.00 |
   | Eva           | 70000.00 |
   | Bob           | 60000.00 |
   | David         | 55000.00 |
   | Alice         | 50000.00 |
   | Frank         | 48000.00 |
   +---------------+--------+
   ```

---

## 3. Understanding database schemas, tables, and relationships (1:1, 1:N, N:M)

Certainly! Let's break down the concepts of database schemas, tables, and relationships, as well as primary keys, foreign keys, and indexes.

### 1. Database Schemas:

A database schema is a blueprint or structural plan that defines the organization and arrangement of data within a database. It includes the structure of tables, relationships between tables, constraints, and other elements. Schemas help in organizing and managing the data in a systematic way.

### 2. Tables:

A table is a fundamental component of a relational database. It represents a collection of related data entries organized in rows and columns. Each table is designed for a specific purpose and consists of columns (fields) and rows (records) to store data.

### 3. Relationships:

In a relational database, relationships define how tables are connected to each other. There are three main types of relationships:

- **One-to-One (1:1):** Each record in the first table is related to one and only one record in the second table, and vice versa.

- **One-to-Many (1:N):** A record in the first table can be related to multiple records in the second table, but each record in the second table is related to only one record in the first table.

- **Many-to-Many (N:M):** Records in the first table can be related to multiple records in the second table, and vice versa. This is typically implemented using an intermediate table.

### 4. Primary Keys:

A primary key is a unique identifier for a record in a table. It ensures that each record in a table can be uniquely identified and is used to enforce entity integrity. Primary keys cannot have NULL values, and each table should have one.

### 5. Foreign Keys:

A foreign key is a field in a table that refers to the primary key of another table. It establishes a link between the two tables, enforcing referential integrity. Foreign keys help maintain consistency in the data by ensuring that values in one table's foreign key match the values in the primary key of another table.

### 6. Indexes:

Indexes are data structures that improve the speed of data retrieval operations on a database table. They work similar to the index in a book, allowing the database engine to quickly locate and access the rows in a table. Indexes can be created on one or more columns of a table, and they enhance the performance of SELECT queries but may slightly slow down data modification operations (INSERT, UPDATE, DELETE).


---


- Let's create a simple database with two tables, `Students` and `Courses`, to illustrate the concepts:

```sql
-- Create Database Schema
CREATE DATABASE University;

-- Use the Database
USE University;

-- Create Students Table
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    BirthDate DATE
);

-- Create Courses Table
CREATE TABLE Courses (
    CourseID INT PRIMARY KEY,
    CourseName VARCHAR(100),
    Instructor VARCHAR(50)
);

-- Create Enrollment Table for Many-to-Many Relationship
CREATE TABLE Enrollment (
    StudentID INT,
    CourseID INT,
    PRIMARY KEY (StudentID, CourseID),
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);
```

In this example:

- The `Students` table has a primary key (`StudentID`).
- The `Courses` table has a primary key (`CourseID`).
- The `Enrollment` table is an intermediate table for the many-to-many relationship between students and courses. It has foreign keys referencing the primary keys of the `Students` and `Courses` tables.

You can then insert data into these tables and perform queries to retrieve information. Remember to adjust the syntax based on your specific database management system.

```sql
-- Insert Data into Students Table
INSERT INTO Students (StudentID, FirstName, LastName, BirthDate)
VALUES (1, 'John', 'Doe', '1990-01-01'),
       (2, 'Jane', 'Smith', '1992-05-15');

-- Insert Data into Courses Table
INSERT INTO Courses (CourseID, CourseName, Instructor)
VALUES (101, 'Database Management', 'Dr. Johnson'),
       (102, 'Programming 101', 'Prof. Smith');

-- Insert Data into Enrollment Table
INSERT INTO Enrollment (StudentID, CourseID)
VALUES (1, 101),
       (1, 102),
       (2, 102);
```

---

## 4. Data types in SQL 

-- Creating a SampleTable with Commonly Used Data Types

```sql
CREATE TABLE SampleTable (
    id INT,                           -- Integer: Unique identifier for each record
    name VARCHAR(50),                 -- Variable-length string: Stores names with a maximum length of 50 characters
    description CHAR(100),            -- Fixed-length string: Stores fixed-length descriptions with a length of 100 characters
    details TEXT,                     -- Variable-length text: Stores large amounts of text, suitable for long descriptions
    birth_date DATE,                  -- Date: Stores the birth date of an entity
    event_timestamp TIMESTAMP,        -- Timestamp: Records the date and time of an event
    is_active BOOLEAN,                -- Boolean: Represents true or false for activation status
    price DECIMAL(10, 2),             -- Decimal: Stores monetary values with a precision of 10 digits, 2 of which are after the decimal point
    temperature FLOAT,                -- Float: Stores floating-point numbers, like temperature readings
    status ENUM('active', 'inactive', 'pending')  -- Enum: Represents a status with predefined values
);
```

---

## 5. Crud operations:  INSERT, SELECT, UPDATE, DELETE

```sql
-- INSERT: Add a new record to the SampleTable
INSERT INTO SampleTable (id, name, description, birth_date, is_active)
VALUES (1, 'John Doe', 'Author', '1990-01-15', true);

-- SELECT: Retrieve information from the SampleTable
SELECT id, name, description, birth_date, is_active
FROM SampleTable
WHERE is_active = true;

-- UPDATE: Modify the name for the record with id=1 in SampleTable
UPDATE SampleTable
SET name = 'Jane Doe'
WHERE id = 1;

-- DELETE: Remove the record with id=1 from SampleTable
DELETE FROM SampleTable
WHERE id = 1;
```

---

## 6. Joins: INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN:

```sql
-- INNER JOIN: Retrieve matching records from both tables
SELECT Orders.order_id, Customers.customer_name
FROM Orders
INNER JOIN Customers ON Orders.customer_id = Customers.customer_id;

-- LEFT JOIN: Retrieve all records from the left table and matching records from the right table
SELECT Customers.customer_name, Orders.order_id
FROM Customers
LEFT JOIN Orders ON Customers.customer_id = Orders.customer_id;

-- RIGHT JOIN: Retrieve all records from the right table and matching records from the left table
SELECT Orders.order_id, Customers.customer_name
FROM Orders
RIGHT JOIN Customers ON Orders.customer_id = Customers.customer_id;

-- FULL OUTER JOIN: Retrieve all records when there is a match in either the left or right table
SELECT Customers.customer_name, Orders.order_id
FROM Customers
FULL OUTER JOIN Orders ON Customers.customer_id = Orders.customer_id;
```

Explanation in comments:

1. **INNER JOIN:**
   - Comment: Retrieve matching records from both tables.
   - Explanation: INNER JOIN returns only the rows where there is a match in both tables based on the specified condition.

2. **LEFT JOIN:**
   - Comment: Retrieve all records from the left table and matching records from the right table.
   - Explanation: LEFT JOIN returns all rows from the left table and the matching rows from the right table. If there is no match, NULL values are returned for the columns from the right table.

3. **RIGHT JOIN:**
   - Comment: Retrieve all records from the right table and matching records from the left table.
   - Explanation: RIGHT JOIN returns all rows from the right table and the matching rows from the left table. If there is no match, NULL values are returned for the columns from the left table.

4. **FULL OUTER JOIN:**
   - Comment: Retrieve all records when there is a match in either the left or right table.
   - Explanation: FULL OUTER JOIN returns all rows when there is a match in either the left or right table. If there is no match, NULL values are returned for columns from the table without a match.

---

## 7. Aggregation Functions: COUNT, SUM, AVG, MIN, and MAX

```sql
-- COUNT: Count the number of records in the Orders table
SELECT COUNT(*) AS order_count
FROM Orders;

-- SUM: Calculate the total order amount in the OrderDetails table
SELECT SUM(unit_price * quantity) AS total_order_amount
FROM OrderDetails;

-- AVG: Calculate the average age of employees in the Employees table
SELECT AVG(DATEDIFF(CURDATE(), birth_date)) AS average_age
FROM Employees;

-- MIN: Find the earliest order date in the Orders table
SELECT MIN(order_date) AS earliest_order_date
FROM Orders;

-- MAX: Find the highest product price in the Products table
SELECT MAX(price) AS highest_price
FROM Products;
```

---

## 8. Views

```sql
-- Creating a view: Create a view to display information about high-value orders
CREATE VIEW HighValueOrders AS
SELECT
    order_id,
    customer_id,
    order_date,
    total_price
FROM
    Orders
WHERE
    total_price > 1000;

-- Selecting from a view: Retrieve data from the created view
SELECT * FROM HighValueOrders;
```

-  The CREATE VIEW statement creates a virtual table called HighValueOrders based on a SELECT query.
-  This view includes orders with a total price greater than 1000.
-  The SELECT statement retrieves data from the HighValueOrders view.
-  This allows users to query high-value orders without needing to understand the underlying complexity of the SQL query that defines the view.

## 9. ACID properties

Certainly! Here's a simple SQL code snippet that illustrates the concepts of ACID properties (Atomicity, Consistency, Isolation, Durability) using `BEGIN TRANSACTION`, `COMMIT`, and `ROLLBACK`:

```sql
-- Understanding ACID Properties

-- Create a sample table
CREATE TABLE BankAccounts (
    account_id INT PRIMARY KEY,
    balance DECIMAL(10, 2) NOT NULL
);

-- Insert initial data
INSERT INTO BankAccounts (account_id, balance) VALUES (1, 1000), (2, 1500);

-- Atomicity and Consistency: Begin a transaction
BEGIN TRANSACTION;

-- Atomicity and Consistency: Perform multiple operations as part of a transaction
UPDATE BankAccounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE BankAccounts SET balance = balance + 100 WHERE account_id = 2;

-- Isolation: Simulate another session trying to read uncommitted data
-- Uncomment the following line to observe the isolation behavior
-- ROLLBACK; -- Uncomment this line to observe the isolation behavior

-- Durability: Commit the transaction to make changes permanent
COMMIT;

-- Check the final state of the BankAccounts table
SELECT * FROM BankAccounts;
```

Explanation:

1. **Atomicity and Consistency:**
   - Comment: Begin a transaction and perform multiple operations.
   - Explanation: The `BEGIN TRANSACTION` statement starts a transaction. The subsequent `UPDATE` statements modify data within the transaction. If any part of the transaction fails, the changes will be rolled back to maintain consistency.

2. **Isolation:**
   - Comment: Simulate another session trying to read uncommitted data.
   - Explanation: Uncomment the `ROLLBACK` statement to simulate another session attempting to read uncommitted data. In a real-world scenario, this demonstrates the isolation property, where changes made within a transaction are not visible to other transactions until committed.

3. **Durability:**
   - Comment: Commit the transaction to make changes permanent.
   - Explanation: The `COMMIT` statement finalizes the transaction, making all the changes made during the transaction permanent. Once committed, the changes are durable and will survive system failures.
