import MidSignUp from "./components/mid-component/sign-component/MidSignUp"
import MidSignIn from "./components/mid-component/sign-component/MidSignIn"
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
=======
import MidSignUp02 from "./components/mid-component/sign-component/MidSignUp02";
import MidSignUp03 from "./components/mid-component/sign-component/MidSignUp03";
>>>>>>> 6837621 (프론트/백엔드 연결 완료 및 회원가입 페이지 구현)


export default function Sign() {
    return (
        <div className="box">
            <Routes>
                <Route path="up" element={<MidSignUp />} />
<<<<<<< HEAD
=======
                <Route path="up02" element={<MidSignUp02/>}></Route>
                <Route path="up03" element={<MidSignUp03/>}></Route>
>>>>>>> 6837621 (프론트/백엔드 연결 완료 및 회원가입 페이지 구현)
                <Route path="in" element={<MidSignIn />} />
            </Routes>
        </div>
    )
}