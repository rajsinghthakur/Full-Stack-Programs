import express from "express";

import { signUp, signIn } from "../controller/user.controller.js";

const router = express.Router();

// http://localhost:3000/user/signup
router.post("/signup", signUp);

// http://localhost:3000/user/signin
router.post("/signIn", signIn);

export default router;