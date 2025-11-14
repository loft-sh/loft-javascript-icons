import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as ParameterSvg } from "./images/parameter.svg"

export const ParameterIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerParameterIcon(props, ref) {
  return <Icon ref={ref} component={ParameterSvg} {...props} />
})
