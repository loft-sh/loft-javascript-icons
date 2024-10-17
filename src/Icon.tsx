import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon"
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon"
import React, { forwardRef, SVGProps } from "react"

export type IconProps = {
  component:
    | React.ComponentType<SVGProps<SVGSVGElement>>
    | React.ComponentType<AntdIconProps | React.SVGProps<SVGSVGElement>>
    | React.ForwardRefExoticComponent<CustomIconComponentProps>
} & SVGProps<SVGSVGElement> &
  AntdIconProps

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
