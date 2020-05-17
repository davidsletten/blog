import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Context, { ContextProvider } from "../utils/context"
import "./layout.scss"
import About from "../components/about"
import Navigation from "../components/navigation"
import Signature from "../../content/assets/signature.svg"

const Background = styled(BackgroundImage)`
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
  display: flex;
  flex-direction: column;
  border-width: 0 1px;
  border-style: solid;
  border-image: linear-gradient(to right, cyan, magenta, yellow) 1;
  padding: 20px 20px 60px;
  width: 700px;
  background-color: rgba(0, 0, 0, 0.7);
`

const StyledFooter = styled.footer`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 0;
  margin: 0 auto;
  width: 700px;
  height: 60px;
  background: black;
  &:before {
    content: "";
    position: absolute;
    border-width: 0 1px 1px;
    border-style: solid;
    border-image: linear-gradient(to right, cyan, magenta, yellow) 1;
    width: 700px;
    height: 35px;
  }
`

const StyledButton = styled.button`
  z-index: 1;
  cursor: pointer;
  outline: none;
  border: 0;
  padding: 0 20px;
  height: 49px;
  background: black;
`

const headerImages = graphql`
  query {
    allImageSharp {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default class Layout extends Component {
  static contextType = Context

  render() {
    const { children } = this.props

    return (
      <ContextProvider>
        <Context.Consumer>
          {({ data, set }) => (
            <StaticQuery
              query={headerImages}
              render={query => (
                <Background
                  Tag="div"
                  fluid={
                    data.page
                      ? query.allImageSharp.edges.find(
                          image =>
                            image.node.fluid.src
                              .split("/")
                              .pop()
                              .split(".")[0] === data.page
                        ).node.fluid
                      : query.allImageSharp.edges.find(
                          image =>
                            image.node.fluid.src
                              .split("/")
                              .pop()
                              .split(".")[0] === "home"
                        ).node.fluid
                  }
                >
                  <About show={data.about} />
                  <StyledHeader>
                    <h1>{data.title}</h1>
                  </StyledHeader>
                  <Navigation page={data.page} />
                  <StyledMain>{children}</StyledMain>
                  <StyledFooter>
                    <StyledButton
                      onClick={() =>
                        set({
                          about: true
                        })
                      }
                    >
                      <Signature />
                    </StyledButton>
                  </StyledFooter>
                </Background>
              )}
            />
          )}
        </Context.Consumer>
      </ContextProvider>
    )
  }
}
