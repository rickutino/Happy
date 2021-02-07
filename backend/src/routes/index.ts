import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import OrphanageController from '../controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

routes.get('/orphanages', OrphanageController.index);
routes.get('/orphanages/:id', OrphanageController.show);
routes.post('/orphanages', upload.array('images'), OrphanageController.create); // upload.single() para uma imagem a ser salva

export default routes;
