const express = require('express')
const app = express()
const port = 3000

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'api',
  password: '98765',
  port: 5432,
})

app.get('/', (req, res) => {
  pool.query('SELECT * FROM users;', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
})

app.listen(3000, () => {
  console.log(`${port}`)
})
