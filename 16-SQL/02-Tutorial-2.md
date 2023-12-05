
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

In summary, a well-designed database involves careful consideration of schemas, tables, relationships, and the use of primary keys, foreign keys, and indexes to ensure data integrity and optimize query performance.

---

Certainly! I'll provide you with an example using SQL (Structured Query Language), which is commonly used for working with relational databases. 
Keep in mind that the exact syntax may vary depending on the database management system you are using (e.g., MySQL, PostgreSQL, SQLite, etc.).

Let's create a simple database with two tables, `Students` and `Courses`, to illustrate the concepts:

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

This example demonstrates the basic structure and relationships in a database. Adjust the code based on your specific requirements and the database system you are using.
