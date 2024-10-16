import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as SleepSvg } from "./images/sleep.svg"

export const SleepIcon = forwardRef<SVGSVGElement>(function InnerSleepIcon(props, ref) {
  return <Icon ref={ref} component={SleepSvg} {...props} />
})
