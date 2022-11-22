import ObjectId from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import ThrowException 
  from '../Middlewares/exceptions/ThrowException';

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
    const carArray = cars.find((car) => car.id === id);
  
    if (!carArray) throw new ThrowException(404, 'Car not found');
    const responseCar = this.createCarDomain(carArray);

    return responseCar;
  }
   
  public async updateCars(id: string, car: ICar) {
    if (!ObjectId.isValidObjectId(id)) throw new ThrowException(422, 'Invalid mongo id');
    const response = await this.carODM.updateById(id, car);
    
    if (!response) throw new ThrowException(404, 'Car not found');
    const carUpdated = [response].map((item) => this.createCarDomain(item));
      
    return carUpdated;
  }
}

export default CarService;