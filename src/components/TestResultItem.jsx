import { AuthContext } from "@/context/AuthContext"
import { getFormattedTime } from "@/utils/dateResult"
import { mbtiResult } from "@/utils/mbtiResult"
import { useContext } from "react"

const TestResultItem = ({ data, onDelete, onUpdate }) => {
  const { user } = useContext(AuthContext);
  
  // 공개 글 || 나의 글
  if(data.visibility || user.id === data.userId) {
    return (
      <div>
        {
          user.id === data.userId && (
            <p>
              {data.visibility ? '비공개 글' : '공개 글'}
            </p>
          )
        } 
        작성자 : {data.userId}{data.nickname}
        MBTI : {data.result}
        MBTI 설명: {mbtiResult(`${data.result}`)}
        날짜 : {getFormattedTime(data.date)}
        {
          user.id === data.userId && (
            <button onClick={() => onDelete(data.id)}>삭제</button>
          )
        }      
        마마마마마!!!! = {data.nickname}
        {
          user.id === data.userId && (
            <button onClick={() => onUpdate({id: data.id, vis: data.visibility})}>
              {data.visibility ? '비공개' : '공개'}
            </button>
          )
        }     
      </div>
    )
  }

  return null;

}

export default TestResultItem
