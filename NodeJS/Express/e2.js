import express from 'express';

const app = express()

app.get('/home', function (req, res) {
  res.send('Home')
})

app.get('/', function (req, res) {
  res.send('Home')
})

app.get('/name', function (req, res) {
  res.send("name");
})

app.get('/contact', function (req, res) {
  res.send('Contact')
})

app.listen(3000, () => { console.log("server started") });