import IMotorcycle from '../Interfaces/IMotorcycle';
import CategoryType from '../utils/CategoryType';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private engineCapacity: number;
  private category: CategoryType;

  constructor(motorcycle : IMotorcycle) {
    super(motorcycle);
    this.engineCapacity = motorcycle.engineCapacity;
    this.category = motorcycle.category;
  }

  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }

  public setCategory(category: number) {
    this.category = category;
  }

  public getCategory() {
    return this.category;
  }
}

export default Motorcycle;