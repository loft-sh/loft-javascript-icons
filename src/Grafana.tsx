import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as GrafanaSvg } from "./images/grafana-icon.svg"

export const GrafanaIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
  }
>(function InnerGrafanaIcon(props, ref) {
  return <Icon ref={ref} component={GrafanaSvg} {...props} />
})
