import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as ImportItemOutlinedSvg } from "./images/import-outlined.svg"

export const ImportItemOutlined = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerImportItemOutlined(props, ref) {
  return <Icon ref={ref} component={ImportItemOutlinedSvg} {...props} />
})
