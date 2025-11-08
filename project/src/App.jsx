import LeftBar from './components/left-component/LeftBar';
import LeftSettingBar from './components/left-component/LeftSettingBar';
import MidCommunity from './components/mid-component/MidCommunity';
import MidTopCommunity from './components/mid-component/MidTopCommunity';
import RightCommunity from './components/right-component/RightCommunity';
import MidMarket from './components/mid-component/MidMarket';
import MidTopMarket from './components/mid-component/MidTopMarket';
import Header from './components/Header';
import Setting from './Setting';
import Sign from './sign';
import { BrowserRouter, Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import '../fontawesome/css/font-awesome.css'

function Community() {
  return (
    <>
      <div className="com-container">
        <MidTopCommunity />
        <MidCommunity />
      </div>
      <RightCommunity />
    </>
  )
}

function Market() {
  return (
    <>
      <div className="com-container">
        <MidTopMarket />
        <MidMarket />
      </div>
      <RightCommunity />
    </>
  )
}


function Layout() {
  const location = useLocation();

  const isSettingPage = location.pathname.startsWith('/setting');

  return (
    <div className='box'>
      {isSettingPage ? <LeftSettingBar /> : <LeftBar />}
      <Routes>
        <Route path='/' element={<Navigate to="/community"/>}></Route>
        <Route path='/community' element={<Community />}></Route>
        <Route path='/market/*' element={<Market />}></Route>
        <Route path='/directMessage'></Route>
        <Route path='/setting/*' element={<Setting />}></Route>
        <Route path='/sign/*' element={<Sign/>}></Route>
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign/*" element={<Sign />} />
        
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
