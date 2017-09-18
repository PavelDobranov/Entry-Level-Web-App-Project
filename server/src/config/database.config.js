import mongoose from 'mongoose';

import env from './env.config';
import Countries from '../modules/countries/countries.model';
import countriesSeed from '../seeds/countries';

mongoose.Promise = global.Promise;

try {
  mongoose.connect(env.dbConnectionString, { useMongoClient: true });
} catch (error) {
  mongoose.createConnection(env.dbConnectionString, { useMongoClient: true });
}

const seedCountries = async () => {
  try {
    const countries = await Countries.find({});

    if (!countries.length) {
      await Countries.insertMany(countriesSeed);
      console.log('Countries data seeded');
    }
  } catch (error) {
    throw error;
  }
};

mongoose.connection
  .once('open', () => {
    console.log('Database up and running...');
    seedCountries();
  })
  .on('error', (error) => { throw error; });
