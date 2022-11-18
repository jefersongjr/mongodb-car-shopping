"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const mongoose_1 = require("mongoose");
const app_1 = __importDefault(require("../src/app"));
const Connection_1 = __importDefault(require("../src/Models/Connection"));
const db_1 = require("./utils/db");
const CarsMock_1 = require("./utils/CarsMock");
describe('04 - Crie a rota /cars/:id onde seja possível atualizar um carro por ID', () => {
    let VALID_ID;
    beforeAll(async () => {
        await (0, Connection_1.default)();
        await (0, db_1.clearDatabase)();
        const schema = new mongoose_1.Schema({}, { strict: false });
        const Car = (0, mongoose_1.model)('Car', schema);
        const car = new Car(CarsMock_1.validCar);
        const { _id } = await car.save();
        VALID_ID = _id;
    });
    afterAll(async () => await (0, db_1.closeDatabase)());
    it('Será validado que não é possível alterar um carro que não existe', async () => {
        const { body, statusCode, } = await (0, supertest_1.default)(app_1.default).put('/cars/1111222233330000ffffcccc').send(CarsMock_1.updatedCar);
        expect(statusCode).toEqual(404);
        expect(body.message).toEqual('Car not found');
    });
    it('Será validado que não é possível alterar um carro quando o formato do id esta inválido', async () => {
        const { body, statusCode, } = await (0, supertest_1.default)(app_1.default).put('/cars/INVALID_MONGO_ID').send(CarsMock_1.updatedCar);
        expect(statusCode).toEqual(422);
        expect(body.message).toEqual('Invalid mongo id');
    });
    it('Será validado que é possível alterar um carro com sucesso', async () => {
        const { body, statusCode, } = await (0, supertest_1.default)(app_1.default).put(`/cars/${VALID_ID}`).send(CarsMock_1.updatedCar);
        expect(statusCode).toEqual(200);
        expect(body).toHaveProperty('id');
        expect(body).toHaveProperty('model');
        expect(body.model).toEqual('Uno da Escada');
        expect(body).toHaveProperty('year');
        expect(body.year).toEqual(1979);
        expect(body).toHaveProperty('color');
        expect(body.color).toEqual('Red');
        expect(body).toHaveProperty('status');
        expect(body.status).toEqual(true);
        expect(body).toHaveProperty('buyValue');
        expect(body.buyValue).toEqual(3500);
        expect(body).toHaveProperty('doorsQty');
        expect(body.doorsQty).toEqual(2);
        expect(body).toHaveProperty('seatsQty');
        expect(body.seatsQty).toEqual(4);
    });
});
