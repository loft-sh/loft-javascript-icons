import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as EtcdSvg } from "./images/etcd-icon.svg"

export const EtcdIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerEtcdIcon(props, ref) {
  return <Icon ref={ref} component={EtcdSvg} {...props} />
})
