import express from "express";

import { add, removeById, removeByName, update, list, listByCId, listById } from "../controller/product.controller.js";

const router = express.Router();

// http://localhost:3000/product/add
router.post("/add", add);

// http://localhost:3000/product/removeById
router.delete("/removeById", removeById);

// http://localhost:3000/product/removeByName
router.delete("/removeByName", removeByName);

// http://localhost:3000/product/update
router.post("/update", update)

// http://localhost:3000/product/list
router.get("/list", list)

// http://localhost:3000/product/listByCId
router.get("/listByCId", listByCId)

// http://localhost:3000/product/listById
router.get("/listById", listById)

export default router;