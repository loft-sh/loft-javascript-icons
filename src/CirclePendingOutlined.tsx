import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as SvgCirclePendingOutlinedIcon } from "./images/circle-outlined-pending.svg"

export const CirclePendingOutlinedIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerCirclePendingOutlinedIcon(props, ref) {
  return <Icon ref={ref} component={SvgCirclePendingOutlinedIcon} {...props} />
})
