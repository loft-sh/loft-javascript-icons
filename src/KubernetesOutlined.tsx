import React, { forwardRef } from "react"

import Icon, { IconProps } from "./Icon"
import { ReactComponent as KubernetesSvg } from "./images/Kubernetes.svg"

export const KubernetesOutlinedIcon = forwardRef<
  SVGSVGElement,
  Omit<IconProps, "component" | "ref">
>(function InnerKubernetesIcon(props, ref) {
  return <Icon ref={ref} component={KubernetesSvg} {...props} />
})
