"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.myDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "mysql-test-esfe-8ff0.b.aivencloud.com",
    port: 20787,
    username: "avnadmin",
    password: "AVNS_PfxZhqEHsyFEn50ylaO",
    database: "Mydatabase",
    entities: ["src/entity/*.js"],
    logging: true,
    synchronize: false,
});
//# sourceMappingURL=%20data-source.js.map