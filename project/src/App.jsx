// App.jsx
import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useEffect, useState, createContext } from "react";
>>>>>>> 6132187 (백엔드/프론트 연동 및 다크모드 구현 및 고객센터 구현)
import Header from './components/Header';
import LeftBar from './components/left-component/LeftBar';
import LeftSettingBar from './components/left-component/LeftSettingBar';
import RightCommunity from './components/right-component/RightCommunity';
import Setting from './Setting';
import Sign from './sign';
import CommunityPop from './components/mid-component/mid-bottom-component/CommunityPop';
import CommunityNew from './components/mid-component/mid-bottom-component/CommunityNew';
import MidTopCommunity from './components/mid-component/MidTopCommunity';
import MidTopMarket from './components/mid-component/MidTopMarket';
import MidCommunity from './components/mid-component/MidCommunity';
import MidMarket from './components/mid-component/MidMarket';
import MarketPop from "./components/mid-component/mid-bottom-component/MarketPop";
import MarketNew from "./components/mid-component/mid-bottom-component/MarketNew";
import MidDM from './components/mid-component/MidDM';
import '../fontawesome/css/font-awesome.css';
<<<<<<< HEAD

=======
import './theme.css' // ✅ 추가

// ✅ 다크모드 Context 생성
export const ThemeContext = createContext();
>>>>>>> 6132187 (백엔드/프론트 연동 및 다크모드 구현 및 고객센터 구현)

// ========================== Community Layout ==========================
function CommunityLayout() {
  return (
    <div className="com-container">
      <MidTopCommunity />
      <Outlet />
    </div>
  );
}

function Community() {
  const [backendMsg, setBackendMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then(res => res.json())
      .then(data => setBackendMsg(data.message))
      .catch(err => console.error("❌ 백엔드 연결 실패:", err));
  }, []);

  return (
    <>
      <MidCommunity />
      {backendMsg && (
        <div style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          background: "#0077b6",
          color: "white",
          padding: "8px 12px",
          borderRadius: "8px"
        }}>
          {backendMsg}
        </div>
      )}
    </>
  );
}

<<<<<<< HEAD

=======
>>>>>>> 6132187 (백엔드/프론트 연동 및 다크모드 구현 및 고객센터 구현)
// ========================== Market Layout ==========================
function MarketLayout() {
  return (
    <div className="com-container">
      <MidTopMarket />
      <Outlet />
    </div>
  );
}

function Market() {
  return <MidMarket />;
}

<<<<<<< HEAD

=======
>>>>>>> 6132187 (백엔드/프론트 연동 및 다크모드 구현 및 고객센터 구현)
// ========================== Layout Wrapper ==========================
function Layout() {
  const location = useLocation();
  const isSettingPage = location.pathname.startsWith('/setting');
  const isSignPage = location.pathname.startsWith('/sign');

  return (
    <div className='box'>
      {!isSignPage && (isSettingPage ? <LeftSettingBar /> : <LeftBar />)}

      <Routes>
<<<<<<< HEAD
        {/* Redirect root */}
        <Route path='/' element={<Navigate to="/community/popular" />} />

        {/* Community */}
=======
        <Route path='/' element={<Navigate to="/community/popular" />} />
>>>>>>> 6132187 (백엔드/프론트 연동 및 다크모드 구현 및 고객센터 구현)
        <Route path='/community' element={<CommunityLayout />}>
          <Route index element={<Navigate to="popular" />} />
          <Route path='popular' element={<CommunityPop />} />
          <Route path='new' element={<CommunityNew />} />
        </Route>

<<<<<<< HEAD
        {/* Market */}
=======
>>>>>>> 6132187 (백엔드/프론트 연동 및 다크모드 구현 및 고객센터 구현)
        <Route path='/market' element={<MarketLayout />}>
          <Route index element={<Navigate to="popular" />} />
          <Route path='popular' element={<MarketPop />} />
          <Route path='new' element={<MarketNew />} />
        </Route>

<<<<<<< HEAD
        {/* Direct Message */}
        <Route path='/directMessage' element={<MidDM />} />

        {/* Setting & Sign */}
=======
        <Route path='/directMessage' element={<MidDM />} />
>>>>>>> 6132187 (백엔드/프론트 연동 및 다크모드 구현 및 고객센터 구현)
        <Route path='/setting/*' element={<Setting />} />
        <Route path='/sign/*' element={<Sign />} />
      </Routes>

<<<<<<< HEAD
      {/* Right Sidebar */}
=======
>>>>>>> 6132187 (백엔드/프론트 연동 및 다크모드 구현 및 고객센터 구현)
      {!isSettingPage && !isSignPage && <RightCommunity />}
    </div>
  );
}

<<<<<<< HEAD

=======
>>>>>>> 6132187 (백엔드/프론트 연동 및 다크모드 구현 및 고객센터 구현)
// ========================== App Content ==========================
function AppContent() {
  const location = useLocation();
  const isSignPage = location.pathname.startsWith('/sign');

  return (
    <>
      {!isSignPage && <Header />}
      <Layout />
    </>
  );
}

<<<<<<< HEAD

// ========================== Main App ==========================
export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
=======
// ========================== Main App ==========================
export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeContext.Provider>
>>>>>>> 6132187 (백엔드/프론트 연동 및 다크모드 구현 및 고객센터 구현)
  );
}
