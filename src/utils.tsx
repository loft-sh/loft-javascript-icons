import React, { forwardRef, lazy, Suspense } from "react"

import Icon from "./Icon"

const FallbackIcon = forwardRef<HTMLSpanElement>((_, ref) => <span ref={ref} />)
FallbackIcon.displayName = "FallbackIcon"

type IconComponentProps = Omit<React.ComponentProps<typeof Icon>, "component">

// First, define a type for the import function
type ImportFn = () => Promise<typeof import("@ant-design/icons/DeleteOutlined")>

export function createLazyIconComponent(importFn: ImportFn) {
  const lazyIcon = lazy(() =>
    importFn().catch((e) => {
      console.error(e)

      return {
        default:
          FallbackIcon as unknown as typeof import("@ant-design/icons/DeleteOutlined").default,
      }
    })
  )

  const LazyIcon = forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
    return (
      <Suspense fallback={null}>
        <Icon component={lazyIcon} {...props} ref={ref} />
      </Suspense>
    )
  })

  // Get the icon name from the last part of the import path for display name
  LazyIcon.displayName = `LazyIcon`

  return LazyIcon
}
