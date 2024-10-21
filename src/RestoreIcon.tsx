import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as Restore } from "./images/Restore.svg"

export const RestoreIcon = forwardRef<SVGSVGElement>(function InnerArgoCDIcon(props, ref) {
  return <Icon ref={ref} component={Restore} {...props} />
})
