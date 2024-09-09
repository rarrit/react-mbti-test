import { useState } from "react"
import { handleUserRegister } from "@/api/authAPI";
import { useNavigate } from "react-router-dom";



const Join = () => {

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleJoin = async (e) => {
    e.preventDefault();
    try{
      const joinData = {
        id,
        password,
        nickname
      }
      const response = await handleUserRegister(joinData);
      if(response.success) {
        alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.")
        navigate("/login");
      }else{
        alert(response.message || "회원가입이 실패했습니다.");
      }
    }catch(e){
      console.log("Join Error =>", e.response || e);
      alert("회원가입을 실패했습니다.")
    }
  }

  return (
    <>
      <form onSubmit={handleJoin}>
        <input 
          type="text" 
          name="id"
          value={id} 
          onChange={(e) => setId(e.target.value)}
        />
        <input 
          type="password" 
          name="password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        <input 
          type="text" 
          name="nickname"
          value={nickname} 
          onChange={(e) => setNickname(e.target.value)}
        />
        <button>회원가입</button>
      </form>
    </>
  )
}

export default Join
