import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as MicrosoftLogoColorSvg } from "./images/microsoft-logo-color.svg"

export const MicrosoftLogoColor = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerMicrosoftLogoColor(props, ref) {
  return <Icon ref={ref} component={MicrosoftLogoColorSvg} {...props} />
})
