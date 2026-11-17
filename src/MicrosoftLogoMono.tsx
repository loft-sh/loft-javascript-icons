import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as MicrosoftLogoMonoSvg } from "./images/microsoft-logo-mono.svg"

export const MicrosoftLogoMono = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerMicrosoftLogoMono(props, ref) {
  return <Icon ref={ref} component={MicrosoftLogoMonoSvg} {...props} />
})
