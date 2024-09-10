import { createTestResult } from "@/api/mbtiAPI";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
import { calculateMBTI } from "@/utils/mbtiCalculator";
import { mbtiResult } from "@/utils/mbtiResult";
import TestForm from "@/components/TestForm"
import styled from "styled-components";
import { getMbtiImg } from "@/utils/mbtiImg";

const TestPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [resultInfo, setResultInfo] = useState(null);

  const handleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers);    
    console.log(result);
    setResultInfo(result); 
    const resultData = {
      userId: user.id,
      nickname: user.nickname,
      result,
      // answers,      
      date: new Date().toISOString(),
      visibility: true,
    };    
    await createTestResult(resultData);    
    
  };

  const mbtiImg = getMbtiImg(resultInfo);
  
  return (
    <StTestArea>      
      {resultInfo
      ? (
        <StResultForm>
          <h2>{resultInfo}</h2>
          <StImg className="mbtiImg" src={mbtiImg} />
          <p className="minSans" dangerouslySetInnerHTML={{__html: mbtiResult(resultInfo)}}/>

          <div className="btnArea">
            <button onClick={() => setResultInfo(null)}>다시하기</button>
            <button onClick={() => navigate('/results')}>결과 리스트 보기</button>
          </div>          
        </StResultForm>
      ) 
      : ( 
        <>
          <h1>
            <span className="text">Test</span> 
            <span className="text1">S</span>
            <span className="text2">T</span>
            <span className="text3">A</span>
            <span className="text4">R</span>
            <span className="text5">T</span>
            <span className="text6">!</span>
          </h1>
          <TestForm onSubmit={handleTestSubmit}/>        
        </>   
      )}  
    </StTestArea>    
  )
}

const StTestArea = styled.div`
  padding: 20px 0;
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    margin: 0 0 20px;      
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
        color: #030eba;
      }
      &6 {
        color: #03ba7a;
      }
    }
  }
`;
const StResultForm = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 15px;
  border-top: 30px solid #ecc100;
  h2 {
    font-size: 38px;
    text-align: center;
    margin: 0 0 30px;
  }
  p {
    word-break: keep-all;
  }
  .btnArea {
    display: flex;
    align-items: center;
    margin: 40px 0;
    border-radius: 10px;
    overflow: hidden;
    border: 2px solid #ecc100;
    button {
      width: 50%;
      height: 80px;
      text-align: center;      
      &:last-child {        
        background: #ecc100;
      }
    }
  }
`
const StImg = styled.img`
  width: 100%;
  box-shadow: .5px .5px 10px rgba(0,0,0,.5);
  border-radius: 10px;
  margin: 0 0 30px;
`
export default TestPage
