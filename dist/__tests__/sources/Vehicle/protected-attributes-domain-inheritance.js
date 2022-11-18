"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vehicle_1 = __importDefault(require("../../../src/Domains/Vehicle"));
class subVehicleTest extends Vehicle_1.default {
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    getColor() {
        return this.color;
    }
    getBuyValue() {
        return this.buyValue;
    }
    getId() {
        return this.id;
    }
}
