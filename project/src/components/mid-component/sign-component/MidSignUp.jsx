import './css/signUp.css'
<<<<<<< HEAD
import { Link } from "react-router-dom";

export default function MidSignUp() {
    return (
        <>
            <div className="sign-up-box">
                <div className="com-box">
                    <Link to="/community"><img src="" alt="logo" /></Link>
                    <div className="box">
                        <label>이름</label>
                        <input type="text" placeholder="이름을 입력해주세요" />
                    </div>
                    <div className="box">
                        <label>이메일</label>
                        <input type="email" placeholder="이메일을 입력해주세요"/>
                    </div>
                    {/* <div className="box">
                        <label>아이디</label>
                        <input type="text" placeholder="아이디를 입력해주세요"/>
                    </div>
                    <div className="box">
                        <label>비밀번호</label>
                        <input type="password" placeholder="비밀번호를 입력해주세요"/>
                    </div>
                    <div className="box">
                        <label>닉네임</label>
                        <input type="text" placeholder="닉네임을 입력해주세요"/>
                    </div> */}
                    <button>다음으로</button>
                </div>
            </div>
        </>
    )
}
=======
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function MidSignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // 기본 폼 제출 막기
        // required 속성이 자동으로 검사됨 — 모두 채워지면 아래 코드 실행
        if (e.target.checkValidity()) {
            navigate("/sign/up02"); // 다음 페이지로 이동
        }
    };

    return (
        <div className='all-container'>
            <div className="sign-up-box">
                <form className="com-box" onSubmit={handleSubmit}>
                    <Link to="/community"><img src="" alt="logo" /></Link>

                    <div className="box">
                        <label>이름</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="이름을 입력해주세요"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="box">
                        <label>이메일</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="이메일을 입력해주세요"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className='next-btn'>다음으로</button>
                    <Link to="/sign/in" className='sign-in-link'>로그인</Link>
                </form>
            </div>
        </div>
    )
}
>>>>>>> 6837621 (프론트/백엔드 연결 완료 및 회원가입 페이지 구현)
