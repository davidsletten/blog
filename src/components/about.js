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
  div {
    margin: 0 auto;
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(to right, cyan, magenta, yellow) 1;
    padding: 40px 20px 20px;
    width: 700px;
    height: 85vh;
    overflow: auto;
    background: rgba(0, 0, 0, 0.7);
  }
`

const selfImage = graphql`
  query {
    file(relativePath: { eq: "self.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
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
            <StyledModal>
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
              <div>
                <StaticQuery
                  query={selfImage}
                  render={query => (
                    <Img
                      fixed={query.file.childImageSharp.fixed}
                      style={{ display: "block" }}
                      alt="Portrait of David Sletten"
                    />
                  )}
                />
                <p>
                  My name is David Sletten. I’ve been telling stories all my
                  life and ever seeking to refine my ability to express them. I
                  have pursued a number of different mediums in search of one
                  that fits the worlds within. As I’ve explored each, I’ve
                  discovered the unique way that it refracts the stories I seek
                  to tell. Nothing fits perfectly but that won’t stop me from
                  searching for that pure manifestation. I believe it’s as much
                  about my ability to convey as it is the medium’s ability to
                  translate and so I split my efforts between the two and just
                  keep pouring the stories out.
                </p>
                <p>
                  Fiction is the forbidden apple of knowledge. It is the power
                  that humanity has used to shape the planet. Money, God, and
                  empire. All are fiction and have allowed us to organize and
                  collaborate. I don’t seek such extreme impact but I recognize
                  that fiction can be our greatest teacher and it has helped me
                  to not only enjoy unimagined beauty but also to face real
                  challenges with courage and compassion. I seek to create
                  fiction that is not only thrilling and adventurous but also
                  inspiring.
                </p>
                <p>
                  Games take fiction to the next level for me. I enjoy stories
                  in all their forms but what I love most is an experience that
                  I can be a part of, a world that I feel immersed in and where
                  my decisions matter. I believe that games have even more power
                  to teach than fiction alone because they invite us to
                  participate and interact. Games allow us to explore ideas,
                  strategies, and decisions that we otherwise could not.
                </p>
                <p>
                  All my life I’ve looked for the right way to express my
                  creativity. I am compelled. If I neglect it, it builds inside
                  me until I burst. I’ve managed to channel this energy into
                  constructive activities and try to appease it with hobbies and
                  projects but that strategy has proved less and less effective.
                  I’ve adopted a daily practice that has helped me to truly
                  exercise this drive and I’m ready to share what I’ve created.
                </p>
              </div>
            </StyledModal>
          )}
        </Context.Consumer>
      )
    }
    return false
  }
}
