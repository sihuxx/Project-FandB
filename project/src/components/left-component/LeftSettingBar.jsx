import { Link } from "react-router-dom";
import { useState } from "react";
import '../css/commuMarket.css'

export default function LeftSettingBar() {
    const [selected, setselected] = useState("profile-setting")

    const changeSelect = (menu) => {
        setselected(menu)
    }

    return (
        <>
            <aside className="left-box">
                <div className="link-box">
                    <Link to="/setting/profile-setting"
                        className={`profile-setting-link ${selected === "profile-setting" ? "left-select" : ""}`}
                        onClick={() => changeSelect("profile-setting")}
                    >프로필 설정</Link>
                    <Link to="/setting/preferences"
                        className={`preferences-link ${selected === "preferences" ? "left-select" : ""}`}
                        onClick={() => changeSelect("preferences")}
                    >환경 설정</Link>
                    <Link to="/setting/buy-history"
                        className={`buy-history-link ${selected === "buy-history" ? "left-select" : ""}`}
                        onClick={() => changeSelect("buy-history")}
                    >구매내역</Link>
                    <Link to="/setting/management"
                        className={`management-link ${selected === "management" ? "left-select" : ""}`}
                        onClick={() => changeSelect("management")}
                    >관리</Link>
                </div>
                <Link to="/">돌아가기</Link>
            </aside>
        </>
    )
}