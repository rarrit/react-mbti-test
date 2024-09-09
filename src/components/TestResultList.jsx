import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getTestResults } from "@/api/mbtiAPI"
import TestResultItem from "./TestResultItem"

const TestResultList = () => {  
  const queryClient = useQueryClient();
  const { data, isPending, isError } = useQuery({
    queryKey: ["mbti"],
    queryFn: getTestResults,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    }
  })

  if(isPending) return <div>로딩중입니다.</div>
  if(isError) return <div>에러가 발견되었습니다.</div>

  const sortData = data.sort((a, b) => new Date(b.date) - new Date(a.date));   
  
  return (
    <>
      {
      sortData.map(data => {
        return (
          <TestResultItem 
            key={data.id}
            data={data}
          />
        )
      })  
    }   
    </>    
  )
}

export default TestResultList
