import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as VSCodeBrowserRunSvg } from "./images/vscode-browser-run-icon.svg"

export const VSCodeBrowserRunIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerVSCodeBrowserRunIcon(props, ref) {
  return <Icon ref={ref} component={VSCodeBrowserRunSvg} {...props} />
})
