import { AuthContext } from "@/context/AuthContext"
import { getFormattedTime } from "@/utils/dateResult"
import { mbtiResult } from "@/utils/mbtiResult"
import { useContext } from "react"

const TestResultItem = ({ data, onDelete, onUpdate }) => {
  const { isLogin, user } = useContext(AuthContext);
  console.log(isLogin, user);

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
          user.id === data.userId && 
          <button onClick={onDelete}>삭제</button>
        }      
        {
          user.id === data.userId && (
            <button onClick={onUpdate}>
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
