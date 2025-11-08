import '../css/commuMarket.css';
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MidTopCommunity() {
    const location = useLocation();
    const [selected, setSelected] = useState("popular");

    // URL에 따라 선택 상태 자동 반영
    useEffect(() => {
        if (location.pathname.includes("/community/new")) {
            setSelected("new");
        } else {
            setSelected("popular");
        }
    }, [location]);

    return (
        <div className="mid-top">
            <Link
                to="/community/popular"
                className={`mid-top-link ${selected === "popular" ? "mid-select" : ""}`}
            >
                인기순
            </Link>
            <Link
                to="/community/new"
                className={`mid-top-link ${selected === "new" ? "mid-select" : ""}`}
            >
                최신순
            </Link>
        </div>
    );
}
