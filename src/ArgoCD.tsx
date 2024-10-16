import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as ArgoCDSvg } from "./images/argocd-icon.svg"

export const ArgoCDIcon = forwardRef<SVGSVGElement>(function InnerArgoCDIcon(props, ref) {
  return <Icon ref={ref} component={ArgoCDSvg} {...props} />
})
