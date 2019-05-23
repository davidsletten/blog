import React from "react"
import Context, { ContextProvider } from "../utils/context"
import styled from "styled-components"
import "./layout.scss"
import Signature from "../../content/assets/signature.svg"

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
`

const StyledHeader = styled.header`
  width: 1000px;
`

const StyledMain = styled.main`
  padding-bottom: 50px;
  width: 1000px;
`

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  width: 1000px;
  height: 50px;
`

export default ({ children }) => (
  <ContextProvider>
    <Layout>
      <Context.Consumer>
        {({ data }) => <StyledHeader>{data.title}</StyledHeader>}
      </Context.Consumer>
      <StyledMain>{children}</StyledMain>
      <StyledFooter>
        <Signature />
      </StyledFooter>
    </Layout>
  </ContextProvider>
)
