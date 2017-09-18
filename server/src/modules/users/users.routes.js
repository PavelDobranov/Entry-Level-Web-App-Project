import validate from 'express-validation';
import { Router } from 'express';

import * as usersController from './users.controller';
import { authJwt } from '../../services/auth.service';

const userRoutes = new Router();

userRoutes.post('/register', validate(usersController.validations.create), usersController.create);
userRoutes.post('/login', usersController.login);
userRoutes.get('/:id', authJwt, usersController.getById);
userRoutes.put('/:id/change-password', validate(usersController.validations.changePassword), authJwt, usersController.changePassword);
userRoutes.put('/:id', validate(usersController.validations.update), authJwt, usersController.update);

export default userRoutes;
