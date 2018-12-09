const file = require('../toolkit/file.js')

// parseCustomData: pattern match each line

// while loop: matches each pattern in the data file
// discards first group in the match, this is always the entire matched pattern
// saves the other groups, each is a row of data

// extracts header row to get column names
// for loop: transforms the rows, each row is an array ordered by column, transforms each row to a record index by column name

// returns hash table data

function parseCustomData (textFileData) {
  const regex = /(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)$/gm

  let rows = []
  let m

  while ((m = regex.exec(textFileData)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++
    }

    m.shift()

    rows.push(m)
  }

  let header = rows.shift()
  let data = rows.map(row => {
    let hash = {}
    for (let i = 0; i < header.length; ++i) {
      hash[header[i]] = row[i]
    }
    return hash
  })

  return data
}

file.read('../data/earthquakes.txt')
  .then(textFileData => parseCustomData(textFileData))
  .then(data => console.log(data))
  .catch(err => console.log(err.stack))
