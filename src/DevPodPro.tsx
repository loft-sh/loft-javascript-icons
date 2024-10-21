import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as LoftDevPodSvg } from "./images/devpod-pro-logo-black.svg"

export const DevPodProIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerDevPodProIcon(props, ref) {
  return <Icon ref={ref} component={LoftDevPodSvg} {...props} />
})
