import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as NvidiaLogoSvg } from "./images/NvidiaLogo.svg"

export const NvidiaLogo = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerNvidiaLogo(props, ref) {
  return <Icon ref={ref} component={NvidiaLogoSvg} {...props} />
})
