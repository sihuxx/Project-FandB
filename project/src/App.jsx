import LeftBar from './components/left-component/LeftBar';
import MidCommunity from './components/mid-component/MidCommunity';
import MidTopCommunity from './components/mid-component/MidTopCommunity';
import RightCommunity from './components/right-component/RightCommunity';
import MidMarket from './components/mid-component/MidMarket';
import MidTopMarket from './components/mid-component/MidTopMarket';
import Header from './components/Header';
import SettingApp from './SettingApp';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './css/commuMarket.css'
import '../fontawesome/css/font-awesome.css'

function Community() {
  return (
    <>
      <div className="com-box">
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
      <div className="com-box">
        <MidTopMarket/>
        <MidMarket />
      </div>
      <RightCommunity />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='box'>
        <LeftBar />

        <Routes>
          <Route path='/' element={<Community />}></Route>
          <Route path='/market' element={<Market />}></Route>
          <Route path='/directMessage'></Route>
          <Route path='/setting' element={<SettingApp />}></Route>
        </Routes>
      </div>

    </BrowserRouter>
  )
}