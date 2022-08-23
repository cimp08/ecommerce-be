import express from "express";
import { authUser } from "../controllers/userController.js";

const router = express.Router();

// @route   Post /api/users/login
router.post("/login", authUser);

export default router;
