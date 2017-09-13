import express from 'express';

import env from './config/env.config';
import './config/database.config';
import middlewaresConfig from './config/middlewares.config';
import apiRoutes from './modules';

const app = express();

middlewaresConfig(app);
apiRoutes(app);

app.listen(env.port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Server running on port: ${env.port}`);
    console.log(`Enviroment: ${process.env.NODE_ENV}`);
  }
});
