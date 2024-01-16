import express from "express";

import { add, removeById, removeByName, update, list, listByCId, listById } from "../controller/product.controller.js";

const router = express.Router();

router.post("/add", add);

router.post("/removeById", removeById);

router.post("/removeByName", removeByName);

router.post("/update", update)

router.post("/list", list)

router.post("/listByCId", listByCId)

router.post("/listById", listById)

export default router;