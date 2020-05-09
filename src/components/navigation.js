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
          width="980"
          height="60"
          viewBox="0 0 980 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M589 0H980V60H490.5H0V0H397L490.5 60L589 0Z"
            fill="black"
            fillOpacity="0.7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H397.241L490.506 58.8417L588.759 0H980V59.4209H979.001V0.982163H589.039L490.493 60L396.948 0.982163H0.998981V59.4209H0V0Z"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient
              id="gradient"
              x1="0"
              y1="0"
              x2="980"
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
