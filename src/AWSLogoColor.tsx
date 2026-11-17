import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as AWSLogoColorSvg } from "./images/amazon-logo-color.svg"

export const AWSLogoColor = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerAWSLogoColor(props, ref) {
  return <Icon ref={ref} component={AWSLogoColorSvg} {...props} />
})
