import MidSignUp from "./components/mid-component/sign-component/MidSignUp"
import MidSignIn from "./components/mid-component/sign-component/MidSignIn"
import { Routes, Route } from "react-router-dom";


export default function Sign() {
    return (
        <div className="box">
            <Routes>
                <Route path="up" element={<MidSignUp />} />
                <Route path="in" element={<MidSignIn />} />
            </Routes>
        </div>
    )
}