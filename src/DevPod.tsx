import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as DevPodSvg } from "./images/devpod-logo.svg"

export const DevPodIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerDevPodIcon(props, ref) {
  return <Icon ref={ref} component={DevPodSvg} {...props} />
})
