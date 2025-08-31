import { DataSource } from "typeorm"

export const myDataSource = new DataSource({
    type: "mysql",
    host: "mysql-test-esfe-8ff0.b.aivencloud.com",
    port: 20787,
    username: "avnadmin",
    password: "AVNS_PfxZhqEHsyFEn50ylaO",
    database: "Mydatabase",
    entities: ["src/entity/*.ts"],
    logging: true,
    synchronize: false,
})

