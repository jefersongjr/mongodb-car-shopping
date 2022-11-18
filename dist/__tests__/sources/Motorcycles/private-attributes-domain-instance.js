"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Motorcycle_1 = __importDefault(require("../../../src/Domains/Motorcycle"));
const MotorcyclesMock_1 = require("../../utils/MotorcyclesMock");
const newMotorcycle = MotorcyclesMock_1.validMotorcycle;
const motorcycle = new Motorcycle_1.default(newMotorcycle);
motorcycle.category;
motorcycle.engineCapacity;
