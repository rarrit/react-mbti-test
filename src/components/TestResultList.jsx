import TestResultItem from "./TestResultItem"
import { useMbti } from "@/hooks/queries";
import { useDeleteMbti, useVisibilityMbti } from "@/hooks/mutations";
import styled from "styled-components";

const TestResultList = () => {  
  const { data, isLoading, isError } = useMbti();

  // custom hooks
  const { mutate: onDeleteMbti } = useDeleteMbti();
  const { mutate: onUpdateMbti } = useVisibilityMbti();


  if(isLoading) return <div>로딩중입니다.</div>
  if(isError) return <div>에러가 발견되었습니다.</div>

  const sortData = data.sort((a, b) => new Date(b.date) - new Date(a.date));   
  
  return (
    <StResultItemWrap>
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
    </StResultItemWrap>    
  )
}
const StResultItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;  
`

export default TestResultList
