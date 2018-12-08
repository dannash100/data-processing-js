function importFromMongoDb (db, collectionName) {
  return db[collectionName].find().toArray()
}

module.exports = importFromMongoDb
