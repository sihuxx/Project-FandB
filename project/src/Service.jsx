import { Routes, Route, Navigate } from "react-router-dom";
import ServiceCenterMain from "./components/mid-component/service-center-component/ServiceCenterMain";

export default function Service() {
    return (
        <>
        <Routes>
            <Route path="/" element={< ServiceCenterMain/>}></Route>
        </Routes>
        </>
    )
}