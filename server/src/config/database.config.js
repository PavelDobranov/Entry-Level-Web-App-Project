import mongoose from 'mongoose';

import env from './env.config';

mongoose.Promise = global.Promise;

try {
  mongoose.connect(env.dbConnectionString, { useMongoClient: true });
} catch (error) {
  mongoose.createConnection(env.dbConnectionString, { useMongoClient: true });
}

mongoose.connection
  .once('open', () => console.log('Database up and running...'))
  .on('error', (error) => { throw error; });
