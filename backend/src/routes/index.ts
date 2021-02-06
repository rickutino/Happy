import { Router } from 'express';
import OrphanageController from '../controllers/OrphanagesController';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

routes.get('/orphanages', OrphanageController.index);
routes.get('/orphanages/:id', OrphanageController.show);
routes.post('/orphanages', OrphanageController.create);

export default routes;
