import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import carRoute from './Routes/CarRouter';
import MotorcycleRoute from './Routes/MotorcycleRouter';

const app = express();

app.use(express.json());
app.use(carRoute);
app.use(MotorcycleRoute);
app.use(ErrorHandler.handle);

export default app;
