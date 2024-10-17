import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as VClusterRocketSvg } from "./images/vcluster-rocket.svg"

export const VClusterRocketIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerVClusterRocketIcon(props, ref) {
  return <Icon ref={ref} component={VClusterRocketSvg} {...props} />
})
