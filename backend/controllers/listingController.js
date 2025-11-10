import Listing from "../models/Listing.js";

export const createListing = async (req, res) => {
  try {
    const { title, description, price } = req.body;

    if (!title || !description || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const images = req.files.map(file => file.path); // Cloudinary URLs

    const listing = await Listing.create({
      title,
      description,
      price,
      images,
      seller: req.user.id
    });

    res.json(listing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getListings = async (req, res) => {
  const listings = await Listing.find().sort({ createdAt: -1 }).populate("seller", "username");
  res.json(listings);
};
