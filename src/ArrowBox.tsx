import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as ArrowBoxSvg } from "./images/data-box.svg"

export const ArrowBoxIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerArrowBoxIcon(props, ref) {
  return <Icon ref={ref} component={ArrowBoxSvg} {...props} />
})
