"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = __importDefault(require("../../../src/Domains/Car"));
const CarsMock_1 = require("../../utils/CarsMock");
const newCar = CarsMock_1.validCar;
const car = new Car_1.default(newCar);
car.doorsQty;
car.seatsQty;
