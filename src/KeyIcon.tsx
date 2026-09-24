import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as KeySvg } from "./images/key.svg"

export const KeyIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerKeyIcon(props, ref) {
  return <Icon ref={ref} component={KeySvg} {...props} />
})
