import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as BoxOutlinedSvg } from "./images/BoxOutlined.svg"

export const BoxOutlined = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerBoxOutlined(props, ref) {
  return <Icon ref={ref} component={BoxOutlinedSvg} {...props} />
})
