const papa = require('papaparse')
const file = require('./file.js')

// header option makes Papa Parse recognize the first line of CSV as a header that specifies column names
// dynamic typing allows for automatic type conversion based on what the value looks like

function importCsvFile (filePath) {
  return file.read(filePath)
    .then(textFileData => {
      const result = papa.parse(textFileData, {
        header: true,
        dynamicTyping: true
      })
      return result.data
    })
}

module.exports = importCsvFile
