/* eslint-disable node/no-deprecated-api */
const fs = require('fs')
const moment = require('moment')

// buffer must specify its size based on amount of records and then write the length to the buffer.

const records = JSON.parse(
  fs.readFileSync('../data/earthquakes.json', 'utf8')
)

const bufferSize = 4 + 8 * 5 * records.length
const buffer = new Buffer(bufferSize)

buffer.writeInt32LE(records.length)

let bufferOffset = 4

for (let i = 0; i < records.length; i++) {
  const record = records[i]
  const time = moment(record.Time).toDate().getTime()
  buffer.writeDoubleLE(time, bufferOffset)
  bufferOffset += 8

  buffer.writeDoubleLE(record.Latitude, bufferOffset)
  bufferOffset += 8

  buffer.writeDoubleLE(record.Longitude, bufferOffset)
  bufferOffset += 8

  buffer.writeDoubleLE(record.Depth_Km, bufferOffset)
  bufferOffset += 8

  buffer.writeDoubleLE(record.Magnitude, bufferOffset)
  bufferOffset += 8
}

fs.writeFileSync('../output/earthquakes.bin', buffer)
