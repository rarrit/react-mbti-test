import { useNavigate } from "react-router-dom"
import mainImg from "@/assets/img/bg-mbti2.jpg";
import styled from "styled-components";

const Main = () => {
  const navigate = useNavigate();
  return (
    <StMain>
      <h1>
        <span className="text">팩트폭행</span>
        <span className="textM">M</span>
        <span className="textB">B</span>
        <span className="textT">T</span>
        <span className="textI">I</span>
      </h1>
      <div className="iBox">
        <p>하고 울지 마시길!</p>
        <img src={mainImg} alt="" />
      </div>      
      <button onClick={()=> navigate('/mbti')}>테스트하기</button>
    </StMain>
  )
}

const StMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  width: 100%;
  padding: 20px 0 ;
  h1 {
    display: flex;
    font-size: 36px;
    margin:0 0 20px;
    .text {
      margin-right: 10px;
      &M {
        color: #efb700;
      }
      &B {
        color: #da2e01;
      }
      &T {
        color: #9eba03;
      }
      &I {
        color: #7003ba;
      }
    }
  }
  .iBox {
    position: relative;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    font-size: 0;
    img {
      width: 100%;
    }
    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      z-index: 1;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      text-shadow: 5px .5px 10px rgba(0,0,0,.5);
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border: 3px solid #ecc100;
    border-radius: 10px;
    width: 100%;
    margin: 20px 0 0 0;
    padding: 10px 0;
  }
`

export default Main
