import { useState } from "react"
// import { handleUserRegister } from "@/api/authAPI";
import { useNavigate } from "react-router-dom";
import JoinImg from "@/assets/img/bg-mbti3.png";
import styled from "styled-components";
import { useRegisterUser } from "@/hooks/mutations";

const Join = () => {
  const [id, setId] = useState(""); // 회원가입 아이디
  const [password, setPassword] = useState(""); // 회원가입 비밀번호
  const [nickname, setNickname] = useState(""); // 회원가입 닉네임
  const navigate = useNavigate();

  const { mutate : registerUser, isPending } = useRegisterUser()  

  if(isPending) return <div>로딩중 입니다.</div>

  const handleJoin = (e) => {
    e.preventDefault();
    const joinData = {id, password, nickname}
    registerUser(joinData, {
      onSuccess: (response) => {
        alert(`${response.message}, 로그인 페이지로 이동합니다.`)
        navigate("/login");
      },
      onError: (error) => {
        alert(error.response?.data?.message || "회원가입에 실패했습니다.");
      }
    })
  }

  // const handleJoin = async (e) => {
  //   e.preventDefault();
  //   try{
  //     // 작성한 값
  //     const joinData = {
  //       id,
  //       password,
  //       nickname
  //     }
  //     // 해당 함수를 통해 데이터를 db에 전송함
  //     const response = await handleUserRegister(joinData);
  //     if(response.success) {
  //       alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.")
  //       navigate("/login");
  //     }else{
  //       alert(response.message || "회원가입이 실패했습니다.");
  //     }
  //   }catch(e){
  //     console.log("Join Error =>", e.response || e);
  //     alert("회원가입을 실패했습니다.")
  //   }
  // }

  return (
    <StForm onSubmit={handleJoin}>
      <h1>
        <span className="text1">J</span>
        <span className="text2">o</span>
        <span className="text3">i</span>
        <span className="text4">n</span>  
      </h1>
      <div className="iBox">        
        <p>파이팅도치가<br/> 회원가입을 응원합니다.</p>
        <img src={JoinImg} alt="" />
      </div>
      <input 
          type="text" 
          name="nickname"
          value={nickname} 
          placeholder="닉네임를 입력하세요!"
          onChange={(e) => setNickname(e.target.value)}
        />      
        <input 
          type="text" 
          name="id"
          value={id} 
          placeholder="아이디를 입력하세요!"
          onChange={(e) => setId(e.target.value)}
        />
        <input 
          type="password" 
          name="password"
          autoComplete="off" 
          value={password} 
          placeholder="비밀번호를 입력하세요!"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>회원가입</button>
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
      text-align: center;
      transform: translate(-50%,-50%);
      text-shadow: .5px .5px 10px rgba(0,0,0,.5);
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

export default Join
