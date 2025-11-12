import './css/signUp.css'
import { Link, useNavigate } from "react-router-dom";
import './css/signUp.css';
// import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function MidSignUp03() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nickname: '',
        birth: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    function handleSubmit(e) {
        e.preventDefault();
        // required 검사
        if (e.target.checkValidity()) {
            navigate("/community"); // 회원가입 완료 후 커뮤니티로 이동
        }
    }

    return (
        <div className='all-container'>
            <div className="sign-up-box">
                <form className="com-box" onSubmit={handleSubmit}>
                    <Link to="/community"><img src="" alt="logo" /></Link>

                    <div className="box">
                        <label>닉네임</label>
                        <input
                            type="text"
                            name="nickname"
                            placeholder="닉네임을 입력해주세요"
                            required
                            value={formData.nickname}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="box">
                        <label>생년월일</label>
                        <input
                            type="date"
                            name="birth"
                            required
                            value={formData.birth}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className='next-btn'>가입 완료</button>
                </form>
            </div>
        </div>
    );
}
