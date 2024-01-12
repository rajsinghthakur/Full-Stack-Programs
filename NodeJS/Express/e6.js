import express from "express";

const app = express();

app.set("view engine", "ejs");

app.get("/home", (request, response) => {
    response.render("index2");
});

app.listen(3000, () => { console.log("server started") });