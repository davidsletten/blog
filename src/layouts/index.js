import React from "react"
import Context, { ContextProvider } from "../utils/context"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import "./layout.scss"
import Signature from "../../content/assets/signature.svg"

const Layout = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  background-position: top center;
  background-size: contain;
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  h1 {
    margin: 0;
  }
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

export default ({ children }) => {
  const query = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "all.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <ContextProvider>
      <Layout Tag="div" fluid={query.file.childImageSharp.fluid}>
        <Context.Consumer>
          {({ data }) => (
            <StyledHeader>
              <h1>{data.title}</h1>
            </StyledHeader>
          )}
        </Context.Consumer>
        <StyledMain>{children}</StyledMain>
        <StyledFooter>
          <div className="border-footer" />
          <Signature />
        </StyledFooter>
      </Layout>
    </ContextProvider>
  )
}
