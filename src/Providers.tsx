import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as ProvidersSvg } from "./images/providers-icon.svg"

export const ProvidersIcon = forwardRef<SVGSVGElement>(function InnerProvidersIcon(props, ref) {
  return <Icon ref={ref} component={ProvidersSvg} {...props} />
})
