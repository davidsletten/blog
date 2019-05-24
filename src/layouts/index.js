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
  padding-bottom: 60px;
  width: 1000px;
`

const StyledFooter = styled.footer`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 0;
  margin: 0 auto;
  width: 1000px;
  height: 60px;
  svg {
    z-index: 1;
    padding: 0 20px 10px;
    background: black;
  }
  .border-footer {
    position: absolute;
    border-width: 0 1px 1px;
    border-style: solid;
    border-image: linear-gradient(to right, cyan, magenta, yellow) 1;
    width: 980px;
    height: 33px;
  }
`

export default ({ children }) => (
  <ContextProvider>
    <Layout>
      <Context.Consumer>
        {({ data }) => <StyledHeader>{data.title}</StyledHeader>}
      </Context.Consumer>
      <StyledMain>{children}</StyledMain>
      <StyledFooter>
        <div className="border-footer" />
        <Signature />
      </StyledFooter>
    </Layout>
  </ContextProvider>
)
