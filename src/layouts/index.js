import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Context, { ContextProvider } from "../utils/context"
import "./layout.scss"
import Navigation from "../components/navigation"
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
  margin: 0 10px;
  border-width: 0 1px;
  border-style: solid;
  border-image: linear-gradient(to right, cyan, magenta, yellow) 1;
  padding: 0 20px 60px;
  width: 980px;
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
    padding: 2px 20px 0;
    background: black;
  }
  .border-footer {
    position: absolute;
    border-width: 0 1px 1px;
    border-style: solid;
    border-image: linear-gradient(to right, cyan, magenta, yellow) 1;
    width: 980px;
    height: 35px;
  }
`

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const headerImages = graphql`
  query {
    adventure: file(relativePath: { eq: "adventure.png" }) {
      ...fluidImage
    }
    all: file(relativePath: { eq: "all.png" }) {
      ...fluidImage
    }
    art: file(relativePath: { eq: "art.png" }) {
      ...fluidImage
    }
    ecology: file(relativePath: { eq: "ecology.png" }) {
      ...fluidImage
    }
    engineering: file(relativePath: { eq: "engineering.png" }) {
      ...fluidImage
    }
    gaming: file(relativePath: { eq: "gaming.png" }) {
      ...fluidImage
    }
    mindfulness: file(relativePath: { eq: "mindfulness.png" }) {
      ...fluidImage
    }
    veganism: file(relativePath: { eq: "veganism.png" }) {
      ...fluidImage
    }
    writing: file(relativePath: { eq: "writing.png" }) {
      ...fluidImage
    }
  }
`

export default ({ children }) => (
  <ContextProvider>
    <Context.Consumer>
      {({ data }) => (
        <StaticQuery
          query={headerImages}
          render={query => (
            <Layout
              Tag="div"
              fluid={
                data.category
                  ? query[data.category].childImageSharp.fluid
                  : query.all.childImageSharp.fluid
              }
            >
              <StyledHeader>
                <h1>{data.title}</h1>
              </StyledHeader>
              <Navigation />
              <StyledMain>{children}</StyledMain>
              <StyledFooter>
                <div className="border-footer" />
                <Signature />
              </StyledFooter>
            </Layout>
          )}
        />
      )}
    </Context.Consumer>
  </ContextProvider>
)
