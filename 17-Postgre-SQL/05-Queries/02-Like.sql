-- 1. Select all records
SELECT * FROM world_food;

-- 2. Filter countries starting with 'A'
SELECT * FROM world_food WHERE country LIKE 'A%';

-- 3. Filter countries ending with 'land'
SELECT * FROM world_food WHERE country LIKE '%land';

-- 4. Filter countries containing 'ia'
SELECT * FROM world_food WHERE country LIKE '%ia%';

-- 5. Order by rice production in descending order for countries starting with 'B'
SELECT * FROM world_food WHERE country LIKE 'B%' ORDER BY rice DESC;

-- 6. Filter and order by wheat production in ascending order for countries ending with 'a'
SELECT * FROM world_food WHERE country LIKE '%a' AND wheat > 0 ORDER BY wheat ASC;

-- 7. Calculate the total rice and wheat production for each country starting with 'C'
SELECT country, SUM(rice) AS total_rice, SUM(wheat) AS total_wheat
FROM world_food
WHERE country LIKE 'C%'
GROUP BY country;

-- 8. Find countries where rice production is greater than wheat production and country contains 'an'
SELECT * FROM world_food WHERE rice > wheat AND country LIKE '%an%';

-- 9. Update rice production for countries starting with 'D'
UPDATE world_food SET rice = new_value WHERE country LIKE 'D%';

-- 10. Insert a new record for a country ending with 'ia'
INSERT INTO world_food (country, rice, wheat) VALUES ('NewCountryia', 80.2, 40.5);

-- 11. Delete records where wheat production is zero and country contains 'o'
DELETE FROM world_food WHERE wheat = 0 AND country LIKE '%o%';
