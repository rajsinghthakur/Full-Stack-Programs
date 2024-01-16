// import express from "express";
// import bodyParser from "body-parser";
// import pool from "./db/dbConfig.js";

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.json());

// app.post("/admin/signUp", (request, response, next) => {
//     let username = request.body.username;
//     let password = request.body.password;

//     pool.getConnection((err, con) => {
//         if (err) {
//             console.log("Connection failure......");
//             console.log(err);
//             return response.status(500).json({ error: 'Internal Server Error' });
//         } else {
//             let sql = "insert into admin(username, password) values(?, ?)";
//             con.query(sql, [username, password], (err, result) => {
//                 if (err) {
//                     return response.status(400).json({ error: "bed request" });
//                 } else {
//                     return response.status(200).json({ message: "signUp Success", data: { username, password } });
//                 }
//                 con.release();
//             });
//         }
//     });
// });

// app.post("/admin/signIn", (request, response, next) => {
//     let username = request.body.username;
//     let password = request.body.password;

//     pool.getConnection((err, con) => {
//         if (err) {
//             console.log("Connection failure......");
//             return response.status(500).json({ error: 'Internal Server Error' });
//         } else {
//             let sql = "select * from admin where username = ? and password = ?";
//             con.query(sql, [username, password], (err, result) => {
//                 if (err) {
//                     return response.status(500).json({ error: 'Internal Server Error' });
//                 } else if (result.length != 0) {
//                     return response.status(200).json({ message: 'signIn success', data: result[0] });
//                 } else {
//                     return response.status(401).json({ error: 'Unauthorized request' });
//                 }
//                 con.release();
//             });
//         }
//     });
// });

// app.post("/user/signUp", (request, response, next) => {
//     let username = request.body.username;
//     let password = request.body.password;
//     let email = request.body.email;
//     let contact = request.body.contact;

//     pool.getConnection((err, con) => {
//         if (err) {
//             return response.status(500).json({ error: "Internal server error" });
//         } else {
//             let sql = "insert into user(username, password, email, contact) values(?, ?, ?, ?)";
//             con.query(sql, [username, password, email, contact], (err, result) => {
//                 if (err) {
//                     return response.status(400).json({ error: "bed request", error: err });
//                 } else {
//                     return response.status(200).json({ message: "signUp Success", data: { username, password, email, contact } });
//                 }
//                 con.release();
//             });
//         }
//     });
// });

// app.post("/user/signIn", (request, response, next) => {
//     let password = request.body.password;
//     let email = request.body.email;

//     pool.getConnection((err, con) => {
//         if (err) {
//             return response.status(500).json({ error: "Internal server error" });
//         } else {
//             let sql = "select * from user where email = ? and password = ?";
//             con.query(sql, [email, password], (err, result) => {
//                 if (err) {
//                     return response.status(500).json({ error: "internal server error" });
//                 } else if (result.length != 0) {
//                     return response.status(200).json({ message: "signIn Success", data: result });
//                 } else {
//                     return response.status(401).json({ error: "unauthorized request" })
//                 }
//                 con.release();
//             });
//         }
//     });
// });

// app.use((request, response) => { response.send("bed request"); });

// app.listen(3000, () => { console.log("Server Started.....") });

import express from "express";

const server = express();

server.posty("/dhara", (request, response, next) => { response.send("<h1>rja</h1>") });

server.listen(3000, () => { console.log("server started") });
