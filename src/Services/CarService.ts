import ObjectId from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import ThrowException from '../Middlewares/exceptions/ThrowException';

class CarService {
  private createCarDomain(car: ICar | null): Car | undefined | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }
  carODM = new CarODM();
  public async addCar(car: ICar) {
    const newCar = await this.carODM.create(car);

    return this.createCarDomain(newCar);
  }
  
  public async getCars() {
    const allCars = await this.carODM.find();
    const carsArray = allCars.map((car) => this.createCarDomain(car));
    return carsArray;
  }
  
  public async getOneCarsById(id: string) {
    const cars = await this.carODM.findById(id);
    
    if (!ObjectId.isValidObjectId(id)) throw new ThrowException(422, 'Invalid mongo id');
    const carsArray = cars.find((car) => car.id === id);
  
    if (!carsArray) throw new ThrowException(404, 'Car not found');
    const responseCar = this.createCarDomain(carsArray);

    return responseCar;
  }
}

export default CarService;