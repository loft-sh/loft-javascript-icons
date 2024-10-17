import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as Expand } from "./images/expand.svg"

export const ExpandIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerExpandIcon(props, ref) {
  return <Icon ref={ref} component={Expand} {...props} />
})
