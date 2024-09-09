import { getFormattedTime } from "@/utils/dateResult"
import { mbtiResult } from "@/utils/mbtiResult"

const TestResultItem = ({ data }) => {
  return (
    <div>
      작성자 : {data.userId}{data.nickname}
      MBTI : {data.result}
      MBTI 설명: {mbtiResult(`${data.result}`)}
      날짜 : {getFormattedTime(data.date)}
    </div>
  )
}

export default TestResultItem
