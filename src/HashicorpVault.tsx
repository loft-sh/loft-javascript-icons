import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as HashicorpVaultSvg } from "./images/hashicorp-vault.svg"

export const HashicorpVaultIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerHashicorpVaultIcon(props, ref) {
  return <Icon ref={ref} component={HashicorpVaultSvg} {...props} />
})
