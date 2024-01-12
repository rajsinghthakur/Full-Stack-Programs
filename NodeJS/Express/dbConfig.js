import mysql from "mysql2";

const pool = mysql.createPool({
    user: 'root',
    password: 'Raj@882714',
    host: 'localhost',
    database: 'testdb'
});

export default pool;