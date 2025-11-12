import './css/community-post.css'
import { Link } from "react-router-dom";

export default function MidCommunityPost() {
    return (
        <>
            <div className="mid-post-box">
                <div className="post-container">
                    <div className="container">
                        <div className="post-top-box">
                            <div className="profile-con">
                                <img src="https://s3.marpple.co/files/u_3070142/2023/10/original/cb6707e89f0b73e473b9cc81cdd4a7caf849fbf71.jpg" alt="profile" />
                                <h3>닉네임</h3>
                                <p>|</p>
                                <p>@id_idid</p>
                            </div>
                            <input type="text" className='title-input' placeholder='요즘 관심사는 무엇인가요?' />
                        </div>
                        <div className="post-mid-box">
                            <input type="text" className='detail-input' />
                            <div className="post-file-box">
                                <input type="file" id='fileInput' />
                                <label htmlFor="fileInput"></label>
                            </div>
                        </div>
                    </div>
                    <div className="post-button-box">
                        <Link to='/'>돌아가기</Link>
                        <button>게시하기</button>
                    </div>
                </div>

            </div>
        </>
    )
}