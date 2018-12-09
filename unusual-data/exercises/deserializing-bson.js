const fs = require('fs')
const BSON = require('bson')

const loadedData = fs.readFileSync('../data/earthquakes.bson')

const bson = new BSON()
const deseralizedData = bson.deserialize(loadedData)

console.log(deseralizedData)
