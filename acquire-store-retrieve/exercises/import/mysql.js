const importFromMySql = require('../toolkit/importFromMySql.js')
const mysql = require('node-mysql').default

const config = {
  host: 'localhost',
  port: 5000,
  user: 'root',
  password: 'root',
  database: 'earthquakes',
  dateStrings: true,
  debug: true
}

const db = mysql.getInstance(config)

return importFromMySql(db, 'largest_earthquakes')
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.error(err)
  })
