import Message from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
  try {
    const { sender, receiver, content } = req.body;

    if (!sender || !receiver || !content)
      return res.status(400).json({ message: "All fields required" });

    const msg = await Message.create({ sender, receiver, content });
    res.status(201).json(msg);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getConversation = async (req, res) => {
  try {
    const user1 = req.params.userId;
    const user2 = req.body.userId;

    const msgs = await Message.find({
      $or: [
        { sender: user1, receiver: user2 },
        { sender: user2, receiver: user1 },
      ],
    })
      .sort({ createdAt: 1 })
      .populate("sender receiver", "username");

    res.json(msgs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
