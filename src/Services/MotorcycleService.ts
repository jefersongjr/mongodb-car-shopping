import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import CategoryFactory from '../utils/categoryFactory';

class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | undefined | null {
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
}

export default MotorcycleService;