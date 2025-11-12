import './css/service-main.css'
import { Link } from "react-router-dom";

export default function ServiceCenterMain() {
    return (
            <div className="mid-service-container">
                <Link to='/' className='back-btn'>&lt; 돌아가기</Link>
                <div className="main-section">
                    <h1>무엇을 <br /> 도와드릴까요?</h1>
                    <div className="button-box">
                        <button>전화상담</button>
                        <button>AI챗봇상담</button>
                    </div>
                </div>
                <div className="qna-section">
                    <p>자주 묻는 질문</p>
                    <h1>QNA</h1>
                    <hr />
                    <div className="question-container">
                        <div className="question">
                            <p>질문질문질문??</p>
                            <p>2025.10.21</p>
                        </div>
                        <div className="question">
                            <p>질문질문질문??</p>
                            <p>2025.10.21</p>
                        </div>
                        <div className="question">
                            <p>질문질문질문??</p>
                            <p>2025.10.21</p>
                        </div>
                        <div className="question">
                            <p>질문질문질문??</p>
                            <p>2025.10.21</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}