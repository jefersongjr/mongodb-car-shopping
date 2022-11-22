import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const MotorcycleRoute = Router();

MotorcycleRoute.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).createNewMotorcycle(),
);

MotorcycleRoute.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).getAllMotorcycle(),
);

MotorcycleRoute.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);


export default MotorcycleRoute; 