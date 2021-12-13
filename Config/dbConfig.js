const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://root:password@localhost:27017';
const dbName = 'medibookerdb';

async function connect() {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  return db;
}

module.exports = connect;
