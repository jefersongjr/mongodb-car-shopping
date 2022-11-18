import Car from "../Domains/Car";
import ICar from "../Interfaces/ICar";
import CarODM from "../Models/CarODM";

class CarService {
    private createCarDomain(car: ICar | null): Car | undefined | null {
        if(car) {
            return new Car(car);
        }
        return null;
    }
    carODM = new CarODM();
    public async addCar(car: ICar) {
    const newCar = await this.carODM.create(car);

    return this.createCarDomain(newCar)
    }
}

export default CarService;