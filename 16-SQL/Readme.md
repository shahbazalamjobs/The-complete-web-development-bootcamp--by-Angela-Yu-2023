
## SQL
- SQL, or Structured Query Language, is a language to talk todatabases.
- It allows you to select specific data and to buildcomplex reports.
- Today, SQL is a universal language of data. It is used in practically all technologies that process data.

* Sample data in table format:

**COUNTRY Table:**

| id |   name   | population |   area   |
|----|----------|------------|----------|
| 1  | France   | 66,600,000 | 640,680  |
| 2  | Germany  | 80,700,000 | 357,000  |
| ...| ...      | ...        | ...      |

**CITY Table:**

| id |   name   | country_id | population | rating |
|----|----------|------------|------------|--------|
| 1  | Paris    | 1          | 2,243,000  | 5      |
| 2  | Berlin   | 2          | 3,460,000  | 3      |
| ...| ...      | ...        | ...        | ...    |

---

### SQL Cheatsheet


1. **Fetch all columns from the country table:**
   ```sql
   SELECT * FROM country;
   ```

2. **Fetch id and name columns from the city table:**
   ```sql
   SELECT id, name FROM city;
   ```

3. **Fetch city names sorted by the rating column in ascending order:**
   ```sql
   SELECT name FROM city ORDER BY rating ASC;
   ```

4. **Fetch city names sorted by the rating column in descending order:**
   ```sql
   SELECT name FROM city ORDER BY rating DESC;
   ```

5. **Alias columns:**
   ```sql
   SELECT name AS city_name FROM city;
   ```

6. **Join tables and select specific columns:**
   ```sql
   SELECT co.name, ci.name
   FROM city AS ci
   JOIN country AS co ON ci.country_id = co.id;
   ```

7. **Filtering using comparison operators:**
   ```sql
   SELECT name FROM city WHERE rating > 3;
   ```

8. **Fetch names of cities that are neither Berlin nor Madrid:**
   ```sql
   SELECT name FROM city WHERE name != 'Berlin' AND name != 'Madrid';
   ```

9. **Filtering using text operators:**
   ```sql
   SELECT name FROM city WHERE name LIKE 'P%' OR name LIKE '%s';
   ```

10. **Fetch names of cities that start with any letter followed by 'ublin':**
    ```sql
    SELECT name FROM city WHERE name LIKE '_ublin';
    ```

11. **Other operators:**
    ```sql
    SELECT name FROM city WHERE population BETWEEN 500000 AND 5000000;
    ```

12. **Fetch names of cities that don't miss a rating value:**
    ```sql
    SELECT name FROM city WHERE rating IS NOT NULL;
    ```

13. **Fetch names of cities that are in countries with IDs 1, 4, 7, or 8:**
    ```sql
    SELECT name FROM city WHERE country_id IN (1, 4, 7, 8);
    ```

---

Certainly! Here are explanations for different types of JOINs and examples of each:

1. **INNER JOIN:**
   ```sql
   SELECT city.name, country.name
   FROM city
   JOIN country ON city.country_id = country.id;
   ```
   This query retrieves the names of cities and their corresponding countries using an INNER JOIN based on the matching country_id.

2. **LEFT JOIN:**
   ```sql
   SELECT city.name, country.name
   FROM city
   LEFT JOIN country ON city.country_id = country.id;
   ```
   This query retrieves all city names and their corresponding country names. If a city does not have a matching country, the result will still include the city with a NULL value for the country.

3. **RIGHT JOIN:**
   ```sql
   SELECT city.name, country.name
   FROM city
   RIGHT JOIN country ON city.country_id = country.id;
   ```
   This query retrieves all country names and their corresponding city names. If a country does not have a matching city, the result will still include the country with a NULL value for the city.

4. **FULL JOIN:**
   ```sql
   SELECT city.name, country.name
   FROM city
   FULL JOIN country ON city.country_id = country.id;
   ```
   This query retrieves all city and country names. If there is no match in either the city or country table, the result will still include the unmatched data with NULL values.

5. **CROSS JOIN:**
   - Using explicit CROSS JOIN syntax:
     ```sql
     SELECT city.name, country.name
     FROM city
     CROSS JOIN country;
     ```
   - Using implicit CROSS JOIN syntax:
     ```sql
     SELECT city.name, country.name
     FROM city, country;
     ```
   Both queries generate the Cartesian product of the city and country tables, combining each row from the city table with every row from the country table.

6. **NATURAL JOIN:**
   ```sql
   SELECT city.name, country.name
   FROM city
   NATURAL JOIN country;
   ```
   This query performs a NATURAL JOIN, which automatically matches columns with the same name in both tables. In this case, it joins on the common column "country_id" between the city and country tables.



---



1. **Find out the number of cities:**
   ```sql
   SELECT COUNT(*) FROM city;
   ```
   This query returns the total number of rows (cities) in the "city" table.

2. **Find out the number of cities with non-null ratings:**
   ```sql
   SELECT COUNT(rating) FROM city;
   ```
   This query counts the number of rows in the "city" table where the "rating" column is not null.

3. **Find out the number of distinctive country values:**
   ```sql
   SELECT COUNT(DISTINCT country_id) FROM city;
   ```
   This query counts the number of distinct values in the "country_id" column of the "city" table, giving the number of different countries.

4. **Find out the smallest and the greatest country populations:**
   ```sql
   SELECT MIN(population), MAX(population) FROM country;
   ```
   This query returns the smallest and largest values in the "population" column of the "country" table.

5. **Find out the total population of cities in respective countries:**
   ```sql
   SELECT country_id, SUM(population) FROM city GROUP BY country_id;
   ```
   This query calculates the total population of cities for each country by summing the "population" column in the "city" table and grouping the result by the "country_id" column.

6. **Find out the average rating for cities in respective countries if the average is above 3.0:**
   ```sql
   SELECT country_id, AVG(rating) FROM city GROUP BY country_id HAVING AVG(rating) > 3.0;
   ```
   This query calculates the average rating for cities in each country, and the result is filtered using the HAVING clause to include only those countries where the average rating is above 3.0.



---

Certainly! Here are explanations for each of the provided SQL queries involving subqueries and set operations:

1. **SINGLE VALUE SUBQUERY:**
   ```sql
   -- Find cities with the same rating as Paris:
   SELECT name
   FROM city
   WHERE rating = (
       SELECT rating
       FROM city
       WHERE name = 'Paris'
   );
   ```
   This query retrieves cities with the same rating as Paris by using a subquery to find the rating of Paris.

2. **MULTIPLE VALUES SUBQUERY:**
   ```sql
   -- Find cities in countries that have a population above 20M:
   SELECT name
   FROM city
   WHERE country_id IN (
       SELECT country_id
       FROM country
       WHERE population > 20000000
   );
   ```
   This query uses a subquery to find country IDs with a population above 20 million and then selects cities in those countries.

3. **CORRELATED SUBQUERY:**
   ```sql
   -- Find cities with a population greater than the average population in the country:
   SELECT *
   FROM city main_city
   WHERE population > (
       SELECT AVG(population)
       FROM city average_city
       WHERE average_city.country_id = main_city.country_id
   );
   ```
   This correlated subquery compares each city's population with the average population of cities in the same country.

4. **CORRELATED SUBQUERY WITH EXISTS:**
   ```sql
   -- Find countries that have at least one city:
   SELECT name
   FROM country
   WHERE EXISTS (
       SELECT *
       FROM city
       WHERE country_id = country.id
   );
   ```
   This correlated subquery checks if there is at least one city in each country.

5. **UNION:**
   ```sql
   -- Display German cyclists together with German skaters:
   SELECT name
   FROM cycling
   WHERE country = 'DE'
   UNION
   SELECT name
   FROM skating
   WHERE country = 'DE';
   ```
   This query uses the UNION operator to combine the names of German cyclists and German skaters, excluding duplicates.

6. **UNION ALL:**
   ```sql
   -- Display all German cyclists and skaters, including duplicates:
   SELECT name
   FROM cycling
   WHERE country = 'DE'
   UNION ALL
   SELECT name
   FROM skating
   WHERE country = 'DE';
   ```
   This query uses the UNION ALL operator to combine the names of German cyclists and skaters, including duplicates.

7. **INTERSECT:**
   ```sql
   -- Display German cyclists who are also German skaters at the same time:
   SELECT name
   FROM cycling
   WHERE country = 'DE'
   INTERSECT
   SELECT name
   FROM skating
   WHERE country = 'DE';
   ```
   This query uses the INTERSECT operator to find names that are common between German cyclists and skaters.

8. **EXCEPT:**
   ```sql
   -- Display German cyclists unless they are also German skaters at the same time:
   SELECT name
   FROM cycling
   WHERE country = 'DE'
   EXCEPT
   SELECT name
   FROM skating
   WHERE country = 'DE';
   ```
   This query uses the EXCEPT operator to find names of German cyclists that are not also German skaters.



---


