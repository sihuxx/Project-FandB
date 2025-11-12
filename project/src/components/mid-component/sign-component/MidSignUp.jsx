import './css/signUp.css'
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
        e.preventDefault();
        if (e.target.checkValidity()) {
            navigate("/sign/up02");
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
    );
}
