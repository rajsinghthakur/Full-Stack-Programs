import mysql from "mysql2";

export default mysql.createPool({
    user: "root",
    password: "Raj@882714",
    database: "myshop",
    host: "localhost",
    connectionLimit: 100
});