// server/tests/setupTestDB.js
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongod;

module.exports = {
  async connect() {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    return uri;
  },
  async closeDatabase() {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    if (mongod) await mongod.stop();
  },
  async clearDatabase() {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
      await collections[key].deleteMany({});
    }
  }
};
