import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as Expand } from "./images/regex.svg"

export const RegexIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerRegexIcon(props, ref) {
  return <Icon ref={ref} component={Expand} {...props} />
})
