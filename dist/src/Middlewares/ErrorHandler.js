"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandler {
    static handle(error, _req, res, next) {
        res.status(500).json({ message: error.message });
        next();
    }
}
exports.default = ErrorHandler;
