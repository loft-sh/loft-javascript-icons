import React, { forwardRef } from "react"

import Icon, { IconProps } from "./Icon"
import { ReactComponent as CubeSvg } from "./images/Cube.svg"

export const CubeOutlined = forwardRef<SVGSVGElement, Omit<IconProps, "ref" | "component">>(
  function InnerCubeOutlined(props, ref) {
    return <Icon ref={ref} component={CubeSvg} {...props} />
  }
)
