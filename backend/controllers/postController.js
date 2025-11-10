import Post from "../models/postModel.js";

// Create a new post
export const createPost = async (req, res) => {
  try {
    const { author, content, image } = req.body;

    if (!author || !content) {
      return res.status(400).json({ message: "Author and content are required" });
    }

    const post = await Post.create({ author, content, image });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate("author", "username");

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
