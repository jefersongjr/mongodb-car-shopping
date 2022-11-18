"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = __importDefault(require("../../../src/Domains/Car"));
class subCarTest extends Car_1.default {
    getDoorsQty() {
        return this.doorsQty;
    }
    getSeatsQty() {
        return this.seatsQty;
    }
}
