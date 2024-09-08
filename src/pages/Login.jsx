import { handleUserLogin } from "@/api/auth";
import { AuthContext } from "@/context/AuthContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      const loginData = { id, password }
      const response = await handleUserLogin(loginData);
      if(response.success){        
        alert("로그인되었습니다. 메인 페이지로 이동합니다.")
        login(response.accessToken);
        navigate("/");
      }
    }catch(e){
      console.log("Login Error =>", e);
      alert("로그인이 실패했습니다.")
    }
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button>로그인</button>
      </form>
    </>
  )
}

export default Login
