import { questions } from "@/data/questions"
import { useState } from "react";
const TestForm = ({ onSubmit }) => {
  
  // 
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  // 체크된 input의 값을 전달 (순서, yes or no)
  const handleChange = (index, answer) => {
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
    <form onSubmit={handleSubmit}>
      <ul>
        {questions.map((list, i) => (
          <li key={list.id}>
            <strong>{list.question}</strong>
            {list.options.map((option, ind) => (
                <label key={ind}>
                  <input 
                    type="radio"
                    name={`question-${list.id}`}
                    value={option}
                    checked={answers[i] === option}
                    onChange={() => handleChange(i, option)}
                  />
                  {option}
                </label>
              ))}
          </li>
        ))}
      </ul>
      <button type="submit">저장</button>
    </form>
  )
}




export default TestForm
