import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as SvgCodeIcon } from "./images/code.svg"

export const CodeIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerCodeIcon(props, ref) {
  return <Icon ref={ref} component={SvgCodeIcon} {...props} />
})
