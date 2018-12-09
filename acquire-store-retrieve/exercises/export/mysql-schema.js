const mysql = require('nodejs-mysql').default

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

const createDbCmd = 'create table largest_earthquakes_export ( Magnitude double, Time datetime, Latitude double, `Depth/Km` double'

db.exec(createDbCmd)
  .then(() => console.log('database table created!'))
  .catch((err) => console.log('failed to create the database table\n' + err.stack))
