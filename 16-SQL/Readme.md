
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


### SQL Cheatsheet

-- Fetch all columns from the country table:
SELECT * FROM country;

-- Fetch id and name columns from the city table:
SELECT id, name FROM city;

-- Fetch city names sorted by the rating column in ascending order:
SELECT name FROM city ORDER BY rating ASC;

-- Fetch city names sorted by the rating column in descending order:
SELECT name FROM city ORDER BY rating DESC;

-- Alias columns:
SELECT name AS city_name FROM city;

-- Join tables and select specific columns:
SELECT co.name, ci.name
FROM city AS ci
JOIN country AS co ON ci.country_id = co.id;

-- Filtering using comparison operators:
-- Fetch names of cities that have a rating above 3:
SELECT name FROM city WHERE rating > 3;

-- Fetch names of cities that are neither Berlin nor Madrid:
SELECT name FROM city WHERE name != 'Berlin' AND name != 'Madrid';

-- Filtering using text operators:
-- Fetch names of cities that start with a 'P' or end with an 's':
SELECT name FROM city WHERE name LIKE 'P%' OR name LIKE '%s';

-- Fetch names of cities that start with any letter followed by 'ublin':
SELECT name FROM city WHERE name LIKE '_ublin';

-- Other operators:
-- Fetch names of cities that have a population between 500K and 5M:
SELECT name FROM city WHERE population BETWEEN 500000 AND 5000000;

-- Fetch names of cities that don't miss a rating value:
SELECT name FROM city WHERE rating IS NOT NULL;

-- Fetch names of cities that are in countries with IDs 1, 4, 7, or 8:
SELECT name FROM city WHERE country_id IN (1, 4, 7, 8);


---

-- INNER JOIN
SELECT city.name, country.name
FROM city
JOIN country ON city.country_id = country.id;

-- LEFT JOIN
SELECT city.name, country.name
FROM city
LEFT JOIN country ON city.country_id = country.id;

-- RIGHT JOIN
SELECT city.name, country.name
FROM city
RIGHT JOIN country ON city.country_id = country.id;

-- FULL JOIN
SELECT city.name, country.name
FROM city
FULL JOIN country ON city.country_id = country.id;

-- CROSS JOIN
-- Using explicit CROSS JOIN syntax
SELECT city.name, country.name
FROM city
CROSS JOIN country;

-- Using implicit CROSS JOIN syntax
SELECT city.name, country.name
FROM city, country;

-- NATURAL JOIN
SELECT city.name, country.name
FROM city
NATURAL JOIN country;


---


-- Find out the number of cities:
SELECT COUNT(*) FROM city;

-- Find out the number of cities with non-null ratings:
SELECT COUNT(rating) FROM city;

-- Find out the number of distinctive country values:
SELECT COUNT(DISTINCT country_id) FROM city;

-- Find out the smallest and the greatest country populations:
SELECT MIN(population), MAX(population) FROM country;

-- Find out the total population of cities in respective countries:
SELECT country_id, SUM(population) FROM city GROUP BY country_id;

-- Find out the average rating for cities in respective countries if the average is above 3.0:
SELECT country_id, AVG(rating) FROM city GROUP BY country_id HAVING AVG(rating) > 3.0;


---


-- SINGLE VALUE SUBQUERY
-- Find cities with the same rating as Paris:
SELECT name
FROM city
WHERE rating = (
    SELECT rating
    FROM city
    WHERE name = 'Paris'
);

-- MULTIPLE VALUES SUBQUERY
-- Find cities in countries that have a population above 20M:
SELECT name
FROM city
WHERE country_id IN (
    SELECT country_id
    FROM country
    WHERE population > 20000000
);

-- CORRELATED SUBQUERY
-- Find cities with a population greater than the average population in the country:
SELECT *
FROM city main_city
WHERE population > (
    SELECT AVG(population)
    FROM city average_city
    WHERE average_city.country_id = main_city.country_id
);

-- CORRELATED SUBQUERY WITH EXISTS
-- Find countries that have at least one city:
SELECT name
FROM country
WHERE EXISTS (
    SELECT *
    FROM city
    WHERE country_id = country.id
);

-- UNION
-- Display German cyclists together with German skaters:
SELECT name
FROM cycling
WHERE country = 'DE'
UNION
SELECT name
FROM skating
WHERE country = 'DE';

-- UNION ALL
-- Display all German cyclists and skaters, including duplicates:
SELECT name
FROM cycling
WHERE country = 'DE'
UNION ALL
SELECT name
FROM skating
WHERE country = 'DE';

-- INTERSECT
-- Display German cyclists who are also German skaters at the same time:
SELECT name
FROM cycling
WHERE country = 'DE'
INTERSECT
SELECT name
FROM skating
WHERE country = 'DE';

-- EXCEPT
-- Display German cyclists unless they are also German skaters at the same time:
SELECT name
FROM cycling
WHERE country = 'DE'
EXCEPT
SELECT name
FROM skating
WHERE country = 'DE';


---

