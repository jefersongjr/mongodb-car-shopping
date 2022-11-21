import CategoryType from '../utils/CategoryType';
import IVehicle from './IVehicle';

interface IMotorcycles extends IVehicle {
  category: CategoryType;
  engineCapacity: number;
}

export default IMotorcycles;