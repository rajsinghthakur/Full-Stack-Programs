import express from "express";

import { add, remove } from "../controller/orderitems.controller.js"

const router = express.Router();

router.post("/add", add);

router.post("/remove", remove);

export default router;