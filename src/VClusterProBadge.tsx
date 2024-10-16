import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as VClusterProBadgeSvg } from "./images/vcluster-pro-badge.svg"

export const VClusterProBadgeIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerVClusterProBadgeIcon(props, ref) {
  return <Icon ref={ref} component={VClusterProBadgeSvg} {...props} />
})
