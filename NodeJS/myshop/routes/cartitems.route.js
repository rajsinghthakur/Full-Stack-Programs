import express from "express";

import { add, remove, list } from "../controller/cartitems.controller.js"

const router = express.Router();

// http://localhost:3000/cartitems/add
router.post("/add", add);

// http://localhost:3000/cartitems/remove
router.delete("/remove", remove);

// http://localhost:3000/cartitems/list
router.get("/list", list)

export default router;