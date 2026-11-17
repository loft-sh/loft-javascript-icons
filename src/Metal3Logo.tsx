import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as Metal3LogoSvg } from "./images/Metal3Logo.svg"

export const Metal3Logo = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerMetal3Logo(props, ref) {
  return <Icon ref={ref} component={Metal3LogoSvg} {...props} />
})
