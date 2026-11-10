import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as RancherSvg } from "./images/rancher-icon.svg"

export const RancherIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerRancherIcon(props, ref) {
  return <Icon ref={ref} component={RancherSvg} {...props} />
})
