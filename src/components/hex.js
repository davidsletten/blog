import React from "react"

export default ({ children }) => (
  <svg
    width="52"
    height="60"
    viewBox="0 0 52 60"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="black"
      stroke="magenta"
      d="M0.5 15.2887L25.9808 0.57735L51.4615 15.2887V44.7113L25.9808 59.4226L0.5 44.7113V15.2887Z"
    />
    {children}
  </svg>
)
