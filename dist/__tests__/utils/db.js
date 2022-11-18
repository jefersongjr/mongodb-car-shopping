"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearDatabase = exports.closeDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const closeDatabase = async () => {
    await mongoose_1.default.connection.dropDatabase();
    await mongoose_1.default.connection.close();
};
exports.closeDatabase = closeDatabase;
const clearDatabase = async () => {
    const collections = await mongoose_1.default.connection.db.collections();
    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany({});
    }
};
exports.clearDatabase = clearDatabase;
