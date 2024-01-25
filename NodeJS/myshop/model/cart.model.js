import pool from "../db/dbConfig.js"

export default class Cart {
    constructor(id, userId) {
        this.id = id;
        this.userId = userId;
    }

    static isCartExist(userId) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) reject(err);
                else {
                    let sql = "select * from cart where userId = ?";
                    con.query(sql, [userId], (err, result) => {
                        con.release();
                        err ? reject(err) : resolve(result);
                    })
                }
            });
        });

    }

    static createCart(userId) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) reject(err);
                else {
                    let sql = "insert into cart(userId) values(?)";
                    con.query(sql, [userId], (err, result) => {
                        if (err)
                            reject(err);
                        else {
                            let sql = "select * from cart where userId = ?";
                            con.query(sql, [userId], (err, result) => {
                                con.release();
                                err ? reject(err) : resolve(result);
                            });
                        }
                    })
                }
            });
        });
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
                    let sql = "delete from cart where id = ?";
                    con.query(sql, [this.id], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    });
                }
            });
        });
    }

    static list() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                } else {
                    let sql = 'select * from cart';
                    con.query(sql, (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    });
                }
            });
        });
    }
}