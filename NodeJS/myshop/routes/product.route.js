import express from "express";

import { add, removeById, removeByName, update, list, listByCId, listById } from "../controller/product.controller.js";

import multer from "multer";
import { verifyToken } from "../middleware/auth.js";

const upload = multer({ dest: "public/images/" });

const router = express.Router();

// http://localhost:3000/product/add
router.post("/add", upload.single("imageUrl"), add);

// http://localhost:3000/product/removeById
router.delete("/removeById", removeById);

// http://localhost:3000/product/removeByName
router.delete("/removeByName", removeByName);

// http://localhost:3000/product/update
router.post("/update", upload.single("imageUrl"), update)

// http://localhost:3000/product/list
router.get("/list", verifyToken, list)

// http://localhost:3000/product/listByCId
router.get("/listByCId", listByCId)

// http://localhost:3000/product/listById
router.get("/listById", listById)

export default router;