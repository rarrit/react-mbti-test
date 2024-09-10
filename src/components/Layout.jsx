import styled from "styled-components"
import Header from "./header/Header"
import Footer from "./footer/Footer"

const Layout = ({ children }) => {
  return (
    <StContainer>
      <Header />
      <StContents>
        { children }
      </StContents>
      <Footer />
    </StContainer>
  )
}

const StContainer = styled.div`
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding: 80px 15px 0;
`
const StContents = styled.div`
  
`

export default Layout
