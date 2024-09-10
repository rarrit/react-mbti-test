import TestResultItem from "./TestResultItem"
import { useMbti } from "@/hooks/queries";
import { useDeleteMbti, useVisibilityMbti } from "@/hooks/mutations";
import styled from "styled-components";
import { useEffect } from "react";
import { getUserProfile } from "@/api/authAPI";
import { useState } from "react";

const TestResultList = () => {  
  const [loginUser, setLoginUser] = useState({});
  const { data, isLoading, isError } = useMbti();

  // custom hooks
  const { mutate: onDeleteMbti } = useDeleteMbti();
  const { mutate: onUpdateMbti } = useVisibilityMbti();

  useEffect(() => {
    const getProfile = async () => {
      try{
        const token = localStorage.getItem("accessToken");
        const userProfile = await getUserProfile(token);
        setLoginUser(userProfile);
      }catch(e){
        alert("유저의 정보가 없습니다.", e)
      }
    }
    getProfile();
  }, [isLoading, isError])

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
              loginUser={loginUser}
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
