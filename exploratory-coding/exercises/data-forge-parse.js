/* eslint-disable no-mixed-operators */
const dataForge = require('data-forge-fs')

dataForge.readFile('exploratory-coding/data/monthly_crashes-cut-down.csv')
  .parseCSV()
  .then(dataFrame => {
    dataFrame = dataFrame.parseFloats([
      'Month#',
      'Year',
      'Crashes',
      'Fatalities',
      'Hospitalized'
    ])
    console.log(dataFrame.detectTypes().toString())
  })
  .catch(err => {
    console.error(err && err.stack || err)
  })
