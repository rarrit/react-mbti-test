import { useNavigate } from "react-router-dom"

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=> navigate('/mbti')}>테스트하기</button>
    </div>
  )
}

export default Main
