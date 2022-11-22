import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const MotorcycleRoute = Router();

MotorcycleRoute.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).createNewMotorcycle(),
);

export default MotorcycleRoute; 