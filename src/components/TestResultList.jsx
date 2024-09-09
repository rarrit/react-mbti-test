import TestResultItem from "./TestResultItem"
import { useMbti } from "@/hooks/queries";
import { useDeleteMbti, useVisibilityMbti } from "@/hooks/mutations";

const TestResultList = () => {  
  
  const { data, isLoading, isError } = useMbti();
  // custom hooks
  const { mutate: onDeleteMbti } = useDeleteMbti();
  const { mutate: onUpdateMbti } = useVisibilityMbti();

  console.log(data);

  if(isLoading) return <div>로딩중입니다.</div>
  if(isError) return <div>에러가 발견되었습니다.</div>

  const sortData = data.sort((a, b) => new Date(b.date) - new Date(a.date));   
  console.log("sortData =>>>", sortData);
  return (
    <>
      {
      sortData.map(list => {
        return (
          <TestResultItem 
            key={list.id}
            data={list}
            onDelete={onDeleteMbti}
            onUpdate={onUpdateMbti}
          />
        )
      })  
    }   
    </>    
  )
}

export default TestResultList
