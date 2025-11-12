import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CommunityPop() {
  const [backendMsg, setBackendMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then(res => res.json())
      .then(data => setBackendMsg(data.message))
      .catch(err => console.error("❌ 백엔드 연결 실패:", err));
  }, []);

  return (
    <>
      <section className="mid-box">
        <Link to='/community-post' className="post-btn">
          <i className="fa fa-2x fa-edit"></i>
        </Link>
        <article className="post-box">
          <div className="post">
            <div className="post-info-box">
              <a href="#" className="profile-box">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSLXFDMg9hIm2XHbwcEi8TUp1oR9mUgKDgXQ&s"
                  alt="프로필"
                />
              </a>
              <div className="post-bottom">
                <div className="box">
                  <h3>유기농염소</h3>
                  <p>|</p>
                  <p>1시간</p>
                </div>
                <h3>제목</h3>
                <p>인기순 글 내용</p>
                <img
                  src="https://cdn.newspenguin.com/news/photo/202102/3998_12598_4757.jpg"
                  className="post-picture"
                  alt="게시글 사진"
                />
                <div className="reaction-box">
                  <div className="box-con">
                    <a href="#">like <p>0</p></a>
                    <a href="#">comment</a>
                    <a href="#">share</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="post-info-box">
              <a href="#" className="profile-box">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSLXFDMg9hIm2XHbwcEi8TUp1oR9mUgKDgXQ&s"
                  alt="프로필"
                />
              </a>
              <div className="post-bottom">
                <div className="box">
                  <h3>유기농염소</h3>
                  <p>|</p>
                  <p>1시간</p>
                </div>
                <h3>제목</h3>
                <p>인기순 글 내용</p>
                <img
                  src="https://cdn.newspenguin.com/news/photo/202102/3998_12598_4757.jpg"
                  className="post-picture"
                  alt="게시글 사진"
                />
                <div className="reaction-box">
                  <div className="box-con">
                    <a href="#">like <p>0</p></a>
                    <a href="#">comment</a>
                    <a href="#">share</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </article>
      </section>


      {backendMsg && (
        <div style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          background: "#0077b6",
          color: "white",
          padding: "8px 12px",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          zIndex: 1000
        }}>
          {backendMsg}
        </div>
      )}
    </>
  );
}
