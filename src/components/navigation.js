import React, { Component } from "react"
import styled from "styled-components"
import { TimelineMax } from "gsap/TweenMax"

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  opacity: 0;
  &:before {
    content: "";
    position: absolute;
    top: 300px;
    left: 0;
    border-top-width: 1px;
    border-top-style: solid;
    border-image: linear-gradient(to right, cyan, magenta, yellow) 1;
    width: 100%;
  }
  &:after {
    content: "";
    position: absolute;
    top: 300px;
    left: 50%;
    width: 640px;
    height: 1px;
    background: black;
    transform: translateX(-50%);
  }
  * {
    z-index: 1;
  }
`

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.navRef = React.createRef()
    this.master = new TimelineMax()
  }
  componentDidMount() {
    this.master.add(this.initialize()).play()
  }
  initialize = () => {
    const tl = new TimelineMax()
    tl.add("initialize")
    tl.to(this.navRef.current, 1, { opacity: 1 }, "initialize")
    return tl
  }
  render() {
    return (
      <StyledNav ref={this.navRef}>
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M8.66025 0L17.3205 5V15L8.66025 20L0 15V5L8.66025 0Z"
          />
        </svg>
        <svg
          width="35"
          height="40"
          viewBox="0 0 35 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M17.3205 0L34.641 10V30L17.3205 40L0 30V10L17.3205 0Z"
          />
        </svg>
        <svg
          width="52"
          height="60"
          viewBox="0 0 52 60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M0.5 15.2887L25.9808 0.57735L51.4615 15.2887V44.7113L25.9808 59.4226L0.5 44.7113V15.2887Z"
          />
        </svg>
        <svg
          width="70"
          height="80"
          viewBox="0 0 70 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M34.641 0L69.282 20V60L34.641 80L0 60V20L34.641 0Z"
          />
        </svg>
        <svg
          width="88"
          height="100"
          viewBox="0 0 88 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M44 0L87.3013 25V75L44 100L0.69873 75V25L44 0Z"
          />
        </svg>
        <svg
          width="70"
          height="80"
          viewBox="0 0 70 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M34.641 0L69.282 20V60L34.641 80L0 60V20L34.641 0Z"
          />
        </svg>
        <svg
          width="52"
          height="60"
          viewBox="0 0 52 60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M0.5 15.2887L25.9808 0.57735L51.4615 15.2887V44.7113L25.9808 59.4226L0.5 44.7113V15.2887Z"
          />
        </svg>
        <svg
          width="35"
          height="40"
          viewBox="0 0 35 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M17.3205 0L34.641 10V30L17.3205 40L0 30V10L17.3205 0Z"
          />
        </svg>
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M8.66025 0L17.3205 5V15L8.66025 20L0 15V5L8.66025 0Z"
          />
        </svg>
      </StyledNav>
    )
  }
}
