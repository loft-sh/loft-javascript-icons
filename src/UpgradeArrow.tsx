import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as UpgradeArrowSvg } from "./images/upgrade-arrow.svg"

export const UpgradeArrow = forwardRef<SVGSVGElement>(function UpgradeArrow(props, ref) {
  return <Icon ref={ref} component={UpgradeArrowSvg} {...props} />
})
