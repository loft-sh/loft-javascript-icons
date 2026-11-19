import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as CPUSvg } from "./images/CPU.svg"

export const CPUOutlined = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerCPUOutlined(props, ref) {
  return <Icon ref={ref} component={CPUSvg} {...props} />
})
