import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as Backup } from "./images/Backup.svg"

export const BackupIcon = forwardRef<SVGSVGElement>(function InnerArgoCDIcon(props, ref) {
  return <Icon ref={ref} component={Backup} {...props} />
})
