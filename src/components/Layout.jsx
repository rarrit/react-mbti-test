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
  
`
const StContents = styled.div`
  
`

export default Layout
