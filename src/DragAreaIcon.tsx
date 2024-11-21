import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as DragArea } from "./images/drag-area.svg"

export const DragAreaIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerDragAreaIcon(props, ref) {
  return <Icon ref={ref} component={DragArea} {...props} />
})
