import React, { forwardRef } from "react"

import Icon, { IconProps } from "./Icon"
import { ReactComponent as EditPencilSvg } from "./images/edit-pencil.svg"

export const EditPencilIcon = forwardRef<SVGSVGElement, Omit<IconProps, "ref" | "component">>(
  function InnerEditPencilIcon(props, ref) {
    return <Icon ref={ref} component={EditPencilSvg} {...props} />
  }
)
