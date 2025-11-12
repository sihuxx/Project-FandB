import './css/market-post.css'
import { Link } from "react-router-dom";

export default function MidMarketPost() {
    return (
            <div className="mid-market-post-box">
                <div className="market-main-box">
                    <div className="post-market-top-box">
                        <div className="market-left-box">
                            <img src="https://img.kr.gcp-karroter.net/origin/article/202511/d0e34c753c15d33b0677c2d37528552352d8ca859a050fb0bc29059173a8c1fb_0.webp?q=82&s=300x300&t=crop&f=webp" alt="" />
                            <input type="file" />
                        </div>
                        <div className="market-right-box">
                            <input type="text" placeholder="글 제목" />
                            <input type="text" placeholder="키워드"/>
                            <input type="number" placeholder="가격"/>
                            <div className="in-box">
                                <div className="text-box">
                                    <p>상품 상태</p>
                                    <h3>새상품</h3>
                                </div>
                                <div className="text-box">
                                    <p>배송비</p>
                                    <h3>2500원</h3>
                                </div>
                            </div>
                            <textarea type="text" placeholder="판매한 물건의 상세 설명을 작성해 주세요."/>
                        </div>
                    </div>
                    <div className="post-market-btn-box">
                        <Link to='/market'>돌아가기</Link>
                        <button>게시하기</button>
                    </div>
                </div>
            </div>
    )
}