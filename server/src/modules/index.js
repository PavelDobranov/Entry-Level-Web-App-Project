import userRoutes from './users/users.routes';

export default (app) => {
  app.use('/api/users', userRoutes);
};
