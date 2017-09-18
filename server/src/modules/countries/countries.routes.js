import { Router } from 'express';

import * as countriesController from './countries.controller';

const countryRoutes = new Router();

countryRoutes.get('/', countriesController.getAll);

export default countryRoutes;
