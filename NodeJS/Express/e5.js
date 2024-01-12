import express from "express";
import bodyParser from "body-parser";
import pool from "./dbConfig.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//SignUp

app.post("/signUp", (request, response) => {
    let username = request.body.username;
    let password = request.body.password;
    let email = request.body.email;
    let age = request.body.age;

    pool.getConnection((error, connection) => {
        if (!error) {
            let sql = "insert into user(username, email, password, age) values(?, ?, ?, ?)";
            connection.query(sql, [username, email, password, age * 1], (error, result) => {
                if (error) {
                    return response.status(400).json({ error: "bed request" });
                } else {
                    return response.status(200).json({ message: "signUp Success", data: { username, email, age } });
                }
            });
        } else {
            console.log("Connection failure.....")
            console.log(error);
            response.send("Connection failure.....")
        }
    });

});

//SignIn

app.post("/signIn", (request, response) => {

    let email = request.body.email;
    let password = request.body.password;

    pool.getConnection((error, connection) => {
        if (!error) {
            let sql = "select * from user where email = ? and password = ?";
            connection.query(sql, [email, password], (error, result) => {
                if (error) {
                    return response.status(500).json({ error: 'Internal Server Error' })
                } else if (result.length != 0) {
                    return response.status(200).json({ message: "signIn success" });
                } else {
                    return response.status(401).json({ error: 'Unauthorized request' });
                }
            });
        } else {
            console.log(error);
            response.send(error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    });
});

//delete

app.post("/delete", (request, response) => {

    let email = request.body.email;

    pool.getConnection((error, connection) => {
        if (!error) {
            let sql = "delete from user where email = ?";
            connection.query(sql, [email], (error, result) => {
                if (error) {
                    return response.status(500).json({ error: 'Internal Server Error' })
                } else if (result.length != 0) {
                    return response.status(200).json({ message: "Delete success" });
                } else {
                    return response.status(401).json({ error: 'Unauthorized request' });
                }
            });
        } else {
            console.log(error);
            response.send(error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    });
});

//Bed Request

app.use((request, response) => {
    console.log("response is executed");
    response.send("bed request");
});

app.listen(3000, () => { console.log("Server Started.....") });