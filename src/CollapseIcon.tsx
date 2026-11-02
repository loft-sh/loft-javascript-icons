import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as Collapse } from "./images/collapse.svg"

export const CollapseIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerExpandIcon(props, ref) {
  return <Icon ref={ref} component={Collapse} {...props} />
})
