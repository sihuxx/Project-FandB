import MidSignUp from "./components/mid-component/sign-component/MidSignUp"
import MidSignIn from "./components/mid-component/sign-component/MidSignIn"
import { Routes, Route } from "react-router-dom";
import MidSignUp02 from "./components/mid-component/sign-component/MidSignUp02";
import MidSignUp03 from "./components/mid-component/sign-component/MidSignUp03";

export default function Sign() {
    return (
        <div className="box">
            <Routes>
                <Route path="up" element={<MidSignUp />} />
                <Route path="up02" element={<MidSignUp02/>}></Route>
                <Route path="up03" element={<MidSignUp03/>}></Route>
                <Route path="in" element={<MidSignIn />} />
            </Routes>
        </div>
    )
}