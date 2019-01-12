/* eslint-disable no-mixed-operators */

const dataForge = require('data-forge-fs')

dataForge.readFile('exploratory-coding/data/monthly_crashes-cut-down.csv')
  .parseCSV()
  .then(dataFrame => {
    console.log(dataFrame.getColumnNames())
  })
  .catch(err => {
    console.error(err && err.stack || err)
  })
