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
                    <a href="#">로그인</a>
                    <p>|</p>
                    <a href="#">회원가입</a>
                </div>
            </header>
        </>
    )
}