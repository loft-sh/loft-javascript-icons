import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as SvgCheckCircleOutlineFilled } from "./images/check-circle-outlined-filled.svg"

export const CheckCircleOutlineFilledIcon = forwardRef<SVGSVGElement>(
  function InnerCheckCircleOutlineFilledIcon(props, ref) {
    return <Icon ref={ref} component={SvgCheckCircleOutlineFilled} {...props} />
  }
)
