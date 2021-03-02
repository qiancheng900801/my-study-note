const { MongoClient } = require('mongodb')
const uri = 'mongodb://127.0.0.1:27017'
const dbName = 'itying'
let dbUtils = {
  find: async () => {
    const client = await MongoClient.connect(uri, { useUnifiedTopology: true })
    const db = client.db(dbName)
    const collection = db.collection('admin')
    let result = await collection.find({}).toArray()
    client.close()
    return result
  }
}

module.exports = dbUtils