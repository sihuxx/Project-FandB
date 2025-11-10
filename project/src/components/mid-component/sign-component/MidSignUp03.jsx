import './css/signUp.css';
import { useNavigate } from "react-router-dom";
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!e.target.checkValidity()) return;

        // Get previous signup data from localStorage
        const name = localStorage.getItem("signup_name");
        const email = localStorage.getItem("signup_email");
        const username = localStorage.getItem("signup_id");
        const password = localStorage.getItem("signup_password");

        if (!name || !email || !username || !password) {
            alert("이전 단계 정보를 불러올 수 없습니다. 처음부터 다시 시도해주세요.");
            navigate("/sign/up01");
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    username,
                    email,
                    password
                })
            });

            const data = await response.json();

            if (response.ok) {
                console.log("✅ Registered:", data.user);
                navigate("/community");
            } else {
                alert(data.message);
            }
        } catch (err) {
            console.error("🔥 Error connecting to backend:", err);
            alert("서버 에러. 나중에 다시 시도해주세요.");
        }
    };

    return (
        <div className='all-container'>
            <div className="sign-up-box">
                <form className="com-box" onSubmit={handleSubmit}>
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
