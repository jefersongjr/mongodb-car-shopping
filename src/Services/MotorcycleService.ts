import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import CategoryFactory from '../utils/categoryFactory';
import ThrowException from '../Middlewares/exceptions/ThrowException';

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
    const motorcyclesArray = allMotorcycles.map(
      (motorcycle) => this.createMotorcycleDomain(motorcycle),
    );

    return motorcyclesArray;
  }
  
  public async getOnemotorcyclesArrayById(id: string) {
    if (!isValidObjectId(id)) throw new ThrowException(422, 'Invalid mongo id');
    const motorcycles = await this.motorcycleODM.findById(id);
    
    const motorcyclesArray = motorcycles.find((motorcycle) => motorcycle.id === id);
  
    if (!motorcyclesArray) throw new ThrowException(404, 'Motorcycle not found');

    return this.createMotorcycleDomain(motorcyclesArray);
  }

  public async updateMotorcycles(id: string, motorcycle: IMotorcycle) {
    if (!isValidObjectId(id)) throw new ThrowException(422, 'Invalid mongo id');
    const response = await this.motorcycleODM.updateById(id, motorcycle);
    
    if (!response) throw new ThrowException(404, 'Motorcycle not found');
    const motorcycleUpdated = [response].map((item) => this.createMotorcycleDomain(item));
      
    return motorcycleUpdated;
  }
}

export default MotorcycleService;