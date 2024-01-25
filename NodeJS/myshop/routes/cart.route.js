import express from "express";

import { add, addToCart, list, remove } from "../controller/cart.controller.js"
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// http://localhost:3000/cart/add
router.post("/add", add);

// http://localhost:3000/cart/addtocart
router.post("/addtocart",verifyToken, addToCart);

// http://localhost:3000/cart/remove
router.delete("/remove", remove);

// http://localhost:3000/cart/list
router.get("/list", list);

export default router;