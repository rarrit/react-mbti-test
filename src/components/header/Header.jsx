import { AuthContext } from "@/context/AuthContext"
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

const Header = () => {
  const { isLogin, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  }

  return (
    <>
      <StHeader>
        <div className="inner">
          <Link to={`/`} style={{ width: "100px"}}>홈</Link>
          {
            isLogin ? (
              <>
                <Link to={`/mbti`}>테스트</Link>        
                <Link to={`/results`}>결과보기</Link>        
                <Link to={`/mypage`}>마이페이지</Link>        
                <button onClick={handleLogout}>로그아웃</button>
              </>
            ) : (
              <>
                <Link to={`/login`}>로그인</Link>
                <Link to={`/join`}>회원가입</Link>
              </>
            )
          }
                    
          
        </div>
      </StHeader>
    </>
  )
}

const StHeader = styled.header`
  
`

export default Header

