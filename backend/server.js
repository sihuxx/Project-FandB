import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import { dirname } from "path";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import listingRoutes from "./routes/listingRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

// -------------------- 환경 변수 및 DB 연결 --------------------
dotenv.config();
connectDB();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log(err));

// -------------------- Express 설정 --------------------
const app = express();
app.use(cors());
app.use(express.json());

// -------------------- API 라우트 --------------------
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/messages", messageRoutes);

// -------------------- React 정적 파일 서빙 --------------------
// ES Module 환경에서 __dirname 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, "../project/dist")));

// SPA 라우팅 처리 (React Router 대응)
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, '../project/dist/index.html'));
});

// 테스트용 API
app.get("/api/test", (req, res) => {
  res.json({ message: "백엔드 연결 성공!" });
});

// -------------------- 서버 실행 --------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port http://localhost:${PORT}`));
