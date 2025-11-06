import { Routes, Route, Navigate } from "react-router-dom";
import MidProfileSetting from "./components/mid-component/setting-component/MidProfileSetting";
import MidPreferences from "./components/mid-component/setting-component/MidPreferences";
import MidBuyHistory from "./components/mid-component/setting-component/MidBuyHistory";
import MidManagement from "./components/mid-component/setting-component/MidManagement";

export default function Setting() {
    return (
        <div className="box">
            <Routes>
                <Route path="/" element={<Navigate to="profile-setting" replace />} />
                <Route path="profile-setting" element={<MidProfileSetting />} />
                <Route path="preferences" element={<MidPreferences />} />
                <Route path="buy-history" element={<MidBuyHistory />} />
                <Route path="management" element={<MidManagement />} />
            </Routes>
        </div>
    );
}
