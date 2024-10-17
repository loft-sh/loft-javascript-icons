import React from "react"

import Icon from "./Icon"
import { ReactComponent as ExternalLink } from "./images/external-link-icon.svg"

export function ExternalLinkIcon(props: { className?: string; style?: React.CSSProperties }) {
  return <Icon {...props} component={ExternalLink} />
}
