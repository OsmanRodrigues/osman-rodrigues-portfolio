import React from 'react'
import Link, { LinkProps } from 'next/link'
import { LinkButtonWrapper } from './button.style'
export const LinkButton: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <LinkButtonWrapper>
      <Link {...props}>{children}</Link>
    </LinkButtonWrapper>
  )
}
