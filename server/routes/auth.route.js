import express from "express";
import { signup, signin } from "../controllers/auth.controller.js";

const router = express.Router();

//Create Account
router.post("/signup", signup);

router.post("/signin", signin);

export default router;
