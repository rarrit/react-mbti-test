import { useQuery, useQueryClient } from "@tanstack/react-query"
import { deleteTestResult, getTestResults, updateTestResultVisibility } from "@/api/mbtiAPI"
import TestResultItem from "./TestResultItem"

const TestResultList = () => {  
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["mbti"],
    queryFn: getTestResults,
    onSuccess: () => {
      queryClient.invalidateQueries(["mbti"]);
    }
  })

  if(isLoading) return <div>로딩중입니다.</div>
  if(isError) return <div>에러가 발견되었습니다.</div>

  const sortData = data.sort((a, b) => new Date(b.date) - new Date(a.date));   
  
  return (
    <>
      {
      sortData.map(list => {
        return (
          <TestResultItem 
            key={list.id}
            data={list}
            onDelete={() => deleteTestResult(list.id)}
            onUpdate={() => updateTestResultVisibility(list.id, list.visibility)}
          />
        )
      })  
    }   
    </>    
  )
}

export default TestResultList
