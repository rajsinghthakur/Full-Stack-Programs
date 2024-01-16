import express from "express";
import { categoryList, deleteCategory, getCategoryById, saveCategory, updateCategory } from "../controller/category.controller.js";

const router = express.Router();

// http://localhost:3000/category/save
router.post("/save", saveCategory);

// // http://localhost:3000/category/update
router.post("/update", updateCategory);

// http://localhost:3000/category/list
router.get("/list", categoryList);

// http://localhost:3000/category/2000
router.get("/:categoryId", getCategoryById);

// http://localhost:3000/category/2000
router.delete("/:categoryKiId", deleteCategory);

export default router; 