Certainly! Here are some common queries you might want to perform on the `world_food` table:

### Creating Table

```sql
CREATE TABLE world_food (
    id SERIAL PRIMARY KEY,
    country VARCHAR(45),
    rice DOUBLE PRECISION,
    wheat DOUBLE PRECISION
);
```



1. **Select all records:**
   ```sql
   SELECT * FROM world_food;
   ```

2. **Filter by a specific country:**
   ```sql
   SELECT * FROM world_food WHERE country = 'YourCountry';
   ```

3. **Order by rice production in descending order:**
   ```sql
   SELECT * FROM world_food ORDER BY rice DESC;
   ```

4. **Filter and order by wheat production in ascending order:**
   ```sql
   SELECT * FROM world_food WHERE wheat > 0 ORDER BY wheat ASC;
   ```

5. **Calculate the total rice and wheat production for each country:**
   ```sql
   SELECT country, SUM(rice) AS total_rice, SUM(wheat) AS total_wheat
   FROM world_food
   GROUP BY country;
   ```

6. **Find countries where rice production is greater than wheat production:**
   ```sql
   SELECT * FROM world_food WHERE rice > wheat;
   ```

7. **Update rice production for a specific country:**
   ```sql
   UPDATE world_food SET rice = new_value WHERE country = 'YourCountry';
   ```

8. **Insert a new record for a country:**
   ```sql
   INSERT INTO world_food (country, rice, wheat) VALUES ('NewCountry', 100.5, 50.2);
   ```

9. **Delete records where wheat production is zero:**
   ```sql
   DELETE FROM world_food WHERE wheat = 0;
   ```

Remember to replace placeholders like 'YourCountry' or 'NewCountry' with actual values when executing these queries. These examples cover a range of common operations you might perform on a table like `world_food`.
