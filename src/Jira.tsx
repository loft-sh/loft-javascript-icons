import React, { forwardRef } from "react"

import Icon from "./Icon"
import { ReactComponent as JiraSvg } from "./images/jira-external-icon.svg"

export const JiraIcon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    style?: React.CSSProperties
  }
>(function InnerJiraIcon(props, ref) {
  return <Icon ref={ref} component={JiraSvg} {...props} />
})
