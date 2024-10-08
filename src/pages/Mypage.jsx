import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
import MypageImg from "@/assets/img/bg-mbti4.png";
import styled from "styled-components";
import { getUserProfile, updateProfile } from "@/api/authAPI";

const MyPage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [newNickname, setNewNickname] = useState("");
  const { isLogin, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  
  useEffect(() => {    
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (token) { // 토큰이 존재하는지 확인
          const response = await getUserProfile(token); // await 사용
          setUserInfo(response); // response.data가 아닌 response로 설정
        } else {
          alert("토큰이 존재하지 않습니다.");
          logout();
        }
      } catch (error) {
        console.error("Failed to fetch user info:", error);
        logout();
      }      
    }
    fetchUserInfo();
  }, [isLogin, navigate, logout]);

  const handleNicknameChange = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("accessToken");
      const formData = new FormData();
      formData.append("nickname", newNickname);

      const response = await updateProfile(formData, token)

      if (response.success) {
        setUserInfo((prevState) => ({
          ...prevState,
          nickname: response.nickname,
        }));
        alert("닉네임이 변경되었습니다.");
        setNewNickname("");
      } else {
        alert("닉네임 변경에 실패했습니다.");
      }
    } catch (error) {
      console.error("Failed to update nickname:", error);
      alert("닉네임 변경에 실패했습니다.");
    }
  };

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <StMypageArea>
      <h1>
        <span className="text">My </span>
        <span className="text1">P</span>
        <span className="text2">a</span>
        <span className="text3">g</span>
        <span className="text4">e</span>  
      </h1>
      <div className="iBox">        
        <p>당신의 닉네임을<br/> 존중합니다.<br/>이미지는 신경 ㄴㄴ</p>
        <img src={MypageImg} alt="" />
      </div>
      <div className="infoBox">
        <p><span>아이디</span> {userInfo.id}</p>
        <p><span>이전 닉네임</span> {userInfo.nickname}</p>
        <form onSubmit={handleNicknameChange}>
          <p>
            <span>변경 닉네임</span>
            <input
              type="text"
              value={newNickname}
              onChange={(e) => setNewNickname(e.target.value)}
              placeholder="변경할 닉네임을 입력해주세요!"
            />
          </p>
          <button type="submit">닉네임 변경</button>
        </form>
      </div>      
    </StMypageArea>
  );
};

const StMypageArea = styled.div`
  padding:20px 0;
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    margin:0 0 20px;
    .text {
      margin-right: 10px;
      &1 {
        color: #efb700;
      }
      &2 {
        color: #da2e01;
      }
      &3 {
        color: #9eba03;
      }
      &4 {
        color: #7003ba;
      }
      &5 {
        color: #53ba03;
      }
    }
  }
  .iBox {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    font-size: 0;
    p {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 16px;
      color: #fff;
      text-align: center;
      transform: translate(-50%,-50%);
      text-shadow: .5px .5px 10px rgba(0,0,0,.5);
      z-index: 1;
    }
  }
  .infoBox {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-top: 10px solid #efb700;
    border-radius: 10px;
    margin: 20px 0 0 0;
    padding: 15px;
    input {
      &::-webkit-input-placeholder {
        color: #858585;
      }
    }
    p {
      display: flex;
      border-bottom: 1px solid #e5e5e5;
      padding: 10px 0;
      span {
        width: 100px;
        border-right: 1px solid #e5e5e5;
        margin-right: 10px;
      }
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 40px;
      color: #fff;    
      background: #ecc100;
      border: 1px solid #fff;
      border-radius: 3px;
      margin: 20px 0 0 0;
    }
  }
`
export default MyPage;
