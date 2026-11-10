import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as KubevirtLogoSvg } from "./images/KubevirtLogo.svg"

export const KubevirtLogo = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerKubevirtLogo(props, ref) {
  return <Icon ref={ref} component={KubevirtLogoSvg} {...props} />
})
