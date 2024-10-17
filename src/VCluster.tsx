import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as VClusterSvg } from "./images/vcluster-logo.svg"

export const VClusterIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
  }
>(function InnerVClusterIcon(props, ref) {
  return <Icon ref={ref} component={VClusterSvg} {...props} />
})
