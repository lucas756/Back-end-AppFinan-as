import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ParcelaController from './app/controllers/ParcelaController';
import GrupoController from './app/controllers/GrupoController';
import ComprovanteController from './app/controllers/ComprovanteController';
import FileController from './app/controllers/FileController';

const routes = new Router();
const upload = multer(multerConfig);

// Routes without authentication.
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);


routes.get('/grupo', GrupoController.index); 

// Routes with authentication.
routes.put('/users', UserController.update); 
routes.post('/grupo', GrupoController.store); 
routes.post('/parcelas', upload.single('file'), ParcelaController.store);
routes.get('/parcelas', ParcelaController.index);
routes.post('/comprovante', upload.single('imagem'), ComprovanteController.store);
routes.post('/file', upload.single('file'), FileController.store);

export default routes;
