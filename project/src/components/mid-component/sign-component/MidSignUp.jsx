import './css/signUp.css'
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