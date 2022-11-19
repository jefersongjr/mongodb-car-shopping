import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRoute = Router();

carRoute.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).createNewCar(),
);

carRoute.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).getAllCar(),
);

carRoute.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).getById(),
);

carRoute.patch(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).updateCarById(),
);

export default carRoute; 