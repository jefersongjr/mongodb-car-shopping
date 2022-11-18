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
const MotorcyclesMock_1 = require("./utils/MotorcyclesMock");
describe('08 - Crie a rota /motorcycles/:id onde seja possível atualizar uma moto por ID', () => {
    let VALID_ID;
    beforeAll(async () => {
        await (0, Connection_1.default)();
        await (0, db_1.clearDatabase)();
        const schema = new mongoose_1.Schema({}, { strict: false });
        const Motorcycle = (0, mongoose_1.model)('Motorcycle', schema);
        const motorcycle = new Motorcycle(MotorcyclesMock_1.validMotorcycle);
        const { _id } = await motorcycle.save();
        VALID_ID = _id;
    });
    afterAll(async () => await (0, db_1.closeDatabase)());
    it('Será validado que não é possível alterar uma moto que não existe', async () => {
        const { body, statusCode, } = await (0, supertest_1.default)(app_1.default).put('/motorcycles/1111222233330000ffffcccc').send(MotorcyclesMock_1.updatedMotorcycle);
        expect(statusCode).toEqual(404);
        expect(body.message).toEqual('Motorcycle not found');
    });
    it('Será validado que não é possível alterar uma moto quando o formato do id esta inválido', async () => {
        const { body, statusCode, } = await (0, supertest_1.default)(app_1.default).put('/motorcycles/INVALID_MONGO_ID').send(MotorcyclesMock_1.updatedMotorcycle);
        expect(statusCode).toEqual(422);
        expect(body.message).toEqual('Invalid mongo id');
    });
    it('Será validado que é possível alterar uma moto com sucesso', async () => {
        const { body, statusCode, } = await (0, supertest_1.default)(app_1.default).put(`/motorcycles/${VALID_ID}`).send(MotorcyclesMock_1.updatedMotorcycle);
        expect(statusCode).toEqual(200);
        expect(body).toHaveProperty('id');
        expect(body).toHaveProperty('model');
        expect(body.model).toEqual('Honda CG Titan 150');
        expect(body).toHaveProperty('year');
        expect(body.year).toEqual(2020);
        expect(body).toHaveProperty('color');
        expect(body.color).toEqual('Black');
        expect(body).toHaveProperty('status');
        expect(body.status).toEqual(true);
        expect(body).toHaveProperty('buyValue');
        expect(body.buyValue).toEqual(8.200);
        expect(body).toHaveProperty('category');
        expect(body.category).toEqual('Street');
        expect(body).toHaveProperty('engineCapacity');
        expect(body.engineCapacity).toEqual(150);
    });
});
