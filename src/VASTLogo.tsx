import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as VASTLogoSvg } from "./images/VAST.svg"

export const VASTLogo = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerVASTLogo(props, ref) {
  return <Icon ref={ref} component={VASTLogoSvg} {...props} />
})
