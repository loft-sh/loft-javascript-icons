import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as PostgresSvg } from "./images/postgres-icon.svg"

export const PostgresIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerPostgresIcon(props, ref) {
  return <Icon ref={ref} component={PostgresSvg} {...props} />
})
