import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as HelmSvg } from "./images/helm-icon.svg"

export const HelmIcon = forwardRef<SVGSVGElement>(function InnerHelmIcon(props, ref) {
  return <Icon ref={ref} component={HelmSvg} {...props} />
})
