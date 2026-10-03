import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as GCPLogoMonoSvg } from "./images/gcp-logo-mono.svg"

export const GCPLogoMono = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerGCPLogoMono(props, ref) {
  return <Icon ref={ref} component={GCPLogoMonoSvg} {...props} />
})
