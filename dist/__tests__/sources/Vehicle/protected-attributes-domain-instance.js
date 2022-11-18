"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vehicle_1 = __importDefault(require("../../../src/Domains/Vehicle"));
const vehicleMock_1 = require("../../utils/vehicleMock");
const newMotorcycle = vehicleMock_1.validVehicle;
const vehicle = new Vehicle_1.default(newMotorcycle);
vehicle.model;
vehicle.year;
vehicle.color;
vehicle.buyValue;
