"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class CarODM {
    constructor() {
        this.schema = new mongoose_1.Schema({
            model: { type: String, required: true },
            year: { type: Number, required: true },
            color: { type: String, required: true },
            status: { type: Boolean, required: true },
            buyValue: { type: Number, required: true },
            doorsQty: { type: Number, required: true },
            seatsQty: { type: Number, required: true },
        });
        this.model = mongoose_1.models.cars || (0, mongoose_1.model)('cars', this.schema);
    }
    async create(car) {
        return this.model.create({ ...car });
    }
}
exports.default = CarODM;
