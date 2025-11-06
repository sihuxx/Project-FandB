export default function MidSetting() {
    return (
        <>
            <div className="mid-box">
                <h3>환경 설정</h3>
                <div className="box">
                    <label htmlFor="darkMod">다크모드</label>
                    <input type="checkbox" id="darkMod" />
                </div>
                <div className="box">
                    <p>현재 언어</p>
                    <select>
                        <option value="1">한국어</option>
                        <option value="2">English</option>
                    </select>
                </div>
            </div>
        </>
    )
}