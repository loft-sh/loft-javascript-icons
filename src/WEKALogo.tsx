import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as WEKALogoSvg } from "./images/WEKA.svg"

export const WEKALogo = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerWEKALogo(props, ref) {
  return <Icon ref={ref} component={WEKALogoSvg} {...props} />
})
