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
      d="M0.499817 36.2359L21.4661 48.3033L39.0616 38.191L0.499818 27.3033L0.499817 36.2359ZM21.4668 45.9702L33.8878 38.8317L2.52229 29.9759L2.52229 35.0664L21.4668 45.9702Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.1467 24.1011L42.4998 36.1685L0.53355 24.1011L42.4998 12L24.1467 24.1011ZM30.2691 30.5471L7.84258 24.0984L30.2964 17.6237L20.469 24.1035L30.2691 30.5471Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30.1627 24.2696L42.4661 16.0786V32.4606L30.1627 24.2696ZM40.4436 28.6845L33.8123 24.2696L40.4436 19.8548V28.6845Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.4998 -2.67029e-05L0.533527 12.0674L0.533526 21L39.0953 10.1123L21.4998 -2.67029e-05ZM33.9215 9.47157L21.5006 2.33309L2.556 13.2369L2.556 18.3274L33.9215 9.47157Z"
      fill={fill}
    />
  </svg>
)
