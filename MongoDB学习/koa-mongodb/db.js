const { MongoClient } = require('mongodb')
const url = 'mongodb://127.0.0.1:27017/demo01'

let utils = {
  insert: async (data) => {
    try {
      const db = await MongoClient.connect(url)
      const dbbase = db.db('demo01')
      let result = await dbbase.collection('user').insertOne(data)
      db.close()
      return result
    } catch (error) {
      console.log(error);
    }
  },
  find: async (data = {}) => {
    try {
      const db = await MongoClient.connect(url)
      const dbbase = db.db('demo01')
      let result = await dbbase.collection('user').find(data).toArray()
      db.close()
      return result
    } catch (error) {
      console.log(error);
    }
  },
  update: async (data) => {
    try {
      const db = await MongoClient.connect(url)
      const dbbase = db.db('demo01')
      let result = await dbbase.collection('user').findOneAndUpdate({ name: data.name }, { $set: data }, { 'new': true })
      console.log(result);
      db.close()
      return result
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = utils