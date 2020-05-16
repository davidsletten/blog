import React from "react"

export default ({ x, y, fill = "white" }) => (
  <svg
    width="43"
    height="49"
    viewBox="0 0 43 49"
    x={x}
    y={y}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M42.4999 12.0674L21.5336 0L3.93807 10.1124L42.4999 21V12.0674ZM21.5328 2.33311L9.11187 9.4716L40.4774 18.3274V13.2369L21.5328 2.33311Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.853 24.2022L0.499864 12.1348L42.4661 24.2022L0.499863 36.3034L18.853 24.2022ZM12.7306 17.7562L35.1571 24.2049L12.7032 30.6796L22.5307 24.1999L12.7306 17.7562Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.8369 24.0337L0.533581 32.2247L0.533581 15.8427L12.8369 24.0337ZM2.55605 19.6188L9.18742 24.0337L2.55605 28.4486L2.55605 19.6188Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.4999 48.3034L42.4662 36.2359V27.3034L3.90437 38.191L21.4999 48.3034ZM9.07816 38.8318L21.4991 45.9702L40.4437 35.0665V29.9759L9.07816 38.8318Z"
      fill={fill}
    />
  </svg>
)
