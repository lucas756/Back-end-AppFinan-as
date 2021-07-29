import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ClientController from './app/controllers/ClientController';
import ServicesController from './app/controllers/ServicesController';
import SchedulesController from './app/controllers/SchedulesController';

const routes = new Router();
const upload = multer(multerConfig);

// Routes without authentication.
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/cliente', ClientController.store);
routes.get('/cliente', ClientController.index);
routes.post('/services', ServicesController.store);
routes.get('/services', ServicesController.index);
routes.post('/schedules', SchedulesController.store);
routes.get('/schedules', SchedulesController.index);



export default routes;
