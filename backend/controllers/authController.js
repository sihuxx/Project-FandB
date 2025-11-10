import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  console.log("📩 Register request received:", req.body);

  try {
    const { name, email, username, password } = req.body;

    if (!name || !email || !username || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      username,
      password: hashedPassword
    });

    console.log("✅ User registered:", user.username);

    res.status(201).json({
      message: "User registered successfully",
      user: { id: user._id, username: user.username }
    });
  } catch (err) {
    console.error("🔥 Register Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};


// ✅ Make sure THIS EXISTS
export const loginUser = async (req, res) => {
  console.log("🔐 Login request received:", req.body);

  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    console.log("✅ Login successful:", username);
    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, username: user.username }
    });

  } catch (err) {
    console.error("🔥 Login Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
