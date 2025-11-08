import express from "express";
import { createPost, getPosts } from "../controllers/postController.js";
import protect from "../middleware/authMiddleware.js"; // ✅ Add this line

const router = express.Router();

// GET /api/posts
router.get("/", getPosts);

// POST /api/posts (protected route)
router.post("/", protect, createPost); // ✅ Require token here

export default router;
