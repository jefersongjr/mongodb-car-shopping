"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Motorcycle_1 = __importDefault(require("../../../src/Domains/Motorcycle"));
class subMotorcycleTest extends Motorcycle_1.default {
    getCategory() {
        return this.category;
    }
    getEngineCapacity() {
        return this.engineCapacity;
    }
}
