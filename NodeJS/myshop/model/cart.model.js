import pool from "../db/dbConfig.js"

export default class Cart {
    constructor(id, userId) {
        this.id = id;
        this.userId = userId;
    }

    add() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                } else {
                    let sql = "insert into cart(userId) values(?)";
                    con.query(sql, [this.userId], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    });
                }
            });
        });
    }

    remove() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                } else {
                    let sql = "delete from cart where userId = ?";
                    con.query(sql, [this.userId], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    });
                }
            });
        });
    }
}