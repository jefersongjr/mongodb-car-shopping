import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRoute = Router();

carRoute.post('/cars',
    (req, res, next) => new CarController(req, res, next).createNewCar(),
);


export default carRoute;