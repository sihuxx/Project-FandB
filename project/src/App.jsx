<<<<<<< HEAD
<<<<<<< HEAD
=======
import { BrowserRouter, Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

>>>>>>> 6837621 (프론트/백엔드 연결 완료 및 회원가입 페이지 구현)
=======
// App.jsx
import { BrowserRouter, Routes, Route, Navigate, Outlet, Link, useLocation } from "react-router-dom";
import Header from './components/Header';
>>>>>>> a4a4247 (프론트/백 연결, 회원가입/로그인  페이지 구현, 인기순/최신순 구현, 전체 리액트 연결 구현)
import LeftBar from './components/left-component/LeftBar';
import LeftSettingBar from './components/left-component/LeftSettingBar';
import RightCommunity from './components/right-component/RightCommunity';
import Setting from './Setting';
import Sign from './sign';
<<<<<<< HEAD
<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import '../fontawesome/css/font-awesome.css'

function Community() {
=======
import '../fontawesome/css/font-awesome.css';


// ✅ 커뮤니티 페이지
function Community() {
  // 백엔드 연결 테스트용
  const [backendMsg, setBackendMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/test") // ⚙️ 백엔드 주소
      .then(res => res.json())
      .then(data => setBackendMsg(data.message))
      .catch(err => console.error("❌ 백엔드 연결 실패:", err));
  }, []);

>>>>>>> 6837621 (프론트/백엔드 연결 완료 및 회원가입 페이지 구현)
  return (
    <>
      <div className="com-container">
        <MidTopCommunity />
        <MidCommunity />
      </div>
      <RightCommunity />
<<<<<<< HEAD
    </>
  )
}

=======

      {/* ✅ 연결 성공 여부 표시 */}
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


// ✅ 중고마켓 페이지
>>>>>>> 6837621 (프론트/백엔드 연결 완료 및 회원가입 페이지 구현)
function Market() {
  return (
    <>
      <div className="com-container">
        <MidTopMarket />
        <MidMarket />
      </div>
      <RightCommunity />
    </>
<<<<<<< HEAD
  )
}


function Layout() {
  const location = useLocation();

=======
  );
}


// ✅ 왼쪽바 + 페이지 구성
function Layout() {
  const location = useLocation();
>>>>>>> 6837621 (프론트/백엔드 연결 완료 및 회원가입 페이지 구현)
  const isSettingPage = location.pathname.startsWith('/setting');

  return (
    <div className='box'>
      {isSettingPage ? <LeftSettingBar /> : <LeftBar />}
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Navigate to="/community"/>}></Route>
        <Route path='/community' element={<Community />}></Route>
        <Route path='/market/*' element={<Market />}></Route>
        <Route path='/directMessage'></Route>
        <Route path='/setting/*' element={<Setting />}></Route>
        <Route path='/sign/*' element={<Sign/>}></Route>
=======
        <Route path='/' element={<Navigate to="/community" />} />
        <Route path='/community' element={<Community />} />
        <Route path='/market/*' element={<Market />} />
        <Route path='/directMessage' />
        <Route path='/setting/*' element={<Setting />} />
        <Route path='/sign/*' element={<Sign />} />
>>>>>>> 6837621 (프론트/백엔드 연결 완료 및 회원가입 페이지 구현)
      </Routes>
=======
import MidDM from "./components/mid-component/MidDM";
import MidTopCommunity from './components/mid-component/MidTopCommunity';
import CommunityPop from "./components/mid-component/mid-bottom-component/CommunityPop";
import CommunityNew from "./components/mid-component/mid-bottom-component/CommunityNew";
import MidTopMarket from './components/mid-component/MidTopMarket';
import MarketPop from "./components/mid-component/mid-bottom-component/MarketPop";
import MarketNew from "./components/mid-component/mid-bottom-component/MarketNew";

import '../fontawesome/css/font-awesome.css';

function CommunityLayout() {
  return (
    <div className="com-container">
      <MidTopCommunity />
      <Outlet />
>>>>>>> a4a4247 (프론트/백 연결, 회원가입/로그인  페이지 구현, 인기순/최신순 구현, 전체 리액트 연결 구현)
    </div>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

// ✅ 메인 앱
>>>>>>> 6837621 (프론트/백엔드 연결 완료 및 회원가입 페이지 구현)
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign/*" element={<Sign />} />
<<<<<<< HEAD
        
        <Route path="/*" element={
          <>
            <Header />
            <Layout />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}
=======
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Layout />
             </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
>>>>>>> 6837621 (프론트/백엔드 연결 완료 및 회원가입 페이지 구현)
=======
function MarketLayout() {
  return (
    <div className="com-container">
      <MidTopMarket />
      <Outlet />
    </div>
  );
}

function Layout() {
  const location = useLocation();
  const isSettingPage = location.pathname.startsWith('/setting');
  const isSignPage = location.pathname.startsWith('/sign')

  return (
    <div className='box'>
      {!isSignPage && (
        isSettingPage ? <LeftSettingBar /> : <LeftBar />
      )}

      <Routes>
        <Route path='/' element={<Navigate to="/community/popular" />} />

        <Route path='/community' element={<CommunityLayout />}>
          <Route index element={<Navigate to="popular" />} />
          <Route path='popular' element={<CommunityPop />} />
          <Route path='new' element={<CommunityNew />} />
        </Route>

        <Route path='/market' element={<MarketLayout />}>
          <Route index element={<Navigate to="popular" />} />
          <Route path='popular' element={<MarketPop />} />
          <Route path='new' element={<MarketNew />} />
        </Route>

        <Route path='/directMessage' element={<MidDM/>}/>
        <Route path='/setting/*' element={<Setting />} />
        <Route path='/sign/*' element={<Sign />} />
      </Routes>

      {!isSettingPage && !isSignPage && <RightCommunity />}
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const isSignPage = location.pathname.startsWith('/sign');

  return (
    <>
      {/* sign 페이지가 아니면 헤더 표시 */}
      {!isSignPage && <Header />}
      <Layout />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

>>>>>>> a4a4247 (프론트/백 연결, 회원가입/로그인  페이지 구현, 인기순/최신순 구현, 전체 리액트 연결 구현)
