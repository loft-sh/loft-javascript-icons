import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as TerraformLogoSvg } from "./images/TerraformLogo.svg"

export const TerraformLogo = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerTerraformLogo(props, ref) {
  return <Icon ref={ref} component={TerraformLogoSvg} {...props} />
})
