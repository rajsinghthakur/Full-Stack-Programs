import express from "express";
import bodyParser from "body-parser";
import AdminRouter from "./routes/admin.route.js";
import UserRouter from "./routes/user.route.js";
import CategoryRouter from "./routes/category.route.js";
import ProductRouter from "./routes/product.route.js";
import CartRouter from "./routes/cart.route.js";
import CartitemsRouter from "./routes/cartitems.route.js";
import OrderdetailsRouter from "./routes/orderdetails.route.js";
import OrderitemsRouter from "./routes/orderitems.route.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/admin", AdminRouter);

app.use("/user", UserRouter);

app.use("/product", ProductRouter);

app.use("/category", CategoryRouter);

app.use("/cart", CartRouter);

app.use("/cartitems", CartitemsRouter);

app.use("/orderdetails", OrderdetailsRouter);

app.use("/orderitems", OrderitemsRouter);


app.listen(3000, () => { console.log("Server Started.....") });