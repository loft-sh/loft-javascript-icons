import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as SvgClipboardIcon } from "./images/clipboard.svg"

export const ClipboardIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerClipboardIcon(props, ref) {
  return <Icon ref={ref} component={SvgClipboardIcon} {...props} />
})
