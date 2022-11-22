import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private engineCapacity: number;
  private category: string;

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

  public setCategory(category: string) {
    this.category = category;
  }

  public getCategory() {
    return this.category;
  }
}

export default Motorcycle;