"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CarService_1 = __importDefault(require("../Services/CarService"));
class CarController {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
        this.service = new CarService_1.default();
    }
    async createNewCar() {
        const car = {
            model: this.req.body.model,
            year: this.req.body.year,
            color: this.req.body.color,
            status: this.req.body.status,
            buyValue: this.req.body.buyValue,
            doorsQty: this.req.body.doorsQty,
            seatsQty: this.req.body.seatsQty,
        };
        try {
            const newCar = await this.service.addCar(car);
            return this.res.status(201).json(newCar);
        }
        catch (error) {
            this.next(error);
        }
    }
}
exports.default = CarController;
