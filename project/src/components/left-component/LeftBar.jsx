import { Link } from "react-router-dom";
import { useState } from "react";
import '../css/commuMarket.css'

export default function LeftBar() {
    const [selected, setselected] = useState("comunity")

    const changeSelect = (menu) => {
        setselected(menu)
    }

    return (
        <>
            <aside className="left-box">
                <div className="link-box">
                    <Link to="/"
                        className={`community-link ${selected === "community" ? "left-select" : ""}`}
                        onClick={() => changeSelect("community")}
                    >커뮤니티</Link>
                    <Link to="/market"
                        className={`market-link ${selected === "market" ? "left-select" : ""}`}
                        onClick={() => changeSelect("market")}
                    >중고마켓</Link>
                    <Link to="/directMessage"
                        className={`direct-link ${selected === "direct" ? "left-select" : ""}`}
                        onClick={() => changeSelect("direct")}
                    >DM</Link>
                </div>
                <Link to="/setting"
                    className={`setting-link ${selected === "setting" ? "left-select" : ""}`}
                    onClick={() => changeSelect("setting")}
                >설정</Link>
            </aside>
        </>
    )
}