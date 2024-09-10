import { Link } from "react-router-dom"
import { Github, School } from 'lucide-react';
import styled from "styled-components"


const Footer = () => {
  return (
    <StFooter>
      <div className="inner">
        <strong>팩트폭행 MBTI</strong>
        <div className="linkBox">
          <Link to="https://github.com/rarrit" target="_blank">
            <Github />
            Github
          </Link>
          <Link to="https://rarrit.github.io/" target="_blank">
            <School />
            Blog
          </Link>
        </div>
        <span>Copyright 2024. <b>RARRIT</b>. all rights reserved.</span>
      </div>
    </StFooter>
  )
}

const StFooter = styled.footer`
  position: relative;
  left: -15px;
  width: calc(100% + 30px);
  padding: 15px;
  background: white;
  border-top: 2px solid #ecc100;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  strong {
    display: block;
    text-align: center;
    margin: 0 0 15px;
  }
  span {
    display: block;
    font-size: 8px;
    color: #999;
    text-align: center;
    b {
      color:#000;
    }
  }
  .linkBox {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 15px;
    a {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      color: #444;
      &:first-child {
        margin-right: 30px;
        &:before {
          content: '';
          position: absolute;
          top: 50%;
          right: -15px;
          width: 1px;
          height: 20px;
          background: #e5e5e5;
          transform: translateY(-50%);
        }
      }
    }
  }
`
export default Footer
