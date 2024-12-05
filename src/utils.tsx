/* eslint-disable react/display-name */
import React, { forwardRef, Suspense } from "react"

import Icon from "./Icon"

const RandomIcon = React.lazy(() => import("@ant-design/icons/DeleteOutlined"))
export type TLazyIcon = typeof RandomIcon

type IconComponentProps = Omit<React.ComponentProps<typeof Icon>, "component">

export function createLazyIconComponent(lazyIcon: TLazyIcon) {
  const LazyIcon = forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
    return (
      <Suspense fallback={null}>
        <Icon component={lazyIcon} {...props} ref={ref} />
      </Suspense>
    )
  })

  return LazyIcon
}
