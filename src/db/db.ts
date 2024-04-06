import { createPool, Pool, PoolOptions } from "mysql2/promise";

const access: PoolOptions = {
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306,
    database: "pruebas-memo",
}

const conn: Pool = createPool(access);

export default conn;