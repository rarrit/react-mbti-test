import { useQuery } from "@tanstack/react-query"
import { getTestResults } from "@/api/mbtiAPI"
import TestResultItem from "./TestResultItem"

const TestResultList = () => {  

  const { data, isPending, isError } = useQuery({
    queryKey: ["mbti"],
    queryFn: getTestResults
  })

  if(isPending) return <div>로딩중입니다.</div>
  if(isError) return <div>에러가 발견되었습니다.</div>

  console.log(data);
  return (
    <>
      {
      data.map(list => {
        return (
          <TestResultItem 
            key={list.id}
            data={list}
          />
        )
      })  
    }   
    </>    
  )
}

export default TestResultList
