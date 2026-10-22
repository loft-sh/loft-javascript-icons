import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as RunAILogoSvg } from "./images/RunAILogo.svg"

export const RunAILogo = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerRunAILogo(props, ref) {
  return <Icon ref={ref} component={RunAILogoSvg} {...props} />
})
