import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as TerraformSvg } from "./images/teraform-svg.svg"

export const TerraformIcon = forwardRef<SVGSVGElement>(function InnerTerraformIcon(props, ref) {
  return <Icon ref={ref} component={TerraformSvg} {...props} />
})
