<<<<<<< HEAD
export default function MidBottom() {
    
=======
import { Routes, Route } from "react-router-dom";
import CommunityPop from "./components/mid-component/mid-bottom-component/CommunityPop";

export default function MidBottom() {
    return (
        <>
        <div className="box">
            <Routes>
                <Route path="community-popular" element={<CommunityPop/>}></Route>
            </Routes>
        </div>
        </>
    )
>>>>>>> 6837621 (프론트/백엔드 연결 완료 및 회원가입 페이지 구현)
}