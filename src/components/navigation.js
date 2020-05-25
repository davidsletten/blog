import React, { Component } from "react"
import Context from "../utils/context"
import { navigate } from "gatsby"
import styled from "styled-components"
import Close from "../../content/assets/close.svg"
import Boundary from "../../content/assets/boundary.svg"
import LeftHex from "./left-hex"
import MiddleHex from "./middle-hex"
import RightHex from "./right-hex"
import Previous from "./previous"
import Next from "./next"

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: -30px;
  height: 130px;
  &:before {
    content: "";
    position: absolute;
    top: 290px;
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
    top: 290px;
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
  .stage {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 214px;
    height: 80px;
  }
  .boundary {
    position: relative;
    top: -30px;
  }
  button {
    z-index: 1;
    cursor: default;
    outline: none;
    border: 0;
    padding: 0;
    background: transparent;
    &.active {
      cursor: pointer;
    }
  }
`

export default class Navigation extends Component {
  render() {
    const { page } = this.props
    return (
      <Context.Consumer>
        {({ data }) => (
          <StyledNav>
            <div className="stage">
              <button
                title="Previous"
                className={data.previous ? "active" : ""}
                onClick={() =>
                  data.previous ? navigate(data.previous.fields.slug) : false
                }
              >
                <LeftHex>
                  {page !== "home" && (
                    <Previous
                      x="5"
                      y="5"
                      fill={data.previous ? "white" : "#414141"}
                    />
                  )}
                </LeftHex>
              </button>
              <button
                title="Home"
                className={page !== "home" ? "active" : ""}
                onClick={() => (page !== "home" ? navigate("/") : false)}
              >
                <MiddleHex>
                  {page !== "home" && <Close x="5" y="5" fill="#414141" />}
                </MiddleHex>
              </button>
              <button
                title="Next"
                className={data.next ? "active" : ""}
                onClick={() =>
                  data.next ? navigate(data.next.fields.slug) : false
                }
              >
                <RightHex>
                  {page !== "home" && (
                    <Next x="5" y="5" fill={data.next ? "white" : "#414141"} />
                  )}
                </RightHex>
              </button>
            </div>
            <Boundary className="boundary" />
          </StyledNav>
        )}
      </Context.Consumer>
    )
  }
}
