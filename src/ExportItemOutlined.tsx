import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as ExportItemOutlinedSvg } from "./images/export-outlined.svg"

export const ExportItemOutlined = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerExportItemOutlined(props, ref) {
  return <Icon ref={ref} component={ExportItemOutlinedSvg} {...props} />
})
