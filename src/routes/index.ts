import { Router } from 'express';

import { home } from '../controllers/HomeController.js';

const routes: Router = Router();

routes.get('/', home.dashboard);

export { routes };
