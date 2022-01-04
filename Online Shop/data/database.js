const mongodb = require('mongodb');
require("dotenv").config();
const MongoClient = mongodb.MongoClient;

let mongodbUrl = 'mongodb://localhost:27017';

if(process.env.MONGODB_URL) {
  mongodbUrl = process.env.MONGODB_URL;
}

let database;

async function initDatabase() {
  const client = await MongoClient.connect(mongodbUrl);
  database = client.db('onlineshop');
}

function getDb() {
  if (!database) {
    throw new Error('You must connect first!');
  }

  return database;
}

module.exports = {
  initDatabase: initDatabase,
  getDb: getDb
};

