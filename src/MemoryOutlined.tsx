import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as MemorySvg } from "./images/memory.svg"

export const MemoryOutlined = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerMemoryOutlined(props, ref) {
  return <Icon ref={ref} component={MemorySvg} {...props} />
})
