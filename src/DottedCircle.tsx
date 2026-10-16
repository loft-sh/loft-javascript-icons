import React, { forwardRef } from "react"

import Icon, { IconProps } from "./Icon"
import { ReactComponent as DottedCircleSvg } from "./images/dotted-circle.svg"

export const DottedCircle = forwardRef<SVGSVGElement, Omit<IconProps, "ref" | "component">>(
  function InnerDottedCircle(props, ref) {
    return <Icon ref={ref} component={DottedCircleSvg} {...props} />
  }
)
