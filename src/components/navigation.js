import React, { Component } from "react"
import styled from "styled-components"
import Close from "../../content/assets/close.svg"
import Previous from "../../content/assets/previous.svg"
import Next from "../../content/assets/next.svg"

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: -30px;
  height: 140px;
  * {
    z-index: 1;
  }
  &:before {
    content: "";
    position: absolute;
    top: 300px;
    right: 50%;
    transform: translateX(-127px);
    border-top-width: 1px;
    border-right-width: 0;
    border-bottom-width: 0;
    border-left-width: 0;
    border-top-style: solid;
    border-image: linear-gradient(to right, cyan, #8d72ff) 1;
    width: 50%;
  }
  &:after {
    content: "";
    position: absolute;
    top: 300px;
    left: 50%;
    transform: translateX(127px);
    border-top-width: 1px;
    border-right-width: 0;
    border-bottom-width: 0;
    border-left-width: 0;
    border-top-style: solid;
    border-image: linear-gradient(to right, #ff728d, yellow) 1;
    width: 50%;
  }
  .boundary {
    position: relative;
    top: -25px;
  }
  .stage {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 214px;
    height: 80px;
  }
`

export default class Navigation extends Component {
  render() {
    return (
      <StyledNav>
        <div className="stage">
          <svg
            width="52"
            height="60"
            viewBox="0 0 52 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="black"
              fill-opacity="0.7"
              stroke="url(#gradient4)"
              d="M0.5 15.2887L25.9808 0.57735L51.4615 15.2887V44.7113L25.9808 59.4226L0.5 44.7113V15.2887Z"
            />
            <Previous x="5" y="5" />
            <defs>
              <linearGradient
                id="gradient4"
                x1="0"
                y1="30"
                x2="52"
                y2="30"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8D72FF" />
                <stop offset="1" stopColor="#C937FF" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            width="70"
            height="80"
            viewBox="0 0 70 80"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="black"
              fill-opacity="0.7"
              stroke="url(#gradient5)"
              d="M34.641 0L69.282 20V60L34.641 80L0 60V20L34.641 0Z"
            />
            <Close x="5" y="5" />
            <defs>
              <linearGradient
                id="gradient5"
                x1="0"
                y1="40"
                x2="70"
                y2="40"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#DA25FF" />
                <stop offset="1" stopColor="#FF25DA" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            width="52"
            height="60"
            viewBox="0 0 52 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="black"
              fill-opacity="0.7"
              stroke="url(#gradient6)"
              d="M0.5 15.2887L25.9808 0.57735L51.4615 15.2887V44.7113L25.9808 59.4226L0.5 44.7113V15.2887Z"
            />
            <Next x="5" y="5" />
            <defs>
              <linearGradient
                id="gradient6"
                x1="0"
                y1="30"
                x2="52"
                y2="30"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF37C9" />
                <stop offset="1" stopColor="#FF728D" />
              </linearGradient>
            </defs>
          </svg>
        </div>
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
