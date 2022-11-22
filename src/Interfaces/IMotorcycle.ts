import IVehicle from './IVehicle';

interface IMotorcycles extends IVehicle {
  category: string;
  engineCapacity: number;
}

export default IMotorcycles;