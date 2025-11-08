import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import MidTopCommunity from './components/mid-component/MidTopCommunity';
import MidCommunity from './components/mid-component/MidCommunity';
import CommunityPop from "./components/mid-component/mid-bottom-component/CommunityPop";
import CommunityNew from "./components/mid-component/mid-bottom-component/CommunityNew";

function CommunityLayout() {
  return (
    <div className="com-container">
      <MidTopCommunity />    {/* 중앙 위 고정 */}
      <Outlet />             {/* 중앙 아래 자식 Route 렌더링 */}
    </div>
  );
}

// 기본 /community 페이지
function CommunityIndex() {
  return <MidCommunity />;
}

export default function MidBottomMar() {
  return (
    <Routes>
      <Route path="/community" element={<CommunityLayout />}>
        <Route index element={<CommunityIndex />} />      {/* /community */}
        <Route path="popular" element={<CommunityPop />} /> {/* /community/popular */}
        <Route path="new" element={<CommunityNew />} />     {/* /community/new */}
      </Route>

      {/* /community로 접근 시 기본 페이지로 리다이렉트 */}
      <Route path="/community/*" element={<Navigate to="/community" />} />
    </Routes>
  );
}
