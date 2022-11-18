import Car from "../Domains/Car";
import ICar from "../Interfaces/ICar";
import CarODM from "../Models/CarODM";

class CarService {
    private createCarDomain(car: ICar | null): Car | undefined | null {
        if(car) {
            return new Car(
                car.id,
                car.model,
                car.year,
                car.color,
                car.status,
                car.buyValue,
                car.doorsQty,
                car.seatsQty, 
            );
        }
        return null;
    }
    carODM = new CarODM();
    public async addCar(car: ICar) {
        // if(!car) throw new Error('requisição errada')!
    const newCar = await this.carODM.create(car);

    return this.createCarDomain(newCar)
    }
}

export default CarService;