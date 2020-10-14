import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload'
import Orphanagescontroller from './controllers/OrphanagesController'

const routes = Router();
const upload = multer(uploadConfig);

//métodos do controller
//index, show, create, upate, delete

routes.get('/orphanages', Orphanagescontroller.index);
routes.get('/orphanages/:id', Orphanagescontroller.show);
routes.post('/orphanages', upload.array('images'), Orphanagescontroller.create);

export default routes;

