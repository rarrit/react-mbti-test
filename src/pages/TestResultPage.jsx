import TestResultList from "@/components/TestResultList"
import styled from "styled-components"

const TestResultPage = () => {
  return (
    <StResultArea>
      <h1>
        <span className="text">RESULT</span>
        <span className="text1">L</span>
        <span className="text2">I</span>
        <span className="text3">S</span>
        <span className="text4">T</span>
      </h1>
      <TestResultList />
    </StResultArea>
  )
}

const StResultArea = styled.div`
  padding: 20px 0;
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    margin: 0 0 20px;     
    .text {
      margin-right: 10px;
      &1 {
        color: #efb700;
      }
      &2 {
        color: #da2e01;
      }
      &3 {
        color: #9eba03;
      }
      &4 {
        color: #7003ba;
      }
    }
  }
`


export default TestResultPage
