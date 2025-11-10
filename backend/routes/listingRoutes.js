import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";
import { createListing, getListings } from "../controllers/listingController.js";
import authMiddleware from "../middleware/authMiddleware.js"; // we create this below

const router = express.Router();

// Setup file upload storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "listings"
  }
});
const upload = multer({ storage });

// GET listings
router.get("/", getListings);

// CREATE listing (protected, with image upload)
router.post("/", authMiddleware, upload.array("images", 5), createListing);

export default router;
