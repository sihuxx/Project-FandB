import './css/signIn.css'
import { Link } from "react-router-dom";

export default function MidSignIn() {
    return (
<<<<<<< HEAD
        <>
=======
        <div className='all-container'>
>>>>>>> 6837621 (프론트/백엔드 연결 완료 및 회원가입 페이지 구현)
            <div className="sign-in-box">

                <div className="com-box">
                    <Link to="/community"><img src="" alt="logo" /></Link>
                    <div className="box">
                        <label>아이디</label>
<<<<<<< HEAD
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
=======
                        <input type="text"  placeholder='아이디를 입력해주세요.'/>
                    </div>
                    <div className="box">
                        <label>비밀번호</label>
                        <input type="password" placeholder='비밀번호를 입력해주세요.' />
                    </div>
                    <button>로그인</button>
                <Link to="/sign/up" className='sign-up-link'>회원가입</Link>
                </div>
            </div>  
        </div>
>>>>>>> 6837621 (프론트/백엔드 연결 완료 및 회원가입 페이지 구현)
    )
}