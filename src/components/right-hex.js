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
      fillOpacity="0.7"
      stroke="url(#gradient6)"
      d="M0.5 15.2887L25.9808 0.57735L51.4615 15.2887V44.7113L25.9808 59.4226L0.5 44.7113V15.2887Z"
    />
    {children}
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
)
