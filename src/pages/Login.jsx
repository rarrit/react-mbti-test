import { handleUserLogin } from "@/api/authAPI";
import { AuthContext } from "@/context/AuthContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginImg from "@/assets/img/bg-mbti1.jpg";
import styled from "styled-components";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, saveUserInfo } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      const loginData = { id, password }
      const response = await handleUserLogin(loginData);
      if(response.success){        
        alert("로그인되었습니다. 메인 페이지로 이동합니다.")
        login(response.accessToken);
        saveUserInfo(response);
        navigate("/");
      }
    }catch(e){
      console.log("Login Error =>", e);
      alert("로그인이 실패했습니다.")
    }
  }

  return (
    <StForm onSubmit={handleLogin}>
      <h1>
        <span className="text1">L</span>
        <span className="text2">o</span>
        <span className="text3">g</span>
        <span className="text4">i</span>
        <span className="text5">n</span>
      </h1>
      <div className="iBox">
        <p>용기가 가상하군!</p>
        <img src={LoginImg} alt="" />
      </div>
      <input type="text" value={id} placeholder="아이디를 입력하세요!" onChange={(e) => setId(e.target.value)}/>
      <input type="password" value={password} placeholder="비밀번호를 입력하세요!" onChange={(e) => setPassword(e.target.value)}/>
      <button>로그인</button>
    </StForm>
  )
}

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding:20px 0;
  gap: 5px;
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
      transform: translate(-50%,-50%);
      text-shadow: .5px .5px 10px rgba(0,0,0,.4);
      z-index: 1;
    }
  }
  input {
    width: 100%;    
    height: 30px;
    border-radius: 3px;
    background: #fff;
    border: 1px solid #ecc100;
    border-radius: 3px;
    font-size: 12px;
    color: #000;
    padding: 0 15px;
    &::-webkit-input-placeholder {
      color:#444;
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
  }
`

export default Login
