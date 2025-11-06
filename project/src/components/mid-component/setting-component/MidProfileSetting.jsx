import './css/profile.css'

export default function MidProfileSetting() {
    return (
        <>
            <div className="all-box">
                <h3>나의 프로필</h3>
                <div className="box">
                    <p>로고</p>
                    <div className="com-box">
                        <img src="https://pbs.twimg.com/media/G4pHzpXbQAYrHYg.jpg" alt="profile image" />
                        <button className='change-profile'>프로필 변경</button>
                    </div>
                </div>
                <div className="box">
                    <p>프로필</p>
                    <div className="column-box">
                        <div className="box">
                            <label htmlFor="idInput">아이디</label>
                            <input type="text" id="idInput" className="id-input" />
                        </div>
                        <div className="box">
                            <label htmlFor="nameInput">닉네임</label>
                            <input type="text" id="nameInput" className="name-input" />
                        </div>
                        <div className="box">
                            <label htmlFor="exInput">소개</label>
                            <input type="text" id="exInput" className="explain-input" />
                        </div>
                    </div>
                </div>
                <div className="box">
                    <p>동네 변경</p>
                    <select>
                        <option value="1">아현동</option>
                        <option value="2">신림동</option>
                    </select>
                </div>
                <div className="box">
                    <button>저장</button>
                </div>
            </div>
        </>
    )
}