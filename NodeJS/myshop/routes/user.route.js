import express from "express";

import { signUp, signIn } from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup", signUp);

router.post("/signIn", signIn);

export default router;