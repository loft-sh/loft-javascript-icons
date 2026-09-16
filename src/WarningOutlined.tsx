import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as WarningOutlinedSvg } from "./images/WarningOutlined.svg"

export const WarningOutlined = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerWarningOutlined(props, ref) {
  return <Icon ref={ref} component={WarningOutlinedSvg} aria-hidden={true} {...props} />
})
