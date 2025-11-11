import './css/signUp.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function MidSignUp02() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

<<<<<<< HEAD
        // 유효성 검사 (HTML required + JS 비밀번호 일치 확인)
        if (e.target.checkValidity()) {
            if (formData.password !== formData.confirmPassword) {
                alert('비밀번호가 일치하지 않습니다.');
                return;
            }
            navigate("/sign/up03");
        }
=======
        // 비밀번호 일치 확인
        if (formData.password !== formData.confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        // ✅ 여기서 데이터를 localStorage 에 저장
        localStorage.setItem("signup_id", formData.id);
        localStorage.setItem("signup_password", formData.password);

        navigate("/sign/up03");
>>>>>>> 6132187 (백엔드/프론트 연동 및 다크모드 구현 및 고객센터 구현)
    };

    return (
        <div className='all-container'>
            <div className="sign-up-box">
                <form className="com-box" onSubmit={handleSubmit}>
                    <Link to="/community"><img src="" alt="logo" /></Link>

                    <div className="box">
                        <label>아이디</label>
                        <input
                            type="text"
                            name="id"
                            placeholder="아이디를 입력해주세요"
                            required
                            value={formData.id}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="box">
                        <label>비밀번호</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="비밀번호를 입력해주세요"
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="box">
                        <label>비밀번호 재확인</label>
                        <input
                            type="password"
                            name="confirmPassword"
<<<<<<< HEAD
                            placeholder="비밀번호를 입력해주세요"
=======
                            placeholder="비밀번호를 다시 입력해주세요"
>>>>>>> 6132187 (백엔드/프론트 연동 및 다크모드 구현 및 고객센터 구현)
                            required
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className='next-btn'>다음으로</button>
                </form>
            </div>
        </div>
    )
}
