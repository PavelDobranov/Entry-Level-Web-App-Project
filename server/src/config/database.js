import mongoose from 'mongoose';

import env from './env';

mongoose.Promise = global.Promise;

try {
  mongoose.connect(env.dbConnectionString);
} catch (error) {
  mongoose.createConnection(env.dbConnectionString);
}

mongoose.connection
  .once('open', () => console.log('Database up and running...'))
  .on('error', (error) => {
    throw error;
  });
