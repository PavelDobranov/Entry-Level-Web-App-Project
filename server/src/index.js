import express from 'express';

import env from './config/env';
import './config/database';

const app = express();

app.listen(env.port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Server running on port: ${env.port}`);
    console.log(`Enviroment: ${process.env.NODE_ENV}`);
  }
});
