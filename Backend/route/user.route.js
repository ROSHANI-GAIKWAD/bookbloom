import express from "express";
import { signup } from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup", signup);

export default router; // ✅ Make sure it's exported as default
