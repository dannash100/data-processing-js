const mongo = require('promised-mongo')
const importFromMongoDB = require('../toolkit/importFromMongoDB.js')

// connects to earthquakes database using port 6000 which is mapped to MongoDB virtual machine

const db = mongo(
  'localhost:6000/earthquakes',
  ['largest_earthquakes']
)

importFromMongoDB(db, 'largest_earthquakes')
  .then(data => {
    console.log(data)
  })
  .then(() => db.close())
  .catch(err => {
    console.error(err)
  })
