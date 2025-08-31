"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const Auth_1 = require("./routers/Auth");
const _data_source_1 = require("./ data-source");
// establish database connection
try {
    async function initializeDataSource() {
        exports.dataSource = await _data_source_1.myDataSource.initialize();
        console.log("Data Source has been initialized!");
    }
    initializeDataSource();
}
catch (error) {
    console.error("Error during Data Source initialization:", error);
}
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', Auth_1.router);
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
//# sourceMappingURL=app.js.map