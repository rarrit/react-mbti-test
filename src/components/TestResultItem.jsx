import { AuthContext } from "@/context/AuthContext"
import { getFormattedTime } from "@/utils/dateResult"
import { mbtiResult } from "@/utils/mbtiResult"
import { useContext } from "react"
import styled from "styled-components"

const TestResultItem = ({ data, onDelete, onUpdate }) => {
  
  const { isUserInfo } = useContext(AuthContext);


  // 공개 글 || 나의 글
  if(data.visibility || isUserInfo) {
    return (
      <StMbtiItem>
        <div className="info">
          <p>
            {data.nickname ? data.nickname : data.userId}        
            {
              isUserInfo.id === data.userId && (
                <span className={data.visibility ? `listState release` : `listState private` }>
                  {data.visibility ? '공개 글' : '비공개 글'}
                </span>
              )
            } 
          </p>          
          <p>{getFormattedTime(data.date)}</p>
        </div>       
        <div className="descBox">
          <span className="descMbti">{data.result}</span>
          <p className="descText minSans" dangerouslySetInnerHTML={{__html: mbtiResult(data.result)}} />
        </div> 
        
        
        {
          isUserInfo.id === data.userId && (
            <div className="btnArea">
              <button onClick={() => onDelete(data.id)}>삭제</button>
              <button onClick={() => onUpdate({id: data.id, vis: data.visibility})}>
                {data.visibility ? '비공개' : '공개'}
              </button>
            </div>
          )
        }      
        
        
      </StMbtiItem>
    )
  }

  return null;

}

const StMbtiItem = styled.div`
  position: relative;
  width: 100%;
  background: #fff;
  border-top: 10px solid #ecc100;
  border-radius: 10px;
  padding: 15px;
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #333;
    margin: 0 0 15px;
    padding: 0 0 15px;    
    p {
      font-size:14px;
      &:first-child {
        display: flex;
        align-items: center;        
        width: calc(100% - 130px);
        padding-right: 5px;
        span {          
          position: relative;
          font-size:13px;
          border-radius: 10px;
          margin: 0 0 0 20px;
          padding: 2px 8px;
          &.private {
            background: #ff5555;
          }
          &.release {
            background: #55c1ff;
          }
          &:before {
            content:''; 
            position: absolute;
            top: 50%;
            left: -10px;
            width: 1px;
            height: 50%;
            background: #858585;
            transform: translateY(-50%);          
          }
        }
      } 
      &:last-child {      
        width: 130px;
        text-align: right;
      }
    }    
  }
  .descBox {
    .descMbti {
      display: block;
      margin: 0 0 10px;
    }
    .descText {
      max-height: 200px;
      font-size: 13px;
      overflow-y: auto;        
      padding: 10px;
      border: 1px solid #4a4a4a;
      border-radius: 10px;
      box-shadow: .5px .5px 10px rgba(0,0,0,.15);
    }
  }
  .btnArea {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ecc100;
    border-radius: 10px;
    margin: 10px 0 0 0;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;    
      height: 30px;
      &:last-child {
        background: #ecc100;
      }
    }
  }
`

export default TestResultItem
