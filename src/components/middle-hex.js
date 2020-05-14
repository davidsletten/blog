import React from "react"

export default ({ children }) => (
  <svg
    width="70"
    height="80"
    viewBox="0 0 70 80"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="black"
      fillOpacity="0.7"
      stroke="url(#gradient5)"
      d="M34.641 0L69.282 20V60L34.641 80L0 60V20L34.641 0Z"
    />
    {children}
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
)
