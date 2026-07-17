import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as SlurmSvg } from "./images/slurm-icon.svg"

export const SlurmIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
  }
>(function InnerSlurmIcon(props, ref) {
  return <Icon ref={ref} component={SlurmSvg} {...props} />
})
