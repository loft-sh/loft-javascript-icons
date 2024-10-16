import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as NotFoundSVG } from "./images/not-found.svg"

export const NotFoundIcon = forwardRef<SVGSVGElement>(function InnerNotFound(props, ref) {
  return <Icon ref={ref} component={NotFoundSVG} {...props} />
})
