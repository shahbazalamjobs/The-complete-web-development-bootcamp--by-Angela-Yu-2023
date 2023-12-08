# Importing CSV Files

1. GUI
- CSV table has 3 columns like  country, rice_prod, wheat_prod
- In pg_admin created a table using sql query with 4 column fields including SERIAL id primary key
- Now to import the csv using GUI we have to remove the `id` part form other 3 columns to match the csv file

2. Using Code

```sql
COPY your_table_name
FROM '/path/to/your/file.csv'
DELIMITER ','
CSV HEADER;
```
  
