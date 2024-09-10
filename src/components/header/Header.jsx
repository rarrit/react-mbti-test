import { AuthContext } from "@/context/AuthContext"
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import GlobalStyle from "../GlobalStyle"
import { House, BookOpenCheck, ListChecks, UserRoundPen, LogOut, LogIn, UserRoundPlus } from 'lucide-react';
import { useEffect } from "react"
import { getUserProfile } from "@/api/authAPI"


const Header = () => {
  const { isLogin, logout, setIsUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async () => {
      const token = localStorage.getItem("accessToken");
      const userProfile = await getUserProfile(token);        
      setIsUserInfo(userProfile);
    }
    getProfile();
  }, [])


  const handleLogout = () => {
    logout();
    navigate("/");
  }

  return (
    <>
      <GlobalStyle/>
      <StHeader className="fixed top-0 left-0 size-full">
        <div className="inner flex items-center justify-between ">
          <div className="leftArea">
            <Link to={`/`}>
              <House size={30} color="#000000" strokeWidth={2} />
              <span>홈</span>
            </Link>
          </div>
          <div className="rightArea">
            {
              isLogin ? (
                <>
                  <Link to={`/mbti`}>
                    <BookOpenCheck size={30} color="#000000" strokeWidth={2} />
                    <span>테스트</span>
                  </Link>        
                  <Link to={`/results`}>
                    <ListChecks size={30} color="#000000" strokeWidth={2} />
                    <span>결과보기</span>
                  </Link>        
                  <Link to={`/mypage`}>
                    <UserRoundPen size={30} color="#000000" strokeWidth={2} />
                    <span>프로필</span>
                  </Link>        
                  <button onClick={handleLogout}>
                  <LogOut size={30} color="#000000" strokeWidth={2} />
                    <span>로그아웃</span>
                  </button>
                </>
              ) : (
                <>
                  <Link to={`/login`}>
                    <LogIn size={30} color="#000000" />
                    <span>로그인</span>
                  </Link>
                  <Link to={`/join`}>
                    <UserRoundPlus size={30} color="#000000" />
                    <span>회원가입</span>
                  </Link>
                </>
              )
            }
          </div>                                                          
        </div>
      </StHeader>
    </>
  )
}

const StHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  background: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom: 2px solid #ecc100;
  box-shadow: .5px .5px 10px rgba(255,255,255,.5);
  z-index: 9999;
  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%; 
    max-width:670px;
    margin:0 auto;
    padding:0 15px;
    > * {
      display: flex;
      align-items: center;
      gap:15px;
      a, button {        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
        span {
          font-size:10px;
        }
      }
    }
  }
`

export default Header

