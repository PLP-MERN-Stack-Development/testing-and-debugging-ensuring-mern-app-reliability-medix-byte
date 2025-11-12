const { MongoMemoryServer } = require('mongodb-memory-server');

(async () => {
  const mongod = await MongoMemoryServer.create();
  console.log('TEST DB URI:', mongod.getUri());
  console.log('Press Ctrl+C to stop the ephemeral DB.');
})();
