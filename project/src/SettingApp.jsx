import LeftSettingBar from './components/left-component/LeftSettingBar'
import MidSetting from './components/mid-component/MidSetting'
import './css/commuMarket.css'
import '../fontawesome/css/font-awesome.css'
import Header from './components/Header';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LeftBar from './components/left-component/LeftBar';

function Setting() {
    
}

function BuyHistory() {

}

function Management () {

}

export default function SettingApp() {
    return (
        <BrowserRouter>
            <Header />
            <div className='box'>
                <LeftSettingBarBar />

                <Routes>
                    <Route path='/' element={<Setting />}></Route>
                    <Route path='/BuyHistory' element={<BuyHistory />}></Route>
                    <Route path='/Management' element={<Management />}></Route>
                </Routes>
            </div>

        </BrowserRouter>
    )
}