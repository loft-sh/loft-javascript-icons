import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as MysqlSvg } from "./images/mysql-icon.svg"

export const MysqlIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerMysqlIcon(props, ref) {
  return <Icon ref={ref} component={MysqlSvg} {...props} />
})
