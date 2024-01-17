import pool from "../db/dbConfig.js"

export default class CartItems {
    constructor(id, cartId, ProductId) {
        this.id = id;
        this.cartId = cartId;
        this.ProductId = ProductId;
    }

    add() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                } else {
                    let sql = "insert into cartitems(cartId, productId) values(?, ?)";
                    con.query(sql, [this.cartId, this.ProductId], (err, result) => {
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
                    let sql = "delete from cartitems where id = ?";
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
                    let sql = "select * from cartitems";
                    con.query(sql, (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    });
                }
            });
        });
    }
}