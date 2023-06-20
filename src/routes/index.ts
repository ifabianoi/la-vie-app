import { Router } from 'express'
import { home } from '../controllers/HomeController';

const routes: Router = Router();

routes.get('/', home.dashboard);

export { routes };