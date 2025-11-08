import './css/signIn.css'
import { Link } from "react-router-dom";

export default function MidSignIn() {
    return (
        <>
            <div className="sign-in-box">

                <div className="com-box">
                    <Link to="/community"><img src="" alt="logo" /></Link>
                    <div className="box">
                        <label>아이디</label>
                        <input type="text" />
                    </div>
                    <div className="box">
                        <label>비밀번호</label>
                        <input type="password" />
                    </div>
                    <button>로그인</button>
                </div>
            </div>  
        </>
    )
}