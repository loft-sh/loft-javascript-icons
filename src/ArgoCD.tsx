import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as ArgoCDSvg } from "./images/argocd-icon.svg"

export const ArgoCDIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerArgoCDIcon(props, ref) {
  return <Icon ref={ref} component={ArgoCDSvg} {...props} />
})
