import pg from 'pg'
const client = new pg.Client()
 
client.connect((err) => {
   client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
     console.log(err ? err.stack : res.rows[0].message) // Hello World!
     client.end()
   })
})
