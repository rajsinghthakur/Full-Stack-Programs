import mysql from "mysql2";

const pool2 = mysql.createPool({
    user: 'root',
    password: 'Raj@882714',
    host: 'localhost',
    database: 'e_com'
});

export default pool2;