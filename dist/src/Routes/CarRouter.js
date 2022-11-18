"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CarController_1 = __importDefault(require("../Controllers/CarController"));
const carRoute = (0, express_1.Router)();
carRoute.post('/cars', (req, res, next) => new CarController_1.default(req, res, next).createNewCar());
exports.default = carRoute;
