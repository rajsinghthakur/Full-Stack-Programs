import express from "express";

import { add, remove, list } from "../controller/orderdetails.controller.js"

const router = express.Router();

// http://localhost:3000/orderdetails/add
router.post("/add", add);

// http://localhost:3000/orderdetails/remove
router.delete("/remove", remove);

// http://localhost:3000/orderdetails/list
router.get("/list", list)

export default router;