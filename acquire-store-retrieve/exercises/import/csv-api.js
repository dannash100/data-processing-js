const importCsvFromRestApi = require('../toolkit/imprtCsvFromRestApi')

const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query.csv?starttime=2017-01-01&endtime=2017-02-02'

importCsvFromRestApi(url)
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.error(err)
  })
