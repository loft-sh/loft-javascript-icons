import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as LinearSvg } from "./images/linear-external-icon.svg"

export const LinearIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerLinearIcon(props, ref) {
  return <Icon ref={ref} component={LinearSvg} {...props} />
})
