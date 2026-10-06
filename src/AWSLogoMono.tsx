import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as AWSLogoMonoSvg } from "./images/amazon-logo-mono.svg"

export const AWSLogoMono = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerAWSLogoMono(props, ref) {
  return <Icon ref={ref} component={AWSLogoMonoSvg} {...props} />
})
