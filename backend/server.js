import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
<<<<<<< HEAD
import mongoose from "mongoose";
=======
>>>>>>> 6132187 (백엔드/프론트 연동 및 다크모드 구현 및 고객센터 구현)
import { fileURLToPath } from "url";
import { dirname } from "path";

import connectDB from "./config/db.js";
<<<<<<< HEAD
=======

>>>>>>> 6132187 (백엔드/프론트 연동 및 다크모드 구현 및 고객센터 구현)
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import listingRoutes from "./routes/listingRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

<<<<<<< HEAD
// -------------------- 환경 변수 및 DB 연결 --------------------
dotenv.config();
connectDB();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log(err));

// -------------------- Express 설정 --------------------
=======
// Load env
dotenv.config();

// Connect MongoDB
connectDB();

>>>>>>> 6132187 (백엔드/프론트 연동 및 다크모드 구현 및 고객센터 구현)
const app = express();
app.use(cors());
app.use(express.json());

<<<<<<< HEAD
// -------------------- API 라우트 --------------------
=======
// API Routes
>>>>>>> 6132187 (백엔드/프론트 연동 및 다크모드 구현 및 고객센터 구현)
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/messages", messageRoutes);

<<<<<<< HEAD
// -------------------- React 정적 파일 서빙 --------------------
// ES Module 환경에서 __dirname 대체
=======
// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend connected successfully!" });
});

// Serve React build
>>>>>>> 6132187 (백엔드/프론트 연동 및 다크모드 구현 및 고객센터 구현)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, "../project/dist")));

<<<<<<< HEAD
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
=======
// SPA Fallback (React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../project/dist/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
>>>>>>> 6132187 (백엔드/프론트 연동 및 다크모드 구현 및 고객센터 구현)
