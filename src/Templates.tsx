import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as TemplatesSvg } from "./images/templates-icon.svg"

export const TemplatesIcon = forwardRef<SVGSVGElement>(function InnerTemplatesIcon(props, ref) {
  return <Icon ref={ref} component={TemplatesSvg} {...props} />
})
