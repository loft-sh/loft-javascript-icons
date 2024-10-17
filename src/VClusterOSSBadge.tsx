import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as VClusterOSSBadgeSvg } from "./images/vcluster-oss-badge.svg"

export const VClusterOSSBadgeIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerVClusterOSSBadgeIcon(props, ref) {
  return <Icon ref={ref} component={VClusterOSSBadgeSvg} {...props} />
})
