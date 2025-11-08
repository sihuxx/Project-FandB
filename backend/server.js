import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import listingRoutes from "./routes/listingRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

// -------------------- 기본 설정 --------------------
dotenv.config(); // 환경 변수 먼저 불러오기
connectDB(); // DB 연결

const app = express();
const PORT = process.env.PORT || 5000;

// ES Module 환경에서 __dirname 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// -------------------- 미들웨어 --------------------
app.use(cors());
app.use(express.json());

// -------------------- API 라우트 --------------------
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/messages", messageRoutes);

// -------------------- React 정적 파일 서빙 --------------------
// (React 프로젝트가 project 폴더에 있다고 가정)
app.use(express.static(path.join(__dirname, "../project/dist")));

// SPA 라우팅 처리 (React Router 대응)
// ✅ Express 5 이상 호환
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, '../project/dist/index.html'));
});


// -------------------- 서버 실행 --------------------
app.listen(PORT, () => console.log(`✅ Server running on port http://localhost:${PORT}`));
