
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
