import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as KubevirtOutlinedSvg } from "./images/kubevirt-outlined.svg"

export const KubevirtOutlined = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerKubevirtOutlined(props, ref) {
  return <Icon ref={ref} component={KubevirtOutlinedSvg} {...props} />
})
