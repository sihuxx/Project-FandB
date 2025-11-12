import { Link } from "react-router-dom";

export default function CommunityNew() {
    return (
        <>
             <section className="mid-box">
                <Link to='/community-post' className="post-btn">
                    <i className="fa fa-2x fa-edit"></i>
                </Link>
                <article className="post-box">
                    <div className="post">
                        <div className="post-info-box">
                            <a href="#" className="profile-box"><img
                                src="https://s3.marpple.co/files/u_3070142/2023/10/original/cb6707e89f0b73e473b9cc81cdd4a7caf849fbf71.jpg"
                                alt="프로필"></img></a>
                            <div className="post-bottom">
                                <div className="box">
                                    <h3>니노니토</h3>
                                    <p>|</p>
                                    <p>1시간</p>
                                </div>
                                <h3>제목</h3>
                                <p>최신순 글 내용</p>
                                <img src="https://www.hanbit.co.kr/data/editor/20181219134720_zbkqflmi.jpg"
                                    className="post-picture" alt="게시글 사진"></img>
                                {/* <hr></hr> */}
                                <div className="reaction-box">
                                    <div className="box-con">
                                        <a href="#" className="like-btn">like <p>0</p></a>
                                        <a href="#">comment</a>
                                        <a href="#">share</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="post">
                        <div className="post-info-box">
                            <a href="#" className="profile-box"><img
                                src="https://s3.marpple.co/files/u_3070142/2023/10/original/cb6707e89f0b73e473b9cc81cdd4a7caf849fbf71.jpg"
                                alt="프로필"></img></a>
                            <div className="post-bottom">
                                <div className="box">
                                    <h3>니노니토</h3>
                                    <p>|</p>
                                    <p>1시간</p>
                                </div>
                                <h3>제목</h3>
                                <p>최신순 글 내용</p>
                                <img src="https://www.hanbit.co.kr/data/editor/20181219134720_zbkqflmi.jpg"
                                    className="post-picture" alt="게시글 사진"></img>
                                {/* <hr></hr> */}
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
        </>
    )
}