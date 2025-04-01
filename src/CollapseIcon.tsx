import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as Backup } from "./images/collapse-custom.svg"

export const CollapseIcon = forwardRef<SVGSVGElement>(function InnerArgoCDIcon(props, ref) {
  return <Icon ref={ref} component={Backup} {...props} />
})
