import express from "express";
import { sendMessage, getConversation } from "../controllers/messageController.js";

const router = express.Router();

router.post("/", sendMessage);
router.get("/:userId", getConversation);

export default router;
