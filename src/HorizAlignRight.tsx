import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as HorizAlignRight } from "./images/HorizAlignRight.svg"

export const HorizAlignRightIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerHorizAlignRightIcon(props, ref) {
  return <Icon ref={ref} component={HorizAlignRight} {...props} />
})
