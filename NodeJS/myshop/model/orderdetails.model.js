import pool from "../db/dbConfig.js"

export default class Order {
    constructor(id, userId, orderDate, amount, paymentMode, deliverAddress, contactPersonNumber) {
        this.id = id;
        this.userId = userId;
        this.orderDate = orderDate;
        this.amount = amount;
        this.paymentMode = paymentMode;
        this.deliverAddress = deliverAddress;
        this.contactPersonNumber = contactPersonNumber;
    }

    add() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                } else {
                    let sql = "insert into orderdetails(userId, orderDate, amount, paymentMode, deliverAddress, contactPersonNumber) values(?,?,?,?,?,?)";
                    con.query(sql, [this.userId, this.orderDate, this.amount, this.paymentMode, this.deliverAddress, this.contactPersonNumber], (err, result) => {
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
                    let sql = "delete from orderdetails where id = ?";
                    con.query(sql, [this.id], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    });
                }
            });
        });
    }
}