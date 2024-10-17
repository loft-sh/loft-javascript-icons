import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as SvgExternallyManaged } from "./images/externally-managed.svg"

export const ExternallyManagedIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerCodeIcon(props, ref) {
  return <Icon ref={ref} component={SvgExternallyManaged} {...props} />
})
