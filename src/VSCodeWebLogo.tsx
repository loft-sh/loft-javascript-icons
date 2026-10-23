import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as Expand } from "./images/vscode-web-logo.svg"

export const VSCodeWebLogo = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerVSCodeWebLogo(props, ref) {
  return <Icon ref={ref} component={Expand} {...props} />
})
