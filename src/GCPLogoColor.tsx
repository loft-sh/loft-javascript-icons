import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as GCPLogoColorSvg } from "./images/gcp-logo-color.svg"

export const GCPLogoColor = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerGCPLogoColor(props, ref) {
  return <Icon ref={ref} component={GCPLogoColorSvg} {...props} />
})
