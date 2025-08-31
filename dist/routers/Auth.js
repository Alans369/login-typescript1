"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.post('/', (req, res) => {
    const datos = req.body;
    res.json(datos);
});
//# sourceMappingURL=Auth.js.map