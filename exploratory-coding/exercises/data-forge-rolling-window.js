/* eslint-disable no-mixed-operators */
const dataForge = require('data-forge-fs')
const formulajs = require('formulajs')

// Uses Month# as DF index, allows computed trend series to be merged back into DF
// Uses rollingWindow to iterate the data set in six-month chunks
// produces a forecast from each six-month window
// restores the index and values so that the series can be merged back into DF
// merges computed series back into DF
// Displays content of merged DF

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
      .setIndex('Month#')
    const fatalitiesSeries = dataFrame.getSeries('Fatalities')
    const fatalitiesSeriesWithForecast =
      fatalitiesSeries.rollingWindow(6)
        .select(window => {
          const fatalitiesValues = window.toArray()
          const monthNoValues =
            window.getIndex().toArray()
          const nextMonthNo =
            monthNoValues[monthNoValues.length - 1] + 1
          return [
            nextMonthNo,
            formulajs.FORECAST(
              nextMonthNo,
              fatalitiesValues,
              monthNoValues
            )
          ]
        })
        .withIndex(pair => pair[0])
        .select(pair => pair[1])
    const dataFrameWithForecast = dataFrame.withSeries({
      Trend: fatalitiesSeriesWithForecast
    })
    console.log(dataFrameWithForecast.toString())
    return dataFrameWithForecast
      .asCSV()
      .writeFile('exploratory-coding/output/trend_output.csv')
  })
  .catch(err => {
    console.error(err && err.stack || err)
  })
