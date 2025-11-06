import './css/signIn.css'

export default function MidSignIn() {
    return (
        <>
            <div className="all-box">
                <div className="com-box">
                    <div className="box">
                        <label>아이디</label>
                        <input type="text" />
                    </div>
                    <div className="box">
                        <label>비밀번호</label>
                        <input type="password" />
                    </div>
                    <div className="box">
                        <label>비밀번호 재확인</label>
                        <input type="password" />
                    </div>
                </div>
            </div>  
        </>
    )
}