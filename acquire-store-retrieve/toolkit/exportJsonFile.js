const file = require('./file.js')

function exportJsonFile (fileName, data) {
  const json = JSON.stringify(data, null, 2)
  return file.write(fileName, json)
}

module.exports = exportJsonFile
