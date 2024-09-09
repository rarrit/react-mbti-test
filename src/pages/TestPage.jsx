import { createTestResult } from "@/api/mbtiAPI";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
import { calculateMBTI } from "@/utils/mbtiCalculator";
import { mbtiResult } from "@/utils/mbtiResult";
import TestForm from "@/components/TestForm"


const TestPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [resultInfo, setResultInfo] = useState(null);

  const handleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers);    
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


  return (
    <>
      <h2>MBTI 테스트</h2>
      {resultInfo
      ? (
        <>
          테스트 결과: {resultInfo}<br/>
          {mbtiResult(`${resultInfo}`)}
          <button onClick={() => setResultInfo(null)}>다시하기</button>
          <button onClick={() => navigate('/results')}>결과 리스트 보기</button>
        </>
      ) 
      : (
        <>          
          <TestForm onSubmit={handleTestSubmit}/>
        </>
        
      )}      
    </>
  )
}

export default TestPage
