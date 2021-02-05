/* eslint-disable camelcase */
import { Router } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

routes.post('/orphanages', async (request, response) => {
  console.log(request.body);
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  } = request.body;

  const orphanagesRepository = getRepository(Orphanage);

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  });

  await orphanagesRepository.save(orphanage);

  return response.status(201).json(orphanage);
});

export default routes;
