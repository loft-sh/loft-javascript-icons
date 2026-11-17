import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as OrganizationOutlinedSvg } from "./images/organization-outlined.svg"

export const OrganizationOutlined = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerOrganizationOutlined(props, ref) {
  return <Icon ref={ref} component={OrganizationOutlinedSvg} {...props} />
})
