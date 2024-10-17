import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as JupyterNotebookBrowserRunSvg } from "./images/jupyter-notebook-browser-run-icon.svg"

export const JupyterNotebookBrowserRunIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerJupyterNotebookBrowserRunIcon(props, ref) {
  return <Icon ref={ref} component={JupyterNotebookBrowserRunSvg} {...props} />
})
