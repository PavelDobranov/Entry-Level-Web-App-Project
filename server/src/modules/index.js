import userRoutes from './users/users.routes';
import countryRoutes from './countries/countries.routes';

export default (app) => {
  app.use('/api/users', userRoutes);
  app.use('/api/countries', countryRoutes);
};
