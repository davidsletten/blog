import React, { Component } from "react"
import styled from "styled-components"
import { TimelineMax } from "gsap/TweenMax"

const StyledNav = styled.nav`
  border-width: 1px 0 0;
  border-style: solid;
  border-image: linear-gradient(to right, cyan, magenta, yellow) 1;
  width: 980px;
  opacity: 0;
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
    return <StyledNav ref={this.navRef} />
  }
}
