import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as VirtualMachineSvg } from "./images/virtual-machine.svg"

export const VirtualMachineOutlined = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerVirtualMachineOutlined(props, ref) {
  return <Icon ref={ref} component={VirtualMachineSvg} {...props} />
})
