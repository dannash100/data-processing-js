const file = require('./toolkit/file.js')

file.read('../data/earthquakes.csv')
  .then(textFileData => {
    console.log(textFileData)
  })
  .catch(err => {
    console.error('an error occurred \n' + err)
  })
