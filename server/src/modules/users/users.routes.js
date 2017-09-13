import validate from 'express-validation';
import { Router } from 'express';

import * as usersController from './users.controller';

const userRoutes = new Router();

userRoutes.get('/', usersController.getAll);
userRoutes.post('/register', validate(usersController.validations.create), usersController.create);
userRoutes.put('/:id', validate(usersController.validations.update), usersController.update);

export default userRoutes;
