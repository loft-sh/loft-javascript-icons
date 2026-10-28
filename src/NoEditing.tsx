import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as SvgNoEditing } from "./images/NoEditing.svg"

export const NoEditingIcon = forwardRef<SVGSVGElement, { className?: string }>(
  function InnerNoEditingIcon(props, ref) {
    return <Icon ref={ref} component={SvgNoEditing} {...props} />
  }
)
