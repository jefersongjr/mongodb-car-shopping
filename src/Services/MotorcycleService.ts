import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import CategoryFactory from '../utils/categoryFactory';
import ThrowException from '../Middlewares/exceptions/ThrowException';
import { isValidObjectId } from 'mongoose';

class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }
  
  motorcycleODM = new MotorcycleODM();
  
  public async addMotorcycle(motorcycle: IMotorcycle) {
    const categoryMotorcycle = CategoryFactory.create(motorcycle);
    const newMoto = await this.motorcycleODM.create(
      { ...motorcycle, category: categoryMotorcycle },
    );

    return this.createMotorcycleDomain(newMoto);
  }

  public async getMotorcycles() {
    const allMotorcycles = await this.motorcycleODM.find();
    if (!allMotorcycles) throw new ThrowException(422, 'Schema vázio');
    console.log(allMotorcycles)
    const motorcyclesArray = allMotorcycles.map((motorcycle) => this.createMotorcycleDomain(motorcycle));

    return motorcyclesArray;
  }
  
  public async getOnemotorcyclesArrayById(id: string) {
    if (!isValidObjectId(id)) throw new ThrowException(422, 'Invalid mongo id');
    const motorcycles = await this.motorcycleODM.findById(id);
    
    const motorcyclesArray = motorcycles.find((motorcycle) => motorcycle.id === id);
    console.log(motorcyclesArray)
  
    if (!motorcyclesArray) throw new ThrowException(404, 'Motorcycle not found');

    return this.createMotorcycleDomain(motorcyclesArray);
  }
}

export default MotorcycleService;