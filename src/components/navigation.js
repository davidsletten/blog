import React, { Component } from "react"
import styled from "styled-components"
import { TimelineMax } from "gsap/TweenMax"

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: -30px;
  height: 160px;
  * {
    z-index: 1;
  }
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
  .boundary {
    position: relative;
    top: -30px;
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
        <svg
          ref={this.hexRef}
          width="88"
          height="100"
          viewBox="0 0 88 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="black"
            fillOpacity="0.7"
            stroke="magenta"
            d="M44 0L87.3013 25V75L44 100L0.69873 75V25L44 0Z"
          />
        </svg>
        <svg
          className="boundary"
          width="700"
          height="50"
          viewBox="0 0 700 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M304.5 20.4082L269.5 36.2245L210 0H0V50H700V0H497.5L430.5 36.2245L397 20.4082L349.5 48.9796L304.5 20.4082Z"
            fill="black"
            fill-opacity="0.7"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0H210.337L269.649 35.796L304.604 20.137L349.508 48.3995L396.905 20.1375L430.37 35.8001L497.166 0H700V50H699.001V1.0101H497.414L430.4 36.9272L396.961 21.2767L349.494 49.5803L304.525 21.2771L269.581 36.9312L210.062 1.0101H0.998573V50H0V0Z"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient
              id="gradient"
              x1="0"
              y1="0"
              x2="700"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00FFFF" />
              <stop offset="0.5" stopColor="#FF00FF" />
              <stop offset="1" stopColor="#FFFF00" />
            </linearGradient>
          </defs>
        </svg>
      </StyledNav>
    )
  }
}
