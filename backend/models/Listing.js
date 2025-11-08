import mongoose from "mongoose";

const listingSchema = mongoose.Schema(
  {
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);
export default Listing;
