"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
exports.app.get('/', (req, res) => {
    res.send('Hello from TypeScript Express server!');
});
exports.app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
