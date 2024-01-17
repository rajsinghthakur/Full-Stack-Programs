import express from "express";

import { add, list, remove } from "../controller/cart.controller.js"

const router = express.Router();

// http://localhost:3000/cart/add
router.post("/add", add);

// http://localhost:3000/cart/remove
router.delete("/remove", remove);

// http://localhost:3000/cart/list
router.get("/list", list);

export default router;