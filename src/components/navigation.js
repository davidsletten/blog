import React, { Component } from "react"
import styled from "styled-components"
import { TimelineMax } from "gsap/TweenMax"

const StyledNav = styled.nav`
  &:before {
    content: "";
    position: absolute;
    top: 300px;
    left: 0;
    border-top-width: 1px;
    border-right-width: 0;
    border-bottom-width: 0;
    border-left-width: 0;
    border-top-style: solid;
    border-image: linear-gradient(to right, cyan, magenta, yellow) 1;
    width: 100%;
  }
  &:after {
    content: "";
    position: absolute;
    top: 300px;
    left: 50%;
    width: 128px;
    height: 1px;
    background: black;
    transform: translateX(-50%);
  }
  .stage {
    position: relative;
    width: 128px;
    height: 100px;
    * {
      z-index: 1;
    }
  }
  svg {
    position: absolute;
    top: 50px;
    transform: translateY(-50%);
  }
  .hex {
    left: 20px;
  }
`

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.hexRef = React.createRef()
    this.master = new TimelineMax()
  }
  componentDidMount() {
    this.master.add(this.initialize()).play()
  }
  initialize = () => {
    const tl = new TimelineMax()
    tl.add("initialize")
    tl.from(this.hexRef.current, 0.5, { height: 0 }, "initialize")
    return tl
  }
  render() {
    return (
      <StyledNav>
        <div className="stage">
          <svg
            className="hex"
            ref={this.hexRef}
            width="88"
            height="100"
            viewBox="0 0 88 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="black"
              stroke="magenta"
              d="M44 0L87.3013 25V75L44 100L0.69873 75V25L44 0Z"
            />
          </svg>
        </div>
      </StyledNav>
    )
  }
}
