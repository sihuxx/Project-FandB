import './css/signIn.css';
import { Link } from "react-router-dom";

export default function MidSignIn() {
  return (
    <div className='all-container'>
      <div className="sign-in-box">
        <div className="com-box">
          <Link to="/community">
            <img src="" alt="logo" />
          </Link>

          <div className="box">
            <label>아이디</label>
            <input type="text" placeholder="아이디를 입력해주세요." />
          </div>

          <div className="box">
            <label>비밀번호</label>
            <input type="password" placeholder="비밀번호를 입력해주세요." />
          </div>

          <button>로그인</button>

          <Link to="/sign/up" className='sign-up-link'>
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
