import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as KubevirtLogoColorSvg } from "./images/kubevirt-logo-color.svg"

export const KubevirtLogoColor = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerKubevirtLogoColor(props, ref) {
  return <Icon ref={ref} component={KubevirtLogoColorSvg} {...props} />
})
