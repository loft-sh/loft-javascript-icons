import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon"
import React, { forwardRef, SVGProps } from "react"

export type IconProps = {
  component:
    | React.ComponentType<SVGProps<SVGSVGElement>>
    | React.ComponentType<React.SVGProps<SVGSVGElement> & { disabled?: boolean }>
    | React.ForwardRefExoticComponent<CustomIconComponentProps>
} & SVGProps<SVGSVGElement> & { disabled?: boolean }

const Icon = forwardRef<SVGSVGElement, IconProps>(function InnerIcon(
  { component: SvgComponent, ...props },
  ref
) {
  return (
    <SvgComponent
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
      className={`anticon ${props.className}`}
      ref={ref}
    />
  )
})

export type TIcon = typeof Icon

export default Icon
