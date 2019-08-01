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
    border-top-style: solid;
    border-image: linear-gradient(to right, cyan, magenta, yellow) 1;
    width: 100%;
  }
  &:after {
    content: "";
    position: absolute;
    top: 300px;
    left: 50%;
    width: 600px;
    height: 1px;
    background: black;
    transform: translateX(-50%);
  }
  .stage {
    position: relative;
    width: 600px;
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
  .art {
    left: 16px;
  }
  .gaming {
    left: 50px;
  }
  .writing {
    left: 101px;
  }
  .engineering {
    left: 169px;
  }
  .all {
    left: 256px;
  }
  .ecology {
    left: 361px;
  }
  .adventure {
    left: 447px;
  }
  .mindfulness {
    left: 515px;
  }
  .veganism {
    left: 566px;
  }
`

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.artRef = React.createRef()
    this.artColorStartRef = React.createRef()
    this.artColorStopRef = React.createRef()
    this.gamingRef = React.createRef()
    this.gamingColorStartRef = React.createRef()
    this.gamingColorStopRef = React.createRef()
    this.writingRef = React.createRef()
    this.writingColorStartRef = React.createRef()
    this.writingColorStopRef = React.createRef()
    this.engineeringRef = React.createRef()
    this.engineeringColorStartRef = React.createRef()
    this.engineeringColorStopRef = React.createRef()
    this.allRef = React.createRef()
    this.allColorStartRef = React.createRef()
    this.allColorStopRef = React.createRef()
    this.ecologyRef = React.createRef()
    this.ecologyColorStartRef = React.createRef()
    this.ecologyColorStopRef = React.createRef()
    this.adventureRef = React.createRef()
    this.adventureColorStartRef = React.createRef()
    this.adventureColorStopRef = React.createRef()
    this.mindfulnessRef = React.createRef()
    this.mindfulnessColorStartRef = React.createRef()
    this.mindfulnessColorStopRef = React.createRef()
    this.veganismRef = React.createRef()
    this.veganismColorStartRef = React.createRef()
    this.veganismColorStopRef = React.createRef()
    this.master = new TimelineMax()
  }
  componentDidMount() {
    this.allHexs = [
      this.artRef.current,
      this.gamingRef.current,
      this.writingRef.current,
      this.engineeringRef.current,
      this.allRef.current,
      this.ecologyRef.current,
      this.adventureRef.current,
      this.mindfulnessRef.current,
      this.veganismRef.current
    ]
    this.master
      .add(this.initialize())
      .add(this.engineering())
      .play()
  }
  initialize = () => {
    const tl = new TimelineMax()
    tl.add("initialize")
    tl.from(this.allHexs, 0.5, { height: 0 }, "initialize")
    return tl
  }
  engineering = () => {
    const tl = new TimelineMax()
    tl.add("engineering")
      .to(this.artRef.current, 1, { x: 42, scale: 2 }, "engineering")
      .to(
        this.artColorStartRef.current,
        1,
        { attr: { "stop-color": "#20E0FF" } },
        "engineering"
      )
      .to(
        this.artColorStopRef.current,
        1,
        { attr: { "stop-color": "#3DC2FF" } },
        "engineering"
      )
      .to(this.gamingRef.current, 1, { x: 60, scale: 1.5 }, "engineering")
      .to(
        this.gamingColorStartRef.current,
        1,
        { attr: { "stop-color": "#4FB1FF" } },
        "engineering"
      )
      .to(
        this.gamingColorStopRef.current,
        1,
        { attr: { "stop-color": "#7C85FF" } },
        "engineering"
      )
      .to(this.writingRef.current, 1, { x: 77, scale: 1.33 }, "engineering")
      .to(
        this.writingColorStartRef.current,
        1,
        { attr: { "stop-color": "#8D72FF" } },
        "engineering"
      )
      .to(
        this.writingColorStopRef.current,
        1,
        { attr: { "stop-color": "#C937FF" } },
        "engineering"
      )
      .to(this.engineeringRef.current, 1, { x: 96, scale: 1.25 }, "engineering")
      .to(
        this.engineeringColorStartRef.current,
        1,
        { attr: { "stop-color": "#DA25FF" } },
        "engineering"
      )
      .to(
        this.engineeringColorStopRef.current,
        1,
        { attr: { "stop-color": "#FF25DA" } },
        "engineering"
      )
      .to(this.allRef.current, 1, { x: 96, scale: 0.8 }, "engineering")
      .to(
        this.allColorStartRef.current,
        1,
        { attr: { "stop-color": "#FF37C9" } },
        "engineering"
      )
      .to(
        this.allColorStopRef.current,
        1,
        { attr: { "stop-color": "#FF728D" } },
        "engineering"
      )
      .to(this.ecologyRef.current, 1, { x: 77, scale: 0.75 }, "engineering")
      .to(
        this.ecologyColorStartRef.current,
        1,
        { attr: { "stop-color": "#FF847B" } },
        "engineering"
      )
      .to(
        this.ecologyColorStopRef.current,
        1,
        { attr: { "stop-color": "#FFB04F" } },
        "engineering"
      )
      .to(this.adventureRef.current, 1, { x: 60, scale: 0.66 }, "engineering")
      .to(
        this.adventureColorStartRef.current,
        1,
        { attr: { "stop-color": "#FFC23E" } },
        "engineering"
      )
      .to(
        this.adventureColorStopRef.current,
        1,
        { attr: { "stop-color": "#FFDF20" } },
        "engineering"
      )
      .to(this.mindfulnessRef.current, 1, { x: 42, scale: 0.5 }, "engineering")
      .to(
        this.mindfulnessColorStartRef.current,
        1,
        { attr: { "stop-color": "#FFF10F" } },
        "engineering"
      )
      .to(
        this.mindfulnessColorStopRef.current,
        1,
        { attr: { "stop-color": "#FFFF00" } },
        "engineering"
      )
      .to(this.veganismRef.current, 0.5, { x: 26, scale: 0 }, "engineering")
      .to(
        this.veganismColorStartRef.current,
        1,
        { attr: { "stop-color": "#00FFFF" } },
        "engineering"
      )
      .to(
        this.veganismColorStopRef.current,
        1,
        { attr: { "stop-color": "#0FF1FF" } },
        "engineering"
      )
      .to(this.veganismRef.current, 0, { x: -566 }, "engineering+=0.5")
      .to(
        this.veganismRef.current,
        0.5,
        { x: -550, scale: 1 },
        "engineering+=0.5"
      )
    return tl
  }
  render() {
    return (
      <StyledNav>
        <div className="stage">
          <svg
            className="art"
            ref={this.artRef}
            width="18"
            height="20"
            viewBox="0 0 18 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="black"
              stroke="url(#gradient1)"
              d="M8.66025 0L17.3205 5V15L8.66025 20L0 15V5L8.66025 0Z"
            />
            <defs>
              <linearGradient
                id="gradient1"
                x1="0"
                y1="10"
                x2="18"
                y2="10"
                gradientUnits="userSpaceOnUse"
              >
                <stop ref={this.artColorStartRef} stopColor="#00FFFF" />
                <stop
                  ref={this.artColorStopRef}
                  offset="1"
                  stopColor="#0FF1FF"
                />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="gaming"
            ref={this.gamingRef}
            width="35"
            height="40"
            viewBox="0 0 35 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="black"
              stroke="url(#gradient2)"
              d="M17.3205 0L34.641 10V30L17.3205 40L0 30V10L17.3205 0Z"
            />
            <defs>
              <linearGradient
                id="gradient2"
                x1="0"
                y1="20"
                x2="35"
                y2="20"
                gradientUnits="userSpaceOnUse"
              >
                <stop ref={this.gamingColorStartRef} stopColor="#20E0FF" />
                <stop
                  ref={this.gamingColorStopRef}
                  offset="1"
                  stopColor="#3DC2FF"
                />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="writing"
            ref={this.writingRef}
            width="52"
            height="60"
            viewBox="0 0 52 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="black"
              stroke="url(#gradient3)"
              d="M0.5 15.2887L25.9808 0.57735L51.4615 15.2887V44.7113L25.9808 59.4226L0.5 44.7113V15.2887Z"
            />
            <defs>
              <linearGradient
                id="gradient3"
                x1="0"
                y1="30"
                x2="52"
                y2="30"
                gradientUnits="userSpaceOnUse"
              >
                <stop ref={this.writingColorStartRef} stopColor="#4FB1FF" />
                <stop
                  ref={this.writingColorStopRef}
                  offset="1"
                  stopColor="#7C85FF"
                />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="engineering"
            ref={this.engineeringRef}
            width="70"
            height="80"
            viewBox="0 0 70 80"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="black"
              stroke="url(#gradient4)"
              d="M34.641 0L69.282 20V60L34.641 80L0 60V20L34.641 0Z"
            />
            <defs>
              <linearGradient
                id="gradient4"
                x1="0"
                y1="40"
                x2="70"
                y2="40"
                gradientUnits="userSpaceOnUse"
              >
                <stop ref={this.engineeringColorStartRef} stopColor="#8D72FF" />
                <stop
                  ref={this.engineeringColorStopRef}
                  offset="1"
                  stopColor="#C937FF"
                />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="all"
            ref={this.allRef}
            width="88"
            height="100"
            viewBox="0 0 88 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="black"
              stroke="url(#gradient5)"
              d="M44 0L87.3013 25V75L44 100L0.69873 75V25L44 0Z"
            />
            <defs>
              <linearGradient
                id="gradient5"
                x1="0"
                y1="50"
                x2="88"
                y2="50"
                gradientUnits="userSpaceOnUse"
              >
                <stop ref={this.allColorStartRef} stopColor="#DA25FF" />
                <stop
                  ref={this.allColorStopRef}
                  offset="1"
                  stopColor="#FF25DA"
                />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="ecology"
            ref={this.ecologyRef}
            width="70"
            height="80"
            viewBox="0 0 70 80"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="black"
              stroke="url(#gradient6)"
              d="M34.641 0L69.282 20V60L34.641 80L0 60V20L34.641 0Z"
            />
            <defs>
              <linearGradient
                id="gradient6"
                x1="0"
                y1="40"
                x2="70"
                y2="40"
                gradientUnits="userSpaceOnUse"
              >
                <stop ref={this.ecologyColorStartRef} stopColor="#FF37C9" />
                <stop
                  ref={this.ecologyColorStopRef}
                  offset="1"
                  stopColor="#FF728D"
                />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="adventure"
            ref={this.adventureRef}
            width="52"
            height="60"
            viewBox="0 0 52 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="black"
              stroke="url(#gradient7)"
              d="M0.5 15.2887L25.9808 0.57735L51.4615 15.2887V44.7113L25.9808 59.4226L0.5 44.7113V15.2887Z"
            />
            <defs>
              <linearGradient
                id="gradient7"
                x1="0"
                y1="30"
                x2="52"
                y2="30"
                gradientUnits="userSpaceOnUse"
              >
                <stop ref={this.adventureColorStartRef} stopColor="#FF847B" />
                <stop
                  ref={this.adventureColorStopRef}
                  offset="1"
                  stopColor="#FFB04F"
                />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="mindfulness"
            ref={this.mindfulnessRef}
            width="35"
            height="40"
            viewBox="0 0 35 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="black"
              stroke="url(#gradient8)"
              d="M17.3205 0L34.641 10V30L17.3205 40L0 30V10L17.3205 0Z"
            />
            <defs>
              <linearGradient
                id="gradient8"
                x1="0"
                y1="20"
                x2="35"
                y2="20"
                gradientUnits="userSpaceOnUse"
              >
                <stop ref={this.mindfulnessColorStartRef} stopColor="#FFC23E" />
                <stop
                  ref={this.mindfulnessColorStopRef}
                  offset="1"
                  stopColor="#FFDF20"
                />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="veganism"
            ref={this.veganismRef}
            width="18"
            height="20"
            viewBox="0 0 18 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="black"
              stroke="url(#gradient9)"
              d="M8.66025 0L17.3205 5V15L8.66025 20L0 15V5L8.66025 0Z"
            />
            <defs>
              <linearGradient
                id="gradient9"
                x1="0"
                y1="10"
                x2="18"
                y2="10"
                gradientUnits="userSpaceOnUse"
              >
                <stop ref={this.veganismColorStartRef} stopColor="#FFF10F" />
                <stop
                  ref={this.veganismColorStopRef}
                  offset="1"
                  stopColor="#FFFF00"
                />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </StyledNav>
    )
  }
}
