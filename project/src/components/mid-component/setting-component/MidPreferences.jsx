// MidPreferences.jsx
import { useContext } from "react";
import { ThemeContext } from "../../../App";
import "./css/preferences.css";

export default function MidPreferences() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="preferences-box">
      <h3>환경 설정</h3>
      <div className="pre-column-box">
        <div className="pre-box">
          <p>다크 모드</p>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
        </div>
        <div className="pre-box">
          <p>현재 언어</p>
          <select>
            <option value="1">한국어</option>
            <option value="2">English</option>
          </select>
        </div>
      </div>
    </div>
  );
}
