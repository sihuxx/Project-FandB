import './css/signIn.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { API_BASE_URL } from "../../../api";

export default function MidSignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    if (!username || !password) return alert("모든 칸을 입력해주세요.");

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ Save token
        localStorage.setItem("token", data.token);

        // ✅ Redirect to Community Page
        window.location.href = "/community/popular";
      } else {
        alert(data.message || "로그인 실패");
      }
    } catch (error) {
      console.error("❌ 로그인 실패:", error);
      alert("서버 연결 실패");
    }
  }

  return (
    <div className='all-container'>
      <div className="sign-in-box">
        <div className="com-box">
          <Link to="/community">
            <img src="" alt="logo" />
          </Link>

          <div className="box">
            <label>아이디</label>
            <input
              type="text"
              placeholder="아이디를 입력해주세요."
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="box">
            <label>비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button onClick={handleLogin}>로그인</button>

          <Link to="/sign/up" className='sign-up-link'>
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
