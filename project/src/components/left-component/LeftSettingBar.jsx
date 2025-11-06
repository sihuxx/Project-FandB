export default function LeftSettingBar() {
    return (
        <>
            <aside className="left-box">
                <div className="link-box">
                    <div className="box">
                        <img src="" alt="profile-image" className="profile-img" />
                        <div className="column-box">
                            <p>닉네임</p>
                            <a href="#">프로필 수정하기</a>
                        </div>
                    </div> 
                    <Link to="/buy-history">구매내역</Link>
                    <Link to="/management">관리</Link>
                </div>
            </aside>
        </>
    )
}