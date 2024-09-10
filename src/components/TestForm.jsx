import { questions } from "@/data/questions"
import { useState } from "react";
import styled from "styled-components";
const TestForm = ({ onSubmit }) => {

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  // 체크된 input의 값을 전달 (순서, yes or no)
  const handleChange = (index, answer) => {
    console.log(index, answer);
    // 기존의 answers 배열을 복사 (불변성을 유지하기 위해)
    const newAnswers = [...answers];
    // 특정 질문(index)에 해당하는 답변을 새로운 값(answer)으로 변경
    newAnswers[index] = answer;
     // 업데이트된 배열을 상태로 설정
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };


  return (
    <StTestForm onSubmit={handleSubmit}>
      <ul>
        {questions.map((list, i) => (
          <li key={list.id}>
            <strong>{list.question}</strong>
            <div className="labelWrap">
              {list.options.map((option, ind) => (                
                <div className="labelBox" key={ind}>                  
                  <input 
                    type="radio"
                    id={`question-${i}-${option}`}
                    name={`question-${list.id}`}
                    value={option}
                    checked={answers[i] === ind}
                    onChange={() => handleChange(i, ind)}
                  />
                  <label htmlFor={`question-${i}-${option}`}>                    
                    {option}
                  </label>
                </div>
              ))}
            </div>           
          </li>
        ))}
      </ul>
      <button type="submit">저장</button>
    </StTestForm>
  )
}
const StTestForm = styled.form`
  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
    li {
      background: white;
      padding: 15px;
      border-top: 15px solid #ecc100;
      border-radius: 10px;
      word-break: keep-all;
      .labelWrap {
        display: flex;
        align-items: center;              
        border-top: 1px solid #eee;
        margin: 20px 0 0 0;
        padding: 10px 0 0 0;
        .labelBox {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50%;
          height: 30px;
          &:first-child {
            border-right: 1px solid #eee;
          }
          label {
            width: 100%;
            text-align: center;
            cursor: pointer;
            font-size: 13px;
            color: #888;
          }
          input:checked + label {
            color: red;          
          }
        }
      }
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
`




export default TestForm
