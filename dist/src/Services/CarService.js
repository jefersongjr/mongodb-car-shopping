"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = __importDefault(require("../Domains/Car"));
const CarODM_1 = __importDefault(require("../Models/CarODM"));
class CarService {
    constructor() {
        this.carODM = new CarODM_1.default();
    }
    createCarDomain(car) {
        if (car) {
            return new Car_1.default(car.id, car.model, car.year, car.color, car.status, car.buyValue, car.doorsQty, car.seatsQty);
        }
        return null;
    }
    async addCar(car) {
        const newCar = await this.carODM.create(car);
        return this.createCarDomain(newCar);
    }
}
exports.default = CarService;
