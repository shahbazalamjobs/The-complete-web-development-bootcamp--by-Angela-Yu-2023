import pg from 'pg'
const client = new pg.Client({
    host: "localhost",
    user: "postgres",
    password: "abc123", // Make sure this is a string
    // database: "world",
    port: 5432
})
await client.connect()

try {
    const res = await client.query('SELECT $1::text as message', ['Hello world!'])
    console.log(res.rows[0].message) // Hello world!
} catch (err) {
    console.error(err);
} finally {
    await client.end()
}
