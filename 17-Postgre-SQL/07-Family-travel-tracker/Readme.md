
## SQL relationships


1. **One-to-One Relationship:**
   - In a one-to-one relationship, each record in the first table is related to exactly one record in the second table, and vice versa.
   - Example: Consider two tables, `Person` and `Passport`. Each person has only one passport, and each passport is issued to only one person.

     ```sql
     CREATE TABLE Person (
         PersonID INT PRIMARY KEY,
         Name VARCHAR(50),
         -- other fields
     );

     CREATE TABLE Passport (
         PassportID INT PRIMARY KEY,
         PassportNumber VARCHAR(20),
         PersonID INT UNIQUE,
         FOREIGN KEY (PersonID) REFERENCES Person(PersonID)
     );
     ```

2. **One-to-Many Relationship:**
   - In a one-to-many relationship, each record in the first table can be related to multiple records in the second table, but each record in the second table is related to only one record in the first table.
   - Example: Consider two tables, `Department` and `Employee`. Each department can have multiple employees, but each employee belongs to only one department.

     ```sql
     CREATE TABLE Department (
         DepartmentID INT PRIMARY KEY,
         DepartmentName VARCHAR(50)
     );

     CREATE TABLE Employee (
         EmployeeID INT PRIMARY KEY,
         Name VARCHAR(50),
         DepartmentID INT,
         FOREIGN KEY (DepartmentID) REFERENCES Department(DepartmentID)
     );
     ```

3. **Many-to-Many Relationship:**
   - In a many-to-many relationship, each record in the first table can be related to multiple records in the second table, and vice versa.
   - Example: Consider two tables, `Student` and `Course`. Each student can enroll in multiple courses, and each course can have multiple students.

     ```sql
     CREATE TABLE Student (
         StudentID INT PRIMARY KEY,
         StudentName VARCHAR(50)
     );

     CREATE TABLE Course (
         CourseID INT PRIMARY KEY,
         CourseName VARCHAR(50)
     );

     CREATE TABLE Enrollment (
         EnrollmentID INT PRIMARY KEY,
         StudentID INT,
         CourseID INT,
         FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
         FOREIGN KEY (CourseID) REFERENCES Course(CourseID)
     );
     ```

These examples demonstrate the basic structure of each relationship type. Remember to adapt the design based on specific business requirements and constraints.

---

## Aliases

In PostgreSQL, you can use aliases to give a table or a column a temporary name within a query. It's particularly useful when dealing with complex queries or when you want to make your query more readable.

For tables, you can use aliases like this:

```sql
SELECT column1, column2
FROM table_name AS alias_name;
```

For columns, you can use aliases like this:

```sql
SELECT column_name AS alias_name
FROM table_name;
```

Here's a quick example:

```sql
SELECT first_name AS "First Name", last_name AS "Last Name"
FROM employees AS e;
```
- Certainly! Let's say you have a `students` table with columns `student_id`, `full_name`, and `grade`. You want to retrieve the student names and their grades, but you want to use aliases for better readability:


```sql
-- Using aliases for table and column names
SELECT s.student_id AS "ID", s.full_name AS "Student Name", s.grade AS "Grade"
FROM students AS s;
```

In this example:

- `students AS s` assigns the alias `s` to the `students` table.
- `s.student_id AS "ID"` aliases the `student_id` column as "ID".
- `s.full_name AS "Student Name"` aliases the `full_name` column as "Student Name".
- `s.grade AS "Grade"` aliases the `grade` column as "Grade".

Now, when you run this query, the result set will have columns labeled as "ID," "Student Name," and "Grade" for better readability. The use of aliases can be especially helpful in more complex queries.

In this example, the `employees` table is given the alias `e`, and the columns `first_name` and `last_name` are given aliases "First Name" and "Last Name" respectively. The aliases are used in the result set for clarity.

- Using aliases without AS keyword
```
SELECT s.student_id "ID", s.full_name "Student Name", s.grade "Grade"
FROM students s;
```

- `students s` assigns the alias `s` to the table. `s.student_id "ID"` aliases `student_id` as "ID" without AS.
- `s.full_name "Student Name"` aliases `full_name` as "Student Name" without AS.
- `s.grade "Grade"` aliases `grade` as "Grade" without AS.
