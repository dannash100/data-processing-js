const request = require('request-promise')

function importJsonFromRestApi (url) {
  return request.get(url)
    .then(response => {
      console.log(response)
      return JSON.parse(response)
    })
}

module.exports = importJsonFromRestApi
