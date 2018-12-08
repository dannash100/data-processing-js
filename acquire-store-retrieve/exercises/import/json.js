const importJsonFile = require('../../toolkit/importJsonFile.js')

importJsonFile('../../data/earthquakes.json')
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.error('error occured \n' + err.trace)
  })
