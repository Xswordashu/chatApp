import express from "express";
import { authenticateToken } from "../middlewares/token.validation.js";
import { create_open_conversation } from "../controllers/conversation.controller.js";
const router = express.Router();


router.route("/").post(authenticateToken, create_open_conversation)

export default router;
