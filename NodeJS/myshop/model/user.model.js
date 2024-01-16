import pool from "../db/dbConfig.js";

class User {
    constructor(id, username, password, email, contact) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.contact = contact;
    }

    signUp() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                } else {
                    let sql = "insert into user(username, password, email, contact) values(?,?,?,?)";
                    con.query(sql, [this.username, this.password, this.email, this.contact], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    });
                }
            });
        });
    }

    signIn() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);

                } else {
                    let sql = "select * from user where username = ? and password =?";
                    con.query(sql, [this.username, this.password], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    });
                }
            });
        });
    }
}

export default User;