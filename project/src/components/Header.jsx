import { Link } from "react-router-dom";


export default function Header() {
    return (
        <>
            <header>
                <a href="#" className="logo-box"><img src="" alt="logo"></img></a>
                <div className="search-box">
                    <i className="fa fa-2x fa-search"></i>
                    <input type="text" name="search" className="search" placeholder="검색"></input>
                </div>
                <div className="sign-box">
                    <Link to="/sign/in">로그인</Link>
                    <p>|</p>
                    <Link to="/sign/up">회원가입</Link>
                </div>
            </header>
        </>
    )
}