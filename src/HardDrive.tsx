import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as HardDriveSvg } from "./images/hard_drive.svg"

export const HardDriveIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerHardDriveIcon(props, ref) {
  return <Icon ref={ref} component={HardDriveSvg} {...props} />
})
