/* eslint-disable no-mixed-operators */
const dataForge = require('data-forge-fs')

// extract and prints first and last two rows

dataForge.readFile('exploratory-coding/data/monthly_crashes-cut-down.csv')
  .parseCSV()
  .then(dataFrame => {
    console.log('=== Head ===')
    console.log(dataFrame.head(2).toString())

    console.log('=== Tail ===')
    console.log(dataFrame.tail(2).toString())
  })
  .catch(err => {
    console.error(err && err.stack || err)
  })
