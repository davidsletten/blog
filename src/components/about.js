import React, { Component } from "react"
import Context from "../utils/context"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Hex from "./hex"
import Close from "../../content/assets/close.svg"

const StyledModal = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  h5 {
    margin: 20px 0 40px;
    text-align: center;
  }
  button {
    z-index: 1;
    position: absolute;
    top: 65px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    outline: none;
    border: 0;
    padding: 0;
    background: transparent;
  }
  .frame {
    margin: 0 auto;
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(to right, cyan, magenta, yellow) 1;
    padding: 40px 20px 20px;
    max-width: 700px;
    width: 95%;
    height: 85vh;
    overflow: auto;
    background: rgba(0, 0, 0, 0.7);
    text-align: center;
    @media (max-width: 768px) {
      height: 80vh;
    }
    div {
      text-align: left;
    }
  }
`

const aboutQuery = graphql`
  query {
    file(relativePath: { eq: "self.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    markdownRemark(fileAbsolutePath: { regex: "/about/" }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default class Navigation extends Component {
  render() {
    const { show } = this.props

    if (show) {
      return (
        <Context.Consumer>
          {({ set }) => (
            <StyledModal
              onClick={() =>
                set({
                  about: false
                })
              }
            >
              <h5>About David Sletten</h5>
              <button
                title="Close"
                onClick={() =>
                  set({
                    about: false
                  })
                }
              >
                <Hex>
                  <Close width="42px" height="49px" x="5" y="5" />
                </Hex>
              </button>
              <StaticQuery
                query={aboutQuery}
                render={query => (
                  <div className="frame" onClick={e => e.stopPropagation()}>
                    <Img
                      fixed={query.file.childImageSharp.fixed}
                      alt="Portrait of David Sletten"
                    />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: query.markdownRemark.html
                      }}
                    />
                  </div>
                )}
              />
            </StyledModal>
          )}
        </Context.Consumer>
      )
    }
    return false
  }
}
