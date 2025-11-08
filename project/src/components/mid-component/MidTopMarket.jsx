// MidTopMarket.jsx
import '../css/commuMarket.css';
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MidTopMarket() {
    const location = useLocation();
    const [selected, setSelected] = useState("popular");

    useEffect(() => {
        if (location.pathname.includes("/market/new")) {
            setSelected("new");
        } else {
            setSelected("popular");
        }
    }, [location]);

    return (
        <div className="mid-top">
            <Link
                to="/market/popular"
                className={`mid-top-link ${selected === "popular" ? "mid-select" : ""}`}
            >
                인기순
            </Link>
            <Link
                to="/market/new"
                className={`mid-top-link ${selected === "new" ? "mid-select" : ""}`}
            >
                최신순
            </Link>
        </div>
    );
}
