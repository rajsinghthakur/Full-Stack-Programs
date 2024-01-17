import express from "express";

import { add, list, remove } from "../controller/orderitems.controller.js"

const router = express.Router();

// http://localhost:3000/orderitems/add
router.post("/add", add);

// http://localhost:3000/orderitems/remove
router.delete  ("/remove", remove);

// http://localhost:3000/orderitems/list
router.get("/list", list)

export default router;