import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as Stop } from "./images/stop.svg"

export const StopIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerStopIcon(props, ref) {
  return <Icon ref={ref} component={Stop} {...props} />
})
